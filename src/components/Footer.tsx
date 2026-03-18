import Link from "next/link";
import { socials, resumeUrl } from "@/lib/data";

const internalLinks = [
  { href: "/",      label: "Home"   },
  { href: "/work",  label: "Work"   },
  { href: "/about", label: "About"  },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-[var(--border)] bg-[var(--paper)]">
      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="max-w-site mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-lg">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
              Let&apos;s build something together
            </p>
            <h2 className="font-neue text-display-md text-[var(--ink)] leading-tight mb-6">
              Got a project in mind?
            </h2>
            <a
              href="mailto:hey@pallaviwagh.com"
              className="link-underline font-neue text-display-md text-[var(--accent)] hover:text-[var(--accent-h)] transition-colors leading-tight"
              aria-label="Email hey@pallaviwagh.com"
            >
              Let&apos;s talk.
            </a>
          </div>

          {/* Quick links — two columns */}
          <nav aria-label="Footer links" className="flex gap-12 shrink-0">
            <div className="flex flex-col gap-2.5">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors w-fit"
                >
                  {link.label}/
                </Link>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open résumé (new tab)"
                className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors w-fit"
              >
                Résumé/
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (new tab)`}
                  className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors w-fit"
                >
                  {s.label}/
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* ── Bottom strip ─────────────────────────────────────── */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-site mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-neue text-sm text-[var(--ink)]">Pallavi //</span>
          <span className="font-sans text-xs text-[var(--muted)]">
            UI/UX Designer · Pune, India · © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
