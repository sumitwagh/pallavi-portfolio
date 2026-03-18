import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"PP Neue York"', "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      // NOTE: These are NOT used as bg-ink / text-ink in components.
      // Components use inline var() syntax: text-[var(--ink)]
      // These entries exist for Tailwind plugin / arbitrary value autocompletion only.
      colors: {
        ink:         "var(--ink)",
        "ink-soft":  "var(--ink-soft)",
        paper:       "var(--paper)",
        "paper-alt": "var(--paper-alt)",
        muted:       "var(--muted)",
        border:      "var(--border)",
        accent:      "var(--accent)",
        "accent-h":  "var(--accent-h)",
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem,7.5vw,6.5rem)",  { lineHeight: "1.0",  letterSpacing: "-0.04em"  }],
        "display-lg": ["clamp(2.5rem,5.5vw,5rem)",     { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(1.875rem,4vw,3.25rem)",  { lineHeight: "1.1",  letterSpacing: "-0.03em"  }],
        "display-sm": ["clamp(1.375rem,2.5vw,1.875rem)",{ lineHeight: "1.15", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
