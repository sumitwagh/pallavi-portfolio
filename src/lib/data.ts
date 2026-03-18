// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProcessStep {
  step: string;
  desc: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  href: string;
  featured: boolean;
  overview: string;
  problem: string;
  process: ProcessStep[];
  outcome: string;
  metrics: Metric[];
  accentColor: string;
}

export interface Social {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current: boolean;
}

export interface BookItem {
  title: string;
  author: string;
  cover: string;
}

export interface BeliefItem {
  icon: string;
  title: string;
  description: string;
}

// ─── Projects ───────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "art-of-living-meditation-app-journey",
    title: "Art of Living Meditation App",
    subtitle: "Redesigning calm — from cluttered to clear",
    category: "Health",
    tags: ["Mobile App", "UX Research", "Design System"],
    description:
      "AOL is a meditation and breathing app that needed a fresh start. The original product was cluttered, confusing, and visually outdated. The client wanted a minimal, easy-to-use experience that would appeal to both new users and regular practitioners.",
    image: "https://framerusercontent.com/images/NKPEzglZgaw6n3ejGU9HwfDdWM.webp",
    href: "/work/art-of-living-meditation-app-journey",
    featured: true,
    overview:
      "The Art of Living Foundation approached us to redesign their meditation and breathing app. The existing product suffered from a cluttered interface, confusing navigation, and an outdated visual language that didn't reflect the calm, mindful brand the foundation stands for.",
    problem:
      "Users were abandoning the app within the first session because core features like guided breathing, meditation timers, and course libraries were buried under layers of unclear navigation. The visual design felt overwhelming rather than soothing.",
    process: [
      {
        step: "Discovery & Research",
        desc: "Conducted 12 user interviews and a competitive analysis of top wellness apps (Calm, Headspace, Insight Timer) to understand user expectations and pain points.",
      },
      {
        step: "Information Architecture",
        desc: "Restructured the app's navigation from a 6-tab layout to a focused 3-tab structure: Home, Practice, and Progress. This reduced decision fatigue significantly.",
      },
      {
        step: "Design System",
        desc: "Built a minimal design system using soft greens and creams — colors proven to induce calm. Established a type scale and icon library for consistency.",
      },
      {
        step: "Prototyping & Testing",
        desc: "Created interactive prototypes in Figma, ran two rounds of usability testing with 8 participants each, and iterated based on feedback.",
      },
    ],
    outcome:
      "The redesign resulted in a 40% improvement in session completion rates during beta testing. Users described the new experience as peaceful, easy to navigate, and said it made them actually want to meditate. The design was handed off to the dev team with a complete Figma component library.",
    metrics: [
      { value: "40%", label: "Session completion ↑" },
      { value: "3→4.7", label: "App store rating" },
      { value: "60%", label: "Support tickets ↓" },
    ],
    accentColor: "#4CAF7D",
  },
  {
    id: "smfg-india-credit-website-redesign",
    title: "SMFG India Credit",
    subtitle: "Website redesign for a major fintech brand",
    category: "Fintech",
    tags: ["Web Design", "Responsive", "Brand System"],
    description:
      "A complete website overhaul for SMFG India Credit, one of India's leading financial institutions. Focus on trust-building UI, cleaner information architecture, and mobile-first performance.",
    image: "https://framerusercontent.com/images/4p85MaRhfetq8ehLm7THw8nx3YE.png",
    href: "/work/smfg-india-credit-website-redesign",
    featured: true,
    overview:
      "SMFG India Credit (formerly Fullerton India) is a major NBFC serving millions of customers across India. Their existing website was dense, visually dated, and performed poorly on mobile — a critical issue given that 70%+ of their traffic came from mobile devices.",
    problem:
      "The existing site had 80+ pages with inconsistent design patterns, confusing loan application flows, and no coherent design system. Users were dropping off during loan eligibility checks due to form complexity and unclear trust signals.",
    process: [
      {
        step: "Audit & Stakeholder Alignment",
        desc: "Conducted a full UX audit of 80+ pages, mapped user journeys for 4 key personas (salaried, self-employed, business owner, and returning customer), and aligned with product, marketing, and tech teams.",
      },
      {
        step: "Design System Creation",
        desc: "Built a comprehensive design system with 200+ components covering buttons, forms, cards, tables, notifications, and navigation patterns — all meeting WCAG AA accessibility standards.",
      },
      {
        step: "Homepage & Key Landing Pages",
        desc: "Redesigned the homepage, product pages for personal loans, business loans, and home loans, with a focus on trust signals, social proof, and clear CTAs.",
      },
      {
        step: "Loan Application Flow",
        desc: "Simplified the 12-step loan application form into a 5-step conversational flow with real-time validation, progress indicators, and contextual help tooltips.",
      },
    ],
    outcome:
      "The redesigned website saw a 35% increase in loan application submissions and a 28% reduction in form abandonment in the first month post-launch. The design system is now used across 4 product teams and has reduced design-to-dev handoff time by 60%.",
    metrics: [
      { value: "35%", label: "Loan applications ↑" },
      { value: "28%", label: "Form drop-off ↓" },
      { value: "60%", label: "Dev handoff time ↓" },
    ],
    accentColor: "#2563EB",
  },
  {
    id: "pidilite-genie-dealer-assistant-app",
    title: "Pidilite Genie",
    subtitle: "Dealer assistant app for field sales teams",
    category: "E-Commerce",
    tags: ["Mobile App", "B2B", "Prototyping"],
    description:
      "Pidilite Genie is a dealer-facing app designed to streamline order management and sales workflows. Designed for non-tech-savvy field agents with a focus on speed, clarity, and minimal cognitive load.",
    image: "https://framerusercontent.com/images/xbx1oqaDFivBz7fQSIKUyZgP87k.png",
    href: "/work/pidilite-genie-dealer-assistant-app",
    featured: true,
    overview:
      "Pidilite Industries — the makers of Fevicol and Dr. Fixit — needed a mobile app to help their nationwide network of dealers place orders, track deliveries, access marketing materials, and manage schemes. The app would be used by 10,000+ dealers across India, many with limited smartphone experience.",
    problem:
      "Dealers were placing orders via phone calls and WhatsApp, leading to errors, delays, and no order history. The existing internal tool was desktop-only and too complex for field use. Pidilite needed a mobile-first solution usable by people unfamiliar with digital ordering.",
    process: [
      {
        step: "Field Research",
        desc: "Visited 8 dealer locations across Mumbai and Pune, observed how they currently placed orders, noted language preferences (Hindi/Marathi), and identified the primary pain points: finding products, checking schemes, and tracking delivery.",
      },
      {
        step: "Simplification Strategy",
        desc: "Reduced the app to 4 core tasks: Browse & Order, Track Orders, View Schemes, and Download Materials. Everything else was secondary or removed.",
      },
      {
        step: "Vernacular-First Design",
        desc: "Designed with Hindi text support and large touch targets (min 48dp). Used iconography alongside text labels to bridge literacy gaps.",
      },
      {
        step: "Iterative Prototyping",
        desc: "Built 3 rounds of low-to-high fidelity prototypes and tested with actual dealers in field settings — on low-end Android devices, in bright outdoor light.",
      },
    ],
    outcome:
      "Post-launch, 78% of eligible dealers placed at least one order through the app within 60 days. Order errors dropped by 65% compared to phone and WhatsApp ordering. Dealer satisfaction scores improved from 3.1 to 4.4 out of 5.",
    metrics: [
      { value: "78%", label: "Dealer adoption in 60 days" },
      { value: "65%", label: "Order errors ↓" },
      { value: "3.1→4.4", label: "Satisfaction score" },
    ],
    accentColor: "#F59E0B",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills: Record<string, string[]> = {
  design: [
    "UI/UX Design",
    "Mobile App Design",
    "Responsive Web Design",
    "Design Systems",
    "Icon Design",
    "Wireframing",
    "Prototyping",
    "HTML",
    "CSS",
  ],
  tools: [
    "Figma",
    "Sketch",
    "Adobe Illustrator",
    "Affinity Designer",
    "Framer",
    "Adobe Photoshop",
    "Canva",
  ],
  ai: [
    "Figma Make",
    "Figma Sites",
    "Bolt.new",
    "Relume AI",
    "Lovable",
    "ChatGPT",
    "Gemini",
    "Dora",
    "UX Pilot",
    "Builder.io",
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    company: "Techved Consulting Pvt Ltd",
    role: "Jr UI/UX Designer",
    period: "Dec 2023 – Present",
    location: "Mumbai (Remote)",
    highlights: [
      "Creating wireframes, prototypes, and high-fidelity UI for complex business applications",
      "Building and maintaining reusable design systems to speed up development",
      "Collaborating closely with product managers, developers, and stakeholders",
    ],
    current: true,
  },
  {
    company: "Chitranu Technologies Pvt Ltd",
    role: "UI Designer",
    period: "Aug 2021 – Dec 2023",
    location: "Chhatrapati Sambhajinagar",
    highlights: [
      "Designed UI for multiple client projects from scratch",
      "Developed wireframes and prototypes for web and mobile platforms",
      "Collaborated with developers to ensure pixel-perfect implementation",
    ],
    current: false,
  },
];

// ─── Books ────────────────────────────────────────────────────────────────────
export const books: BookItem[] = [
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: "https://framerusercontent.com/images/c0U4TRHtjpn3ZEcNrDora5YyK4.jpg",
  },
  {
    title: "Non-Designer's Design Book",
    author: "Robin Williams",
    cover: "https://framerusercontent.com/images/ShY0hdhQY1qEsM5MneUEzb5BdW4.webp",
  },
  {
    title: "Refactoring UI",
    author: "Steve Schoger",
    cover: "https://framerusercontent.com/images/gVqZIi45AV3HfeMAn8HhMZtXZs.png",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://framerusercontent.com/images/aYgqRFXkiVWVls20hCgqH5buBY.jpg",
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles",
    cover: "https://framerusercontent.com/images/djIFddcg1x6U4omakNlLsUhtaM.webp",
  },
  {
    title: "Design of Everyday Things",
    author: "Don Norman",
    cover: "https://framerusercontent.com/images/G5Y9W35iP9aIy3ORV11tFgsejk.webp",
  },
];

// ─── Beliefs ──────────────────────────────────────────────────────────────────
export const beliefs: BeliefItem[] = [
  {
    icon: "🎯",
    title: "User-First Problem Solving",
    description:
      "I design with intention — every element should guide users smoothly and reduce friction.",
  },
  {
    icon: "🔗",
    title: "Scalability & Consistency",
    description:
      "I build reusable, consistent design systems that scale easily across products and teams.",
  },
  {
    icon: "💡",
    title: "Clarity with Purpose",
    description:
      "Design begins with empathy. I focus on real user needs and create simple, meaningful solutions.",
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
export const socials: Social[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pallaviiwagh" },
  { label: "Dribbble", href: "https://dribbble.com/pallaviwagh" },
  { label: "X / Twitter", href: "https://x.com/pallavi_wagh" },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1c5SiJOmGYATbAaJP9mk78EVzV2QmEwF7/view?usp=sharing";
