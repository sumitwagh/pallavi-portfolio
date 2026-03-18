"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { resumeUrl } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAME_VARIANTS = [
  { text: "Pallavi",  lang: "English"    },
  { text: "पल्लवी",   lang: "Marathi"    },
  { text: "పల్లవి",  lang: "Telugu"    },
  { text: "Pallavi",  lang: "German"     },
  { text: "Pallavi",  lang: "French"     },
  { text: "パラヴィ",  lang: "Japanese" },
  { text: "Паллави", lang: "Russian"    },
] as const;

const NAV_LINKS = [
  { href: "/",      label: "Home"  },
  { href: "/work",  label: "Work"  },
  { href: "/about", label: "About" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [nameIdx,   setNameIdx]   = useState(0);
  const [nameShow,  setNameShow]  = useState(true);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Scroll detection — passive listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Multilingual name cycle: fade out → swap → fade in
  useEffect(() => {
    const id = setInterval(() => {
      setNameShow(false);
      const t = window.setTimeout(() => {
        setNameIdx((i) => (i + 1) % NAME_VARIANTS.length);
        setNameShow(true);
      }, 380);
      return () => clearTimeout(t);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Escape closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-300",
        scrolled
          ? "py-4 bg-[var(--paper)]/[0.96] backdrop-blur-md border-b border-[var(--border)]"
          : "py-6"
      )}
    >
      <nav
        className="max-w-site mx-auto px-6 md:px-10 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo — multilingual */}
        <Link
          href="/"
          aria-label="Pallavi Wagh — home"
          className="flex items-baseline gap-2 min-w-0"
        >
          <span
            className="font-neue text-[0.9375rem] font-medium text-[var(--ink)] tracking-tight leading-none"
            style={{
              opacity: nameShow ? 1 : 0,
              transform: nameShow ? "translateY(0)" : "translateY(5px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
            aria-hidden="true"
          >
            {NAME_VARIANTS[nameIdx].text}
          </span>
          {/* Always-visible accessible label */}
          <span className="sr-only">Pallavi Wagh</span>
          <span
            className="font-sans text-[10px] text-[var(--muted)] uppercase tracking-[0.14em] leading-none self-center hidden sm:block"
            aria-hidden="true"
            style={{
              opacity: nameShow ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          >
            {NAME_VARIANTS[nameIdx].lang}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="listitem"
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "link-underline font-sans text-sm tracking-wide transition-colors duration-200",
                isActive(link.href)
                  ? "text-[var(--ink)] font-medium"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              )}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open résumé (new tab)"
            className="link-underline font-sans text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            Résumé&nbsp;↗
          </a>

          <a
            href="mailto:hey@pallaviwagh.com"
            className="font-sans text-sm px-5 py-2 rounded-full border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-200 whitespace-nowrap"
          >
            Hire me
          </a>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-8 h-8 flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] transition-colors rounded-full hover:bg-[var(--paper-alt)]"
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1"  x2="12" y2="3"/>  <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1"  y1="12" x2="3"  y2="12"/>  <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          ref={burgerRef}
          type="button"
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={cn("block w-5 h-px bg-[var(--ink)] transition-all duration-200 origin-center", menuOpen && "rotate-45 translate-y-[6px]")} />
          <span className={cn("block w-5 h-px bg-[var(--ink)] transition-all duration-200",               menuOpen && "opacity-0 scale-x-0")} />
          <span className={cn("block w-5 h-px bg-[var(--ink)] transition-all duration-200 origin-center", menuOpen && "-rotate-45 -translate-y-[6px]")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "md:hidden absolute inset-x-0 top-full bg-[var(--paper)] border-b border-[var(--border)] px-6 py-8 flex flex-col gap-5 transition-[opacity,transform] duration-200",
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={cn(
              "font-neue text-2xl tracking-tight",
              isActive(link.href) ? "text-[var(--ink)]" : "text-[var(--muted)]"
            )}
          >
            {link.label}
          </Link>
        ))}
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-[var(--muted)]">Résumé ↗</a>
        <a href="mailto:hey@pallaviwagh.com" className="font-sans text-sm text-[var(--muted)]">hey@pallaviwagh.com</a>
        <button type="button" onClick={toggleTheme} className="font-sans text-sm text-[var(--muted)] text-left w-fit">
          {theme === "dark" ? "☀ Light mode" : "◑ Dark mode"}
        </button>
      </div>
    </header>
  );
}
