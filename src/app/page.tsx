import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, socials } from "@/lib/data";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Pallavi Wagh — UI/UX Designer",
  description:
    "UI/UX Designer with 4+ years shaping fintech, health, and e-commerce products. Based in Pune — open to full-time roles.",
};

// const MARQUEE_ITEMS = [
//   "UI Design", "UX Research", "Figma", "Design Systems", "Prototyping",
//   "Wireframing", "Mobile Apps", "Web Design", "User Flows", "Interaction Design",
//   "Usability Testing", "Information Architecture",
// ];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section aria-label="Introduction" className="w-full">
       
        <div className="max-w-site mx-auto px-6 md:px-10 pt-32 pb-16 min-h-[90vh] flex flex-col justify-center items-center">
            {/* Photo */}
            <div className="relative w-40 h-40 md:w-44 md:h-44  mb-8" data-reveal>
              <div className="w-full h-full rounded-full overflow-hidden border border-[var(--border)]">
              <Image
                src="/avatar.jpg"
                alt="Pallavi Wagh — UI/UX Designer"
                className="rounded-full"
                fill
              />
              </div>      
            </div>
          {/* Tag line */}

          {/* Display headline */}
          <h1 className="font-neue text-center text-display-md text-[var(--ink)] mb-12 max-w-3xl">
          
              Hey! I&apos;m Pallavi, a  <em className="not-italic text-[var(--accent)]">UI/UX Designer</em> building experiences at 21n. <br/><br/>
              I&apos;m curious about how design changes the way we think.
          </h1>
               {/* <div className="md:max-w-md" data-reveal>
              <p className="font-sans text-base text-[var(--muted)] leading-relaxed mb-7">
                Hey! I&apos;m Pallavi, a UI/UX Designer building experiences. I&apos;m curious about how design changes the way we think.
              </p>
            </div> */}
    
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/work"
                  className="font-sans text-sm px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] hover:opacity-75 transition-opacity"
                >
                  See my work
                </Link>
                {/* <a
                  href="mailto:hey@pallaviwagh.com"
                  className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                >
                  hey@pallaviwagh.com
                </a> */}
              </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pt-8">
            {/* Bio + CTAs */}
       
          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────── */}
      {/* <div
        aria-hidden="true"
        className="py-4 border-y border-[var(--border)] overflow-hidden bg-[var(--paper-alt)]"
      >
        <div className="flex gap-12 marquee-track whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-sans text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] flex items-center gap-12"
            >
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-[var(--accent)] opacity-70" />
            </span>
          ))}
        </div>
      </div> */}

      {/* ── Case Studies ──────────────────────────────────────── */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="w-full"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div data-reveal>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="font-neue text-display-sm text-[var(--ink)]"
              >
                2021 — 2025
              </h2>
            </div>
            <Link
              href="/work"
              className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors hidden md:inline"
            >
              All projects →
            </Link>
          </div>

          <ol aria-label="Featured case studies">
            {projects.map((p, i) => (
              <li key={p.id} className="project-row">
                <Link
                  href={p.href}
                  aria-label={`View case study: ${p.title}`}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 transition-[padding] duration-300 hover:pl-2"
                >
                  <span className="font-sans text-xs text-[var(--muted)] w-6 shrink-0 select-none tabular-nums">
                    0{i + 1}
                  </span>

                  <div className="relative w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-[var(--paper-alt)] shrink-0">
                    <Image
                      src={p.image}
                      alt={`${p.title} — design preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-neue text-display-sm text-[var(--ink)] leading-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                        {p.title}
                      </h3>
                      <span
                        className="font-sans text-[11px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border)] px-2.5 py-1 rounded-full shrink-0 hidden md:block"
                        aria-label={`Category: ${p.category}`}
                      >
                        {p.category}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[var(--muted)] mb-4 line-clamp-2 leading-relaxed max-w-lg">
                      {p.description}
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label="Project tags">
                      {p.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-sans text-[11px] text-[var(--muted)] border border-[var(--border)] px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span
                    aria-hidden="true"
                    className="font-sans text-lg text-[var(--muted)] group-hover:text-[var(--ink)] group-hover:translate-x-1 transition-all duration-200 hidden md:block shrink-0"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 md:hidden">
            <Link
              href="/work"
              className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About snippet ─────────────────────────────────────── */}
      <section
        aria-labelledby="about-preview-heading"
        className="w-full border-t border-[var(--border)]"
      >
        <div className="max-w-site mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--border)]" data-reveal>
            <Image
              src="https://framerusercontent.com/images/cRxdsvdlWS8hoyleHht79kwv75M.jpg"
              alt="Pallavi Wagh"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div data-reveal>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
              About
            </p>
            <h2
              id="about-preview-heading"
              className="font-neue text-display-md text-[var(--ink)] mb-8"
            >
              My journey shaped how I think &amp; create.
            </h2>
            <p className="font-sans text-base text-[var(--muted)] leading-relaxed mb-5">
              I started in engineering — which gave me a real appreciation for how things get built.
              That foundation shows in every project: I work closely with developers, hand off clean
              Figma files, and care as much about implementation as I do about the visual.
            </p>
            <p className="font-sans text-base text-[var(--muted)] leading-relaxed mb-10">
              Today I&apos;m a Jr UI/UX Designer at Techved Consulting, designing for fintech, health, and
              retail clients. I&apos;m also the person on the team who will argue for 4px more padding.
            </p>
            <div className="flex items-center gap-8 mb-10">
              {([ {v:"4+", l:"Years"}, {v:"30+", l:"Projects"}, {v:"3", l:"Industries"} ] as const).map((s) => (
                <div key={s.l}>
                  <p className="font-neue text-display-sm text-[var(--ink)]">{s.v}</p>
                  <p className="font-sans text-xs text-[var(--muted)] uppercase tracking-widest mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="link-underline font-sans text-sm text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Socials ───────────────────────────────────────────── */}
      <nav
        aria-label="Social links"
        className="w-full border-t border-[var(--border)]"
      >
        <ul className="max-w-site mx-auto px-6 md:px-10 py-8 flex flex-wrap gap-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} — opens in new tab`}
                className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              >
                {s.label} /
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Scroll reveal init */}
      <HomeClient />
    </>
  );
}
