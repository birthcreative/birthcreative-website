"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

export default function SubmissionForm({kind, submitLabel, children}: {kind: "contact" | "onboarding"; submitLabel: string; children: ReactNode}) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const attempt = useRef<{payload: string; id: string} | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const payload = JSON.stringify({kind, ...fields});
    if (attempt.current?.payload !== payload) attempt.current = {payload, id: crypto.randomUUID()};
    setPending(true);
    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/submissions", {method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify({kind, ...fields, requestId: attempt.current.id})});
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Unable to confirm delivery. Please try again.");
      setStatus("success");
      setMessage(kind === "contact" ? "Your message has been sent. Thank you for getting in touch." : "Your onboarding form has been sent. Thank you.");
      form.reset();
      attempt.current = null;
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to confirm delivery. Please try again.");
    } finally { setPending(false); }
  }
  return <form onSubmit={submit} className="space-y-6 bg-white p-8 rounded-lg border border-[#D0D5DD]">
    <fieldset disabled={pending} className="space-y-6">
      {children}
      <div aria-hidden="true" className="hidden"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button type="submit" className="btn-primary w-full sm:w-auto disabled:opacity-60">{pending ? "Sending…" : submitLabel}</button>
    </fieldset>
    <div role={status === "error" ? "alert" : "status"} aria-live="polite" className={status === "error" ? "text-red-800" : "text-dark"}>{message}</div>
    <noscript>Please email <a href="mailto:joseph@thejclabs.com">joseph@thejclabs.com</a> to get in touch.</noscript>
  </form>;
}
