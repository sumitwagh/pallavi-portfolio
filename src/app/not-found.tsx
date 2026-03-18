import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you were looking for could not be found.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p
          aria-hidden="true"
          className="font-neue text-[10rem] font-medium leading-none text-[var(--border)] select-none mb-4"
        >
          404
        </p>
        <h1 className="font-neue text-3xl font-medium mb-3 text-[var(--ink)]">
          Page not found
        </h1>
        <p className="font-sans text-sm text-[var(--muted)] mb-10 max-w-xs mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="font-sans text-sm px-6 py-3 rounded-full border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-300"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
