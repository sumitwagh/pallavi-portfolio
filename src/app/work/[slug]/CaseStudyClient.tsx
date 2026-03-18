"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
  nextProject: Project;
}

export default function CaseStudyClient({ project, nextProject }: Props) {
  const accent = project.accentColor || "#b8924a";
  const contentRef = useRef<HTMLDivElement>(null);

  // Lightweight scroll reveal — no Framer needed
  useEffect(() => {
    const el = contentRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = el.querySelectorAll<HTMLElement>("[data-fade]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.delay ?? "0";
            target.style.transitionDelay = `${delay}ms`;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(16px)";
      item.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      io.observe(item);
    });

    return () => io.disconnect();
  }, []);

  return (
    <article aria-label={`Case study: ${project.title}`} ref={contentRef}>

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="pt-28 pb-14 px-6 md:px-10 w-full">
        <div className="max-w-site mx-auto">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-sans text-xs text-[var(--muted)] mb-10"
            data-fade data-delay="0"
          >
            <Link href="/" className="link-underline hover:text-[var(--ink)] transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="opacity-40">/</span>
            <Link href="/work" className="link-underline hover:text-[var(--ink)] transition-colors">
              Work
            </Link>
            <span aria-hidden="true" className="opacity-40">/</span>
            <span className="text-[var(--ink)] font-medium" aria-current="page">
              {project.title}
            </span>
          </nav>

          {/* Tags */}
          <ul
            className="flex flex-wrap gap-2 mb-6"
            aria-label="Project tags"
            data-fade data-delay="60"
          >
            <li>
              <span
                className="font-sans text-xs px-3 py-1 rounded-full text-white font-medium"
                style={{ backgroundColor: accent }}
              >
                {project.category}
              </span>
            </li>
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="font-sans text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--paper-alt)]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          {/* Title */}
          <h1
            className="font-neue text-display-lg text-[var(--ink)] leading-none mb-5"
            data-fade data-delay="100"
          >
            {project.title}
          </h1>

          <p
            className="font-sans text-lg text-[var(--muted)] max-w-2xl leading-relaxed"
            data-fade data-delay="140"
          >
            {project.subtitle}
          </p>
        </div>
      </header>

      {/* Accent gradient line */}
      <div
        className="w-full h-px"
        style={{ background: `linear-gradient(90deg, ${accent} 0%, transparent 55%)` }}
        aria-hidden="true"
      />

      {/* ── Hero image ───────────────────────────────────────── */}
      <div className="px-6 md:px-10 my-14 w-full">
        <div className="max-w-site mx-auto" data-fade data-delay="0">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--border)]">
            <Image
              src={project.image}
              alt={`${project.title} — design preview`}
              fill
              sizes="(max-width: 768px) 100vw, 1180px"
              className="object-cover"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* ── Body content ─────────────────────────────────────── */}
      <div className="px-6 md:px-10 pb-28 w-full">
        <div className="max-w-site mx-auto space-y-20">

          {/* Overview + Problem */}
          <div className="grid md:grid-cols-2 gap-6">
            {(
              [
                { heading: "Project Overview", body: project.overview },
                { heading: "The Problem",      body: project.problem  },
              ] as const
            ).map((card, i) => (
              <div
                key={card.heading}
                className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--paper-alt)]"
                data-fade
                data-delay={String(i * 80)}
              >
                <div
                  className="w-7 h-px mb-5 rounded-full"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                />
                <h2 className="font-neue text-xl text-[var(--ink)] mb-4">
                  {card.heading}
                </h2>
                <p className="font-sans text-sm text-[var(--muted)] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Design Process */}
          <section aria-labelledby="cs-process-heading">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              Methodology
            </p>
            <h2
              id="cs-process-heading"
              className="font-neue text-display-sm text-[var(--ink)] mb-10"
            >
              Design Process
            </h2>
            <ol className="grid sm:grid-cols-2 gap-5">
              {project.process.map((step, i) => (
                <li
                  key={step.step}
                  className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--paper)] hover:border-[var(--accent)] transition-colors group"
                  data-fade
                  data-delay={String(i * 60)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-sans text-xs font-semibold text-white w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-sans text-sm font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                      {step.step}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-[var(--muted)] leading-relaxed pl-10">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Outcome + Metrics */}
          <section
            aria-labelledby="cs-outcome-heading"
            className="rounded-2xl p-8 md:p-12 text-white"
            style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}bb 100%)` }}
            data-fade
          >
            <p className="font-sans text-xs uppercase tracking-[0.18em] font-medium opacity-70 mb-3">
              Results
            </p>
            <h2
              id="cs-outcome-heading"
              className="font-neue text-display-sm mb-5"
              style={{ color: "#fff" }}
            >
              Outcome
            </h2>
            <p className="font-sans text-base leading-relaxed max-w-2xl mb-10 opacity-90">
              {project.outcome}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dd
                      className="font-neue text-display-sm mb-1"
                      style={{ color: "#fff", letterSpacing: "-0.025em" }}
                    >
                      {m.value}
                    </dd>
                    <dt className="font-sans text-xs opacity-70 leading-tight">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}
          </section>

          {/* Navigation */}
          <nav
            aria-label="Case study navigation"
            className="flex items-center justify-between gap-4 flex-wrap"
          >
            <Link
              href="/work"
              className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              ← All work
            </Link>

            <Link
              href={nextProject.href}
              aria-label={`Next case study: ${nextProject.title}`}
              className="group flex items-center gap-4 px-6 py-4 border border-[var(--border)] rounded-2xl hover:border-[var(--ink)] transition-colors"
            >
              <div className="text-right">
                <p className="font-sans text-[11px] text-[var(--muted)] uppercase tracking-widest mb-1">
                  Next project
                </p>
                <p className="font-neue text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="font-sans text-lg text-[var(--muted)] group-hover:translate-x-1 transition-transform duration-200"
              >
                →
              </span>
            </Link>
          </nav>

        </div>
      </div>
    </article>
  );
}
