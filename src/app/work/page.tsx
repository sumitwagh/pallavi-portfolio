import type { Metadata } from "next";
import { projects } from "@/lib/data";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies spanning fintech, health, and e-commerce — real problems, measurable outcomes.",
};

export default function WorkPage() {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <section
      aria-labelledby="work-page-heading"
      className="w-full min-h-screen"
    >
      <div className="max-w-site mx-auto px-6 md:px-10 pt-32 pb-24">
        <header className="mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
            Portfolio
          </p>
          <h1
            id="work-page-heading"
            className="font-neue text-display-lg text-[var(--ink)] leading-none mb-6"
          >
            Selected Work
          </h1>
          <p className="font-sans text-base text-[var(--muted)] max-w-xl leading-relaxed">
            A handful of projects I&apos;m proud of — each one started with a real problem and
            ended with something people could actually use.
          </p>
        </header>

        <WorkGrid projects={projects} categories={categories} />
      </div>
    </section>
  );
}
