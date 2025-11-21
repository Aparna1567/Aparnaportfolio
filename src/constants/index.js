// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  // {
  //   title: "DevOps & Cloud Solutions",
  //   description:
  //     "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
  //   items: [
  //     {
  //       title: "CI/CD Pipelines",
  //       description: "(GitHub Actions, Docker, Kubernetes)",
  //     },
  //     {
  //       title: "Server Management ",
  //       description: "(Linux, Nginx, Load Balancing)",
  //     },
  //     {
  //       title: "Performance Tuning",
  //       description: "(Caching, Compression, Lighthouse 90+ Scores)",
  //     },
  //   ],
  // },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Quick AI - AI Saas Platform with subscriptions ",
    description:
      ["Built a fully functional AI SaaS application using the PERN stack (PostgreSQL, Express, React, Node.js) with secure authentication and profile management powered by Clerk.","Integrated subscription billing to control access to premium AI features, ensuring scalable and production-ready monetization.","Designed and optimized a serverless Neon PostgreSQL database, implementing efficient queries and clean API architecture for high performance.","Developed multiple AI-powered tools including article generator, blog title generator, image generator, background remover, object remover, and resume analyzer.","Delivered a responsive, user-friendly frontend with React, Tailwind CSS, and custom hooks, ensuring fast data handling and seamless feature workflows."],
    href: "https://quick-ai-iota-blond.vercel.app/",
    image: "/assets/projects/quick.png",
    // bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Express" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Nodejs" },
      { id: 6, name: "Clerk" },
      { id: 7, name: "AI integration" },
    ],
  },
  {
    id: 2,
    name: "Signalist- Real Time Stock Market App with AI Insights",
    description:
      ["Built a real-time stock market platform using Next.js, delivering live price updates, fast rendering, and optimized performance.","Implemented Better Auth for secure user authentication and role-based access, ensuring reliable account protection.","Integrated interactive stock charts, search functionality, and personalized watchlists for a smooth and intuitive user experience.","Added AI-powered insights and daily news summaries to help users make informed investment decisions.","Used Inngest for background jobs and Coderabbit automation for continuous integration and workflow automation, ensuring scalability and reliability."],
    href: "https://signalist-ochre.vercel.app/",
    image: "/assets/projects/stocks.png",
    // bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next js" },
      { id: 2, name: "Inngest" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Better Auth" },
      { id: 5, name: "CodeRabbit" }
    ],
  },
  {
    id: 3,
    name: "Tourvisto — Interactive Travel Analytics Dashboard",
    description:
      ["Built a dynamic Travel Dashboard using React Router v7, featuring smooth navigation and optimized routing performance.","Integrated Appwrite for secure authentication, database management, and real-time travel data handling.","Implemented Syncfusion charts & data tables to visualize travel stats, trip history, budgets, and personalized suggestions.","Added personalized travel recommendations powered by user data and interactive UI components.","Integrated Sentry for real-time error tracking and monitoring, ensuring stability and production-grade reliability."],
    href: "https://tourvistoweb.vercel.app/",
    image: "/assets/projects/tour.png",
    // bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React Router V7" },
      { id: 2, name: "Syncfusion" },
      { id: 3, name: "Appwrite" },
      { id: 4, name: "Sentry" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Streamify- Real time video call and chat application.",
    description:
      ["Developed a full-stack communication platform using Node.js, Express, MongoDB, React, TanStack Query, and Tailwind CSS."," Implemented secure JWT authentication, onboarding flow, and protected routes for robust user access control.","Built real-time chat (WebSockets) and peer-to-peer video calling (WebRTC) optimized for low latency and performance.","Designed a friends system with efficient MongoDB queries and responsive UI interactions.","Added 32 customizable UI themes and reusable custom hooks to ensure maintainability and enhanced user experience.","Improved performance and scalability through optimized API design, database indexing, and TanStack Query caching. "],
    href: "https://streamify-video-bm8q.onrender.com/",
    image: "/assets/projects/streamify.png",
    // bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tanstack Query" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Express" },
    ],
  },
  {
    id: 5,
    name: "Awwwards-Inspired Interactive Website — React, GSAP & ScrollTrigger ",
    description:
      ["Built a high-performance Awwwards-style interactive website using React, Vite, Tailwind CSS, focusing on premium design and smooth UX.","Implemented advanced GSAP animations and ScrollTrigger effects for immersive, fluid motion and scroll-based interactions.","Designed a fully responsive, pixel-perfect layout with optimized assets and modern UI transitions.","Leveraged Vite for fast development builds and production optimization, ensuring excellent performance and scalability."],
    href: "https://awwwardsproj.vercel.app/",
    image: "/assets/projects/awwwards.png",
    // bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
      
    ],
  },
  {
    id: 6,
    name: "Axora — Modern Business Website",
    description:
      ["Built a modern, multi-section business website using Next.js for fast performance and SEO-friendly rendering.","Designed a clean, responsive UI with Tailwind CSS, suitable for any professional business or agency.","Implemented reusable components for sections like services, testimonials, pricing, FAQs, and contact forms.","Ensured excellent performance, accessibility, and deployment readiness with optimized images, routing, and metadata handling."],
    href: "https://businesswebsite-9xn4.vercel.app/",
    image: "/assets/projects/busi.png",
    // bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next Js" },
      { id: 2, name: "Tailwind CSS" },
      
    ],
  },
];
export const socials = [
 
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aparnak1567/" },
  { name: "GitHub", href: "https://github.com/Aparna1567/My-Projects" },
];
