import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pallaviwagh.com"),
  title: {
    default: "Pallavi Wagh — UI/UX Designer",
    template: "%s — Pallavi Wagh",
  },
  description:
    "UI/UX Designer with 4+ years shaping fintech, health, and e-commerce products. Based in Pune — open to full-time roles.",
  keywords: ["UI/UX Designer", "Product Designer", "Figma", "Design Systems", "Pallavi Wagh", "Pune"],
  authors: [{ name: "Pallavi Wagh", url: "https://pallaviwagh.com" }],
  creator: "Pallavi Wagh",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pallaviwagh.com",
    siteName: "Pallavi Wagh",
    title: "Pallavi Wagh — UI/UX Designer",
    description: "4+ years designing fintech, health & e-commerce products.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pallavi Wagh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallavi Wagh — UI/UX Designer",
    description: "4+ years designing products people actually want to use.",
    creator: "@pallavi_wagh",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://pallaviwagh.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pallavi Wagh",
  url: "https://pallaviwagh.com",
  jobTitle: "UI/UX Designer",
  worksFor: { "@type": "Organization", name: "Techved Consulting Pvt Ltd" },
  sameAs: [
    "https://linkedin.com/in/pallaviiwagh",
    "https://dribbble.com/pallaviwagh",
    "https://x.com/pallavi_wagh",
  ],
};

// Inline script — runs BEFORE React hydrates, prevents dark-mode flash (FOUC)
// Must be a string, not JSX, to serialize properly into the HTML
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('pallavi-theme');
    var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme  = stored || system;
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch(e) {}
})();
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode FOUC by running theme detection synchronously */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise">
        {/* Skip-nav for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-white focus:text-sm focus:font-sans"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
