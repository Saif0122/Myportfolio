import { Project, Experience, Service, NavItem, BlogPost, Testimonial, Education, Skill, PricingTier } from './types';

export const PERSONAL_INFO = {
  name: "Saif Ul Islam",
  titles: ["Senior Webdeveloper", "Frontend Developer", "Full Stack Engineer", "UI/UX Architect", "Technical Mentor"],
  tagline: "High-performance digital engineering by Saif Ul Islam - Elite Webdeveloper.",
  intro: "I am Saif Ul Islam, a Webdeveloper serving a global clientele. I specialize in bridging the gap between complex business logic and intuitive user experiences. As a lead mentor at Saylani (SMIT), I shape the future of tech while building scalable applications for startups and enterprises worldwide.",
  email: "saifulislamshams37@gmail.com",
  phone: "+92 313-9751619",
  location: "University Town Arbab Road Peshawar / Pakistan",
  pricing: "Starting from $16/hr. Custom project-based quotes available.",
  availability: "Available for new projects worldwide."
};


//Performance Metrics Data IN HOME starting here
export const PERFORMANCE_METRICS = [
  { label: "Performance", score: 93, color: "#22c55e", detail: "Optimized TTI & LCP" },
  { label: "Accessibility", score: 93, color: "#3b82f6", detail: "WCAG 2.1 Compliant" },
  { label: "Best Practices", score: 100, color: "#a855f7", detail: "Modern Standards" },
  { label: "SEO", score: 100, color: "#f59e0b", detail: "Semantic Precision" }
];

//Performance Metrics Data IN HOME ending here

//About Page Data starting here

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into business logic, user personas, and project goals to define a foolproof technical roadmap.",
    details: ["Stakeholder Interviews", "Competitor Analysis", "Tech Stack Selection"]
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Crafting the skeletal structure and high-fidelity UI. Focusing on atomic design and scalable DB schemas.",
    details: ["Schema Modeling", "UI/UX Prototyping", "Design Systems"]
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Clean, performant coding with Next.js 15. Modular components and strict TypeScript type safety.",
    details: ["Frontend Engineering", "API Integration", "State Management"]
  },
  {
    step: "04",
    title: "Hardening & QA",
    description: "Rigorous testing for security, performance, and cross-browser compatibility. 100/100 Lighthouse scores.",
    details: ["Unit Testing", "SEO Audit", "Performance Tuning"]
  },
  {
    step: "05",
    title: "Deployment & Growth",
    description: "Launching on global edge networks. Continuous monitoring and scaling strategies for traffic spikes.",
    details: ["CI/CD Pipelines", "Analytics Setup", "Scale Optimization"]
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js 15", level: 95, category: 'hard' },
  { name: "TypeScript / ES6+", level: 90, category: 'hard' },
  { name: "Tailwind CSS / SCSS", level: 95, category: 'hard' },
  { name: "Framer Motion / GSAP", level: 85, category: 'hard' },
  { name: "Zustand / TanStack Query", level: 80, category: 'hard' },
  { name: "Framer Motion / 3D UI", level: 85, category: 'hard' },
  { name: "UI/UX Architecture", level: 90, category: 'hard' },
  { name: "SEO Optimization", level: 85, category: 'hard' },
  { name: "Team Leadership", level: 95, category: 'soft' },
  { name: "Mentoring", level: 98, category: 'soft' },
  { name: "Problem Solving", level: 92, category: 'soft' },
  { name: "Agile Management", level: 88, category: 'soft' }
];

export const EDUCATION: Education[] = [
  {
    id: "ed1",
    degree: "BS in Computer Science",
    institution: "Global Degree Collage of Peshawar",
    period: "2023 - 2025"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    role: "Technical Team Lead",
    company: "SMIT (Saylani Mass IT Training)",
    period: "2025 - Present",
    description: [
      "Orchestrating the technical journey for 7000+ students globally.",
      "Leading cross-functional developer teams for large-scale LMS builds.",
      "Advocating for modern React patterns and scalable system architectures."
    ]
  },
  {
    id: "e2",
    role: "Frontend developer",
    company: "Fiver",
    period: "2023 - 2025",
    description: [
      "Delivered 30+ custom solutions for international startups.",
      "Maintained 100% job success score with repeat client business.",
      "Specialized in performant e-commerce and SaaS dashboards."
    ]
  },
  {
    id: "e3",
    role: "Frontend developer",
    company: "Developer HUB Corporation",
    period: "2023 - 2025",
    description: [
      "Delivered 30+ custom solutions for international startups.",
      "Maintained 100% job success score with repeat client business.",
      "Specialized in performant e-commerce and SaaS dashboards."
    ]
  }
];

//About Page Data ending here

