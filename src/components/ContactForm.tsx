"use client";
import { useState, useId } from "react";

type F = { name: string; email: string; message: string };
type E = Partial<F>;

export default function ContactForm() {
  const uid = useId();
  const [form, setForm] = useState<F>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<E>({});
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");

  function validate() {
    const e: E = {};
    if (!form.name.trim())    e.name    = "What's your name?";
    if (!form.email.trim())   e.email   = "Email address needed.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "That doesn't look right.";
    if (!form.message.trim()) e.message = "What's on your mind?";
    setErrors(e);
    return !Object.keys(e).length;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    /* Replace with Formspree / Resend:
       const r = await fetch("https://formspree.io/f/YOUR_ID", {
         method:"POST", headers:{"Content-Type":"application/json"},
         body: JSON.stringify(form),
       });
       if (!r.ok) { setStatus("err"); return; }
    */
    await new Promise(r => setTimeout(r, 700));
    setStatus("ok");
    setForm({ name: "", email: "", message: "" });
  }

  const inp = "w-full bg-[var(--paper)] border border-[var(--border)] rounded-xl px-4 py-3 font-sans text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow";
  const lbl = "block font-sans text-xs uppercase tracking-[0.14em] text-[var(--muted)] mb-2";
  const err = "font-sans text-xs text-red-500 mt-1.5";

  return (
    <form onSubmit={submit} noValidate aria-label="Contact form" className="space-y-5">
      <div>
        <label htmlFor={`${uid}-n`} className={lbl}>Name *</label>
        <input id={`${uid}-n`} type="text" autoComplete="name" placeholder="Your name"
          value={form.name} onChange={e => setForm({...form, name: e.target.value})}
          aria-required="true" aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${uid}-ne` : undefined} className={inp} />
        {errors.name && <p id={`${uid}-ne`} role="alert" className={err}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={`${uid}-e`} className={lbl}>Email *</label>
        <input id={`${uid}-e`} type="email" autoComplete="email" placeholder="you@example.com"
          value={form.email} onChange={e => setForm({...form, email: e.target.value})}
          aria-required="true" aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${uid}-ee` : undefined} className={inp} />
        {errors.email && <p id={`${uid}-ee`} role="alert" className={err}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor={`${uid}-m`} className={lbl}>Message *</label>
        <textarea id={`${uid}-m`} placeholder="Tell me about your project…"
          value={form.message} onChange={e => setForm({...form, message: e.target.value})}
          rows={5} aria-required="true" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${uid}-me` : undefined}
          className={`${inp} resize-none`} />
        {errors.message && <p id={`${uid}-me`} role="alert" className={err}>{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="w-full py-3.5 rounded-xl bg-[var(--ink)] text-[var(--paper)] font-sans text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "ok" && (
        <p role="status" aria-live="polite" className="font-sans text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span>✓</span> Sent! I'll get back to you soon.
        </p>
      )}
      {status === "err" && (
        <p role="alert" className="font-sans text-sm text-red-500">
          Something went wrong. Email me at{" "}
          <a href="mailto:hey@pallaviwagh.com" className="underline">hey@pallaviwagh.com</a>
        </p>
      )}
    </form>
  );
}
