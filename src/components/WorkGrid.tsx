"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface Props {
  projects: Project[];
  categories: string[];
}

export default function WorkGrid({ projects, categories }: Props) {
  const [active, setActive] = useState("All");
  const [isPending, startTransition] = useTransition();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2.5 mb-14"
      >
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => startTransition(() => setActive(cat))}
              className={[
                "font-sans text-xs uppercase tracking-[0.14em] px-5 py-2.5 rounded-full border",
                "transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                isActive
                  ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] bg-transparent",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
        <span
          className="ml-auto self-center font-sans text-xs text-[var(--muted)]"
          aria-live="polite"
          aria-atomic="true"
        >
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Project rows */}
      <ol
        aria-label="Project list"
        style={{ opacity: isPending ? 0.6 : 1, transition: "opacity 0.2s ease" }}
      >
        {filtered.map((p, i) => (
          <li key={p.id} className="project-row">
            <Link
              href={p.href}
              aria-label={`View case study: ${p.title}`}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 transition-[padding] duration-300 hover:pl-2"
            >
              {/* Index */}
              <span className="font-sans text-xs text-[var(--muted)] w-6 shrink-0 select-none tabular-nums">
                0{i + 1}
              </span>

              {/* Thumbnail */}
              <div className="relative w-full md:w-52 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-[var(--paper-alt)] shrink-0">
                <Image
                  src={p.image}
                  alt={`${p.title} — design preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 208px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="font-neue text-display-sm text-[var(--ink)] leading-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                    {p.title}
                  </h2>
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
                <ul className="flex flex-wrap gap-2" aria-label="Tags">
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

              {/* Arrow */}
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

      {filtered.length === 0 && (
        <p className="font-sans text-sm text-[var(--muted)] py-16 text-center">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
