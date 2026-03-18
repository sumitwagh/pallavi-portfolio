import type { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";
import { experience, skills, beliefs, books, socials } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineer turned UI/UX designer. 4+ years at Techved Consulting and Chitranu Technologies, designing fintech, health, and e-commerce products.",
};

const PROCESS_STEPS = [
  {
    n: "01",
    icon: "🔍",
    title: "Discover",
    desc: "Interviews, audits, competitor research. I spend more time listening than sketching, at least at first.",
  },
  {
    n: "02",
    icon: "🎯",
    title: "Define",
    desc: "Turning research into a clear problem statement and user flows before a single frame gets opened.",
  },
  {
    n: "03",
    icon: "✏️",
    title: "Design",
    desc: "Wireframes to high-fidelity, with a component library. Stuff that developers can actually build.",
  },
  {
    n: "04",
    icon: "✅",
    title: "Validate",
    desc: "Usability tests, stakeholder reviews, iterations. It's not done until someone I've never met can use it.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* ── Bio ──────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="w-full">
        <div className="max-w-site mx-auto px-6 md:px-10 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="https://framerusercontent.com/images/cRxdsvdlWS8hoyleHht79kwv75M.jpg"
                  alt="Pallavi Wagh, UI/UX Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Top floating chip */}
              {/* <div className="absolute -top-3 -right-3 bg-[var(--paper)] border border-[var(--border)] rounded-xl px-4 py-2.5 shadow-sm">
                <p className="font-sans text-[11px] text-[var(--muted)] mb-0.5">Currently at</p>
                <p className="font-sans text-sm font-medium text-[var(--ink)]">Techved Consulting</p>
              </div> */}
              {/* Bottom floating chip */}
              <div className="absolute -bottom-3 -left-3 bg-[var(--paper)] border border-[var(--border)] rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
                <p className="font-sans text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  Open to full-time roles
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
                About
              </p>
              <h1
                id="about-heading"
                className="font-neue text-display-md text-[var(--ink)] mb-8"
              >
                Engineer turned{" "}
                <em className="not-italic text-[var(--accent)]">UI/UX Designer.</em>
              </h1>

              <div className="space-y-5 font-sans text-[var(--muted)] leading-relaxed mb-8">
                <p>
                  Back in 2021, I was bored during lockdown and a friend said, &ldquo;just try Figma.&rdquo;
                  Three hours later I had forgotten to eat lunch. That was my introduction to design.
                </p>
                <p>
                  I started as a UI intern at Chitranu Technologies — no portfolio, no idea what I was
                  doing. Two years of real client work later, I had both. In 2023 I joined Techved
                  Consulting, where I now design products used by thousands of people across fintech,
                  retail, and healthcare.
                </p>
                <p>
                  My engineering background means I&apos;m comfortable in Jira, have opinions about API
                  responses, and actually enjoy talking to developers. I don&apos;t just hand off
                  screens — I stay involved until the build ships.
                </p>
              </div>

              {/* Stats */}
              <dl className="grid grid-cols-3 gap-4 mb-10">
                {([ {v:"4+",l:"Years"}, {v:"30+",l:"Projects"}, {v:"3",l:"Industries"} ] as const).map((s) => (
                  <div key={s.l} className="border border-[var(--border)] rounded-xl p-4 text-center bg-[var(--paper-alt)]">
                    <dd className="font-neue text-display-sm text-[var(--ink)]">{s.v}</dd>
                    <dt className="font-sans text-[11px] text-[var(--muted)] uppercase tracking-widest mt-1">{s.l}</dt>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="mailto:hey@pallaviwagh.com"
                  className="font-sans text-sm px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] hover:opacity-75 transition-opacity"
                >
                  Say hello
                </a>
                <nav aria-label="Social links" className="flex flex-wrap gap-5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} — opens in new tab`}
                      className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                    >
                      {s.label} /
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <section
        aria-labelledby="beliefs-heading"
        className="w-full border-t border-[var(--border)] bg-[var(--paper-alt)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
            Philosophy
          </p>
          <h2
            id="beliefs-heading"
            className="font-neue text-display-sm text-[var(--ink)] mb-12"
          >
            What I believe in
          </h2>
          <ul className="grid md:grid-cols-3 gap-5">
            {beliefs.map((b) => (
              <li
                key={b.title}
                className="p-7 border border-[var(--border)] rounded-2xl bg-[var(--paper)] hover:border-[var(--accent)] transition-colors"
              >
                <span className="text-2xl mb-5 block" aria-hidden="true">{b.icon}</span>
                <h3 className="font-sans text-base font-medium text-[var(--ink)] mb-2.5">{b.title}</h3>
                <p className="font-sans text-sm text-[var(--muted)] leading-relaxed">{b.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="w-full border-t border-[var(--border)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
            How I work
          </p>
          <h2
            id="process-heading"
            className="font-neue text-display-sm text-[var(--ink)] mb-12"
          >
            My process
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.n}
                className="relative p-7 border border-[var(--border)] rounded-2xl bg-[var(--paper)] hover:border-[var(--accent)] transition-colors group"
              >
                {i < 3 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors"
                  />
                )}
                <p className="font-sans text-xs font-semibold text-[var(--accent)] mb-4 tracking-widest">
                  {step.n}
                </p>
                <span className="text-2xl mb-3 block" aria-hidden="true">{step.icon}</span>
                <h3 className="font-sans text-sm font-medium text-[var(--ink)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[var(--muted)] leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section
        aria-labelledby="exp-heading"
        className="w-full border-t border-[var(--border)] bg-[var(--paper-alt)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
            Career
          </p>
          <h2
            id="exp-heading"
            className="font-neue text-display-sm text-[var(--ink)] mb-12"
          >
            Experience
          </h2>
          <ol className="space-y-4">
            {experience.map((job) => (
              <li
                key={job.company}
                className="p-7 border border-[var(--border)] rounded-2xl bg-[var(--paper)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="font-sans text-base font-medium text-[var(--ink)]">
                        {job.company}
                      </h3>
                      {job.current && (
                        <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-medium">
                          {/* Current */}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-[var(--muted)]">{job.role}</p>
                  </div>
                  <div className="text-right font-sans text-xs text-[var(--muted)] shrink-0 space-y-0.5">
                    <p className="font-medium">{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2" aria-label={`Responsibilities at ${job.company}`}>
                  {job.highlights.map((h) => (
                    <li key={h} className="font-sans text-sm text-[var(--muted)] flex gap-2.5">
                      <span
                        className="text-[var(--accent)] mt-0.5 shrink-0 text-xs font-bold"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section
        aria-labelledby="skills-heading"
        className="w-full border-t border-[var(--border)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
            Toolkit
          </p>
          <h2
            id="skills-heading"
            className="font-neue text-display-sm text-[var(--ink)] mb-12"
          >
            Skills &amp; tools
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {(
              [
                { key: "design", label: "Design Skills", isAccent: false },
                { key: "tools",  label: "Design Tools",  isAccent: false },
                { key: "ai",     label: "AI Tools",       isAccent: true  },
              ] as const
            ).map(({ key, label, isAccent }) => (
              <div key={key}>
                <h3 className="font-sans text-xs uppercase tracking-[0.14em] text-[var(--muted)] mb-5">
                  {label}
                </h3>
                <ul className="flex flex-wrap gap-2" aria-label={label}>
                  {(skills as Record<string, string[]>)[key].map((s) => (
                    <li
                      key={s}
                      className={[
                        "font-sans text-xs px-3 py-1.5 rounded-lg border cursor-default transition-colors",
                        isAccent
                          ? "border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--paper-alt)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                          : "border-[var(--border)] text-[var(--muted)] bg-[var(--paper)] hover:border-[var(--ink)] hover:text-[var(--ink)]",
                      ].join(" ")}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Books ────────────────────────────────────────────── */}
      <section
        aria-labelledby="books-heading"
        className="w-full border-t border-[var(--border)] bg-[var(--paper-alt)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
            Reading
          </p>
          <h2
            id="books-heading"
            className="font-neue text-display-sm text-[var(--ink)] mb-12"
          >
            Books I keep returning to
          </h2>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {books.map((book) => (
              <li key={book.title} className="group">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 border border-[var(--border)] group-hover:-translate-y-1.5 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 140px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-xs font-medium text-[var(--ink)] leading-tight mb-0.5">
                  {book.title}
                </p>
                <p className="font-sans text-[11px] text-[var(--muted)]">{book.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        className="w-full border-t border-[var(--border)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
                Get in touch
              </p>
              <h2
                id="contact-heading"
                className="font-neue text-display-md text-[var(--ink)] mb-6"
              >
                Let&apos;s work{" "}
                <em className="not-italic text-[var(--accent)]">together.</em>
              </h2>
              <p className="font-sans text-base text-[var(--muted)] leading-relaxed mb-8">
                Have a project, a question, or just want to swap notes on design — I&apos;m easy to
                reach. I reply to every email, usually within a day.
              </p>
              <a
                href="mailto:hey@pallaviwagh.com"
                className="link-underline font-sans text-base text-[var(--ink)] hover:text-[var(--accent)] transition-colors mb-10 block"
                aria-label="Email hey@pallaviwagh.com"
              >
                hey@pallaviwagh.com →
              </a>
              <nav aria-label="Social links" className="flex flex-wrap gap-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — opens in new tab`}
                    className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </nav>
            </div>

            {/* Right — form */}
            <div className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--paper-alt)]">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
