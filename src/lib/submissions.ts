export type Submission = {
  kind: "contact" | "onboarding";
  requestId: string;
  email: string;
  fields: Array<[string, string]>;
};

export function validateSubmission(value: unknown): Submission {
  if (!value || typeof value !== "object") throw new Error("Please complete the form.");
  const input = value as Record<string, unknown>;
  const field = (key: string, required = false, limit = 200) => {
    const value = input[key];
    if (value != null && typeof value !== "string") throw new Error("Invalid form field.");
    const text = (value as string | undefined)?.trim() ?? "";
    if ((required && !text) || text.length > limit) throw new Error("Please check the required fields and message length.");
    return text;
  };
  const requestId = field("requestId", true);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) throw new Error("Please reload the form and try again.");
  const email = field("email", true, 254);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || /[\r\n]/.test(email)) throw new Error("Please enter a valid email address.");
  let fields: Array<[string, string]>;
  if (input.kind === "contact") {
    const service = field("service");
    if (!["", "website", "redesign", "resources", "other"].includes(service)) throw new Error("Please select a listed service.");
    fields = [["Name", field("name", true)], ["Email", email], ["Service", service || "Not specified"], ["Message", field("message", true, 5000)]];
  } else if (input.kind === "onboarding") {
    const role = field("role", true);
    if (!["doula", "midwife", "healthcare", "other"].includes(role)) throw new Error("Please select a listed role.");
    fields = [["Full name", field("fullname", true)], ["Business", field("business", true)], ["Email", email], ["Phone", field("phone", false, 80)], ["Role", role], ["Business details", field("details", true, 5000)]];
  } else throw new Error("Unknown form.");
  return {kind: input.kind, requestId, email, fields};
}

export async function deliverSubmission(
  submission: Submission,
  config: {apiKey: string; recipient: string; sender: string},
  request: typeof fetch = fetch,
) {
  const response = await request("https://api.resend.com/emails", {
    method: "POST",
    headers: {"authorization": `Bearer ${config.apiKey}`, "content-type": "application/json", "idempotency-key": `birthcreative/${submission.kind}/${submission.requestId}`},
    body: JSON.stringify({
      from: config.sender,
      to: [config.recipient],
      reply_to: submission.email,
      subject: submission.kind === "contact" ? "Birth Creative: new contact inquiry" : "Birth Creative: new onboarding submission",
      text: submission.fields.map(([label, value]) => `${label}:\n${value || "Not provided"}`).join("\n\n"),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("Email provider did not accept the submission.");
  const result = await response.json() as {id?: string};
  if (!result.id) throw new Error("Email provider did not confirm the submission.");
  return result.id;
}