//Services Page Data starting here

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "E-COMMERCE DEVELOPMENT",
    shortDesc: "High-conversion online stores.",
    fullDesc: "Complete shopping ecosystems featuring Stripe integration, advanced inventory management, and ultra-fast filtering using Next.js 15.",
    icon: "ShoppingBag"
  },
  {
    id: "s2",
    title: "CUSTOM WEBSITE DEVELOPMENT",
    shortDesc: "Bespoke digital solutions.",
    fullDesc: "Tailor-made web applications designed specifically for your unique business logic, avoiding cookie-cutter templates.",
    icon: "Layout"
  },
  {
    id: "s3",
    title: "RESPONSIVE DESIGN",
    shortDesc: "Seamless on all devices.",
    fullDesc: "Ensuring your digital presence feels native on smartphones, tablets, and large displays with a mobile-first philosophy.",
    icon: "Smartphone"
  },
  {
    id: "s4",
    title: "SEO OPTIMIZATION",
    shortDesc: "Visibility and growth.",
    fullDesc: "Technical SEO including Meta Tag management, SSR/ISR strategy, and high-performance Core Web Vitals.",
    icon: "Search"
  },
  {
    id: "s5",
    title: "PERFORMANCE OPTIMIZATION",
    shortDesc: "Lightning-fast interactions.",
    fullDesc: "Reducing TTI and optimizing asset delivery through lazy loading, image compression, and efficient code splitting.",
    icon: "Zap"
  },
  {
    id: "s6",
    title: "WEBSITE MAINTENANCE & SUPPORT",
    shortDesc: "Reliable long-term care.",
    fullDesc: "Routine security audits, dependency updates, and 24/7 monitoring to ensure your platform remains stable.",
    icon: "Shield"
  },
  {
    id: "s7",
    title: "Figma to Pixel-Perfect Next.js Conversion",
    shortDesc: "Responsive frontend development from your design's.",
    fullDesc: "I transform your static Figma, Adobe XD, or Sketch designs into clean, semantic, and performant React/Next.js code I focus on your original vision while maintaining a 90+ Google Lighthouse speed score.",
    icon: "Shield"
  },{
    id: "s8",
    title: "Web App Engineering",
    shortDesc: "Data-driven interfaces with complex state management.",
    fullDesc: "I specialize in building complex admin panels and SaaS products. Using Zustand for global state and TanStack Query for seamless data fetching.",
    icon: "Shield"
  },{
    id: "s6",
    title: "Web Performance & Core Web Vitals Optimization",
    shortDesc: "Speeding up slow websites to improve SEO.",
    fullDesc: "Is your site losing customers due to slow load times? I perform deep technical audits to optimize your frontend and speed performance.",
    icon: "Shield"
  },{
    id: "s6",
    title: "Headless CMS & API Integration Service",
    shortDesc: "Connecting your frontend to modern content systems and custom APIs.",
    fullDesc: "I provide seamless integration between your frontend and any backend or CMS.",
    icon: "Shield"
  }
];

//Services Page Data ending here

//Other Data for Nav, Testimonials, Blog, Project's, Pricing etc.

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Rivera",
    role: "CEO at TechStream",
    content: "Saif is a rare breed of developer who understands business goals as well as code. His work on our marketplace was flawless.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Founder of GreenLabs",
    content: "The custom CMS Saif built for us has saved our marketing team 20+ hours a week. A true professional.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Rise of Next.js 15 & Server Actions",
    excerpt: "Exploring how server-side logic is becoming more seamless for full-stack developers.",
    date: "Oct 20, 2024",
    readTime: "6 min",
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&h=400",
    url: "/blog/b1"
  },
  {
    id: "b2",
    title: "Why SEO Matters More in 2025",
    excerpt: "Technical strategies to ensure your web app doesn't just work well, but gets seen.",
    date: "Nov 05, 2024",
    readTime: "4 min",
    category: "SEO",
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=600&h=400",
    url: "/blog/b2"
  },
  {
    id: "b3",
    title: "AI Integration: The New Frontier",
    excerpt: "How generative AI is reshaping the web development landscape and how to stay ahead.",
    date: "Dec 12, 2024",
    readTime: "8 min",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&h=400",
    url: "/blog/b3"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Shop-Sphere E-commerce",
    description: "A full-scale digital storefront with integrated payments and advanced analytics.",
    problem: "Traditional e-commerce platforms suffered from high churn rates due to slow load times and complex checkout flows.",
    solution: "Engineered a headless architecture using Next.js 15 with Server Components to reduce TTFB by 40% and implemented a single-click checkout logic.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    category: "fullstack",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=600",
    liveUrl: "https://shop-sphere.dev",
    githubUrl: "https://github.com/saifulislam/shop-sphere"
  },
  {
    id: "2",
    title: "Sky Weather Pro",
    description: "Visualizing weather dynamics using real-time API feeds and D3 animations.",
    problem: "Existing weather apps provided static data that failed to convey the intensity of shifting weather patterns visually.",
    solution: "Developed an interactive canvas-based visualization system that maps real-time atmospheric pressure to dynamic SVG filters.",
    tech: ["React", "Chart.js", "Vite", "D3.js"],
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&h=600",
    liveUrl: "https://sky-weather.pro",
    githubUrl: "https://github.com/saifulislam/sky-weather"
  },
  {
    id: "3",
    title: "Aura AI Dashboard",
    description: "Enterprise-grade analytics dashboard with generative AI insights for SaaS businesses.",
    problem: "Business owners were overwhelmed by raw data and lacked actionable insights from their daily metrics.",
    solution: "Integrated Gemini 1.5 Flash to automatically generate natural language summaries of complex SQL datasets, saving users hours of manual analysis.",
    tech: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript"],
    category: "fullstack",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600",
    liveUrl: "https://aura-ai.io",
    githubUrl: "https://github.com/saifulislam/aura-ai"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "p1",
    name: "Starter / MVP",
    price: "$499",
    description: "Perfect for startups looking to launch their first digital presence.",
    features: ["Custom UI/UX Design", "Responsive Layout", "Basic SEO", "3-5 Pages", "1 Month Support"]
  },
  {
    id: "p2",
    name: "Professional",
    price: "$1,499",
    description: "Advanced solutions for growing businesses needing complex logic.",
    isPopular: true,
    features: ["Full Stack Dev", "E-commerce Integration", "Performance Audit", "CMS Setup", "3 Months Support", "API Integrations"]
  },
  {
    id: "p3",
    name: "Enterprise",
    price: "Custom",
    description: "High-scale systems designed for millions of users and absolute reliability.",
    features: ["Custom Architecture", "AI Agent Integration", "24/7 Priority Support", "Dedicated Team Lead", "Security Hardening"]
  }
];

//Other Data for Nav, Testimonials, Blog, Project's Pricing etc. ending here