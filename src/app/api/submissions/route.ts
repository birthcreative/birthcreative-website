import { createHash } from "node:crypto";
import { deliverSubmission, validateSubmission } from "@/lib/submissions";

export const runtime = "nodejs";
const recent = new Map<string, {expires: number; requests: Set<string>}>();
const headers = {"cache-control": "no-store"};

export async function POST(request: Request) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? new URL(request.url).host;
  const protocol = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  if (request.headers.get("origin") !== `${protocol}://${host}`) return Response.json({error: "Please submit from this website."}, {status: 403, headers});
  if (!request.headers.get("content-type")?.startsWith("application/json")) return Response.json({error: "Invalid request."}, {status: 415, headers});
  if (Number(request.headers.get("content-length")) > 16000) return Response.json({error: "Please shorten your message."}, {status: 413, headers});
  let input: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 16000) return Response.json({error: "Please shorten your message."}, {status: 413, headers});
    input = JSON.parse(body);
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch { return Response.json({error: "Invalid form submission."}, {status: 400, headers}); }
  // A filled hidden website field is a bot signal. Never send it or report success.
  if (input.website) return Response.json({error: "Unable to submit this form."}, {status: 400, headers});
  let submission;
  try { submission = validateSubmission(input); }
  catch (error) { return Response.json({error: error instanceof Error ? error.message : "Please check the form."}, {status: 400, headers}); }
  const now = Date.now();
  for (const [key, entry] of recent) if (entry.expires <= now) recent.delete(key);
  const ip = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for") ?? "local";
  const key = createHash("sha256").update(ip).digest("hex");
  const entry = recent.get(key) ?? {expires: now + 10 * 60_000, requests: new Set<string>()};
  if (!entry.requests.has(submission.requestId) && (entry.requests.size >= 5 || recent.size >= 5000)) return Response.json({error: "Please wait a few minutes before trying again."}, {status: 429, headers: {...headers, "retry-after": "600"}});
  entry.requests.add(submission.requestId);
  recent.set(key, entry);
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return Response.json({error: "The form is temporarily unavailable. Please email joseph@thejclabs.com."}, {status: 503, headers});
  try {
    const id = await deliverSubmission(submission, {apiKey, recipient, sender});
    return Response.json({ok: true, id}, {headers});
  } catch {
    // Do not log inquiry content, email addresses, or provider credentials.
    console.error("Birth Creative form delivery was not confirmed.");
    return Response.json({error: "We could not confirm delivery. Your entries are still here; please try again or email joseph@thejclabs.com."}, {status: 502, headers});
  }
}
