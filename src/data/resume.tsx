import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import {
  ReactColored,
  NextjsColored,
  TypescriptColored,
  JavascriptColored,
  TailwindColored,
  NodejsColored,
  ExpressColored,
  SupabaseColored,
  PostgresqlColored,
  MongodbColored,
  MysqlColored,
  CplusplusColored,
  DockerColored,
  GitColored,
  KafkaColored,
  ReduxColored,
  ReactQueryColored,
  ShadcnColored,
  AwsColored,
  VercelColored,
  StripeColored,
  ClaudeColored,
  LinuxColored,
  DjangoColored,
  FastapiColored,
} from "@/components/ui/svgs/colored-skills";

export const DATA = {
  name: "Bisrat Beriso Wake",
  initials: "BB",
  url: "https://bisratberiso.vercel.app",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/Addis+Ababa",
  description:
    "Software Engineering student at Addis Ababa University & Co-founder of Endebeto.",
  summary:
    "I am a **Software Engineer** studying at **Addis Ababa University**, specializing in **full-stack web development**, **scalable backend APIs**, and **applied AI workflows**. I enjoy taking ideas from concept to production, building clean, reliable systems that solve real problems.\n\nI am the **co-founder and lead developer** of [Endebeto](https://endebeto.com/), Ethiopia's first local-experience booking platform supported by the **Ministry of Tourism**, where I built the core booking engine, authentication, and payment integrations. Currently, I also contribute to a **nationwide government project** alongside senior developers at **INSA**, focusing on robust backend services.\n\nOutside of work, I regularly practice competitive programming with **350+ LeetCode problems** solved and train with **A2SV (Africa to Silicon Valley)**.",
  avatarUrl: "/bisrat-zoomed.jpg",
  skills: [
    { name: "React", icon: ReactColored },
    { name: "Next.js", icon: NextjsColored },
    { name: "TypeScript", icon: TypescriptColored },
    { name: "JavaScript", icon: JavascriptColored },
    { name: "Python", icon: Python },
    { name: "Django", icon: DjangoColored },
    { name: "FastAPI", icon: FastapiColored },
    { name: "Node.js", icon: NodejsColored },
    { name: "Express.js", icon: ExpressColored },
    { name: "Tailwind CSS", icon: TailwindColored },
    { name: "Shadcn UI", icon: ShadcnColored },
    { name: "Redux Toolkit", icon: ReduxColored },
    { name: "React Query", icon: ReactQueryColored },
    { name: "PostgreSQL", icon: PostgresqlColored },
    { name: "MongoDB", icon: MongodbColored },
    { name: "MySQL", icon: MysqlColored },
    { name: "Supabase", icon: SupabaseColored },
    { name: "Java", icon: Java },
    { name: "C++", icon: CplusplusColored },
    { name: "Docker", icon: DockerColored },
    { name: "AWS", icon: AwsColored },
    { name: "Vercel", icon: VercelColored },
    { name: "Stripe", icon: StripeColored },
    { name: "Claude", icon: ClaudeColored },
    { name: "Linux", icon: LinuxColored },
    { name: "Git", icon: GitColored },
    { name: "GitHub", icon: Icons.github },
    { name: "Apache Kafka", icon: KafkaColored },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/document/Bisrat_Resume_Latest.pdf", icon: Icons.document, label: "Resume" },
  ],
  contact: {
    email: "bisratberiso@gmail.com",
    tel: "+251982305539",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bisrat6",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bisrat-beriso",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/251982305539",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:bisratberiso@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "INSA",
      badges: ["Current"],
      href: "https://www.insa.gov.et",
      location: "Addis Ababa, Ethiopia",
      title: "Application Software Developer",
      logoUrl: "/insa-transparent.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Currently contributing to a nationwide government project alongside senior developers, building scalable backend systems and APIs. Led backend development of Legalink, a legal case management platform during the program's summer track, designing RESTful APIs for authentication, case tracking, and secure communication, integrated with the frontend under agile practices.",
    },
    {
      company: "Revelo",
      href: "https://www.revelo.com",
      badges: ["Remote Freelance"],
      location: "Remote",
      title: "AI Training Software Engineer",
      logoUrl: "/revelo.png",
      start: "Dec 2025",
      end: "Apr 2026",
      description:
        "Reviewed and graded AI-agent-generated code across multiple languages for correctness, efficiency, and adherence to software engineering best practices, feeding structured evaluations back into model training. Analyzed AI-generated pull requests to identify recurring quality gaps and helped refine criteria used to assess AI development workflows.",
    },
    {
      company: "iCog Labs",
      href: "https://icog-labs.com",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "AI Engineer Intern",
      logoUrl: "/icog-transparent.png",
      start: "Nov 2025",
      end: "May 2026",
      description:
        "Completed weekly technical training while building applied computer-vision models, including YOLO-based object detection, and worked on Pattern Miner Hyperon with senior research mentors. Built a hybrid SARIMAX-LightGBM time-series forecasting pipeline and implemented neural networks from scratch, including a variational autoencoder (VAE).",
    },
  ],

  education: [
    {
      school: "Addis Ababa University",
      href: "http://www.aau.edu.et",
      degree: "B.Sc. in Software Engineering",
      logoUrl: "/aau.png",
      start: "Sep 2023",
      end: "Expected Jun 2028",
    },
    {
      school: "A2SV (Africa to Silicon Valley)",
      href: "https://a2sv.org",
      degree: "Data Structures & Algorithms Trainee",
      logoUrl: "/a2sv.svg",
      start: "Jan 2026",
      end: "Jun 2026",
    },
    {
      school: "Foka STEM Center (STEM Power Ethiopia)",
      href: "https://stempower.org",
      degree: "Software Engineering Trainee",
      logoUrl: "/stempower-transparent.png",
      start: "Jun 2022",
      end: "Oct 2022",
    },
  ],

  projects: [
    {
      title: "Endebeto",
      href: "https://endebeto.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Ethiopia's premier local-experience booking platform connecting travelers with authentic local hosts. Engineered the full-stack architecture, onboarding 40+ hosts and serving 1,200+ users with 300+ bookings, supported by the Ministry of Tourism.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Chapa Payments",
        "Cloudinary",
        "Google OAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://endebeto.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/Endebeto/Endebeto-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/endebeto.png",
      video: "/endebeto.mp4",
    },
    {
      title: "RouteCast",
      href: "https://weather-aware-truck-routing-1-og3f.onrender.com",
      dates: "2025",
      active: true,
      description:
        "Intelligent route optimization and weather risk mitigation platform for long-haul freight and logistics. Calculates safest travel corridors, checkpoint intervals, and real-time risk analyses across continental transport routes.",
      technologies: [
        "Django",
        "MapLibre GL",
        "HERE Routing v8",
        "Open-Meteo API",
        "Cloudflare Workers",
        "Pytest",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-aware-truck-routing-1-og3f.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/bisrat6/weather-aware-truck-routing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/routecase.png",
      video: "/routecase.mp4",
      videoPosition: "object-left",
    },
    {
      title: "AXIS",
      href: "https://github.com/bisrat6/LiteKV",
      dates: "2024",
      active: true,
      description:
        "High-density enterprise SaaS platform combining real-time transaction monitoring with AI-driven anomaly detection and natural language query generation.",
      technologies: [
        "AI & LLMs",
        "TypeScript",
        "React",
        "Python",
        "Node.js",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/bisrat6/LiteKV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AXIS.png",
      video: "/axis.mp4",
    },
    {
      title: "IACMS",
      href: "https://github.com/bisrat6",
      dates: "2025",
      active: true,
      description:
        "Multi-tenant government case management platform serving 5+ public agencies. Features role-based access control across 60+ endpoints, real-time authenticated chat over WebSockets, and high-reliability event pipelines.",
      technologies: [
        "Apache Kafka",
        "GraphQL / Apollo",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "Docker",
        "WebSockets",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/bisrat6",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iacms.png",
      video: "/iacms.mp4",
    },
  ],

  hackathons: [
    {
      title: "3rd Place - National Mathematics Competition",
      dates: "National Award",
      location: "MySoroban Ethiopia",
      description:
        "Awarded 3rd place nationally in mathematical analysis and problem-solving speed, applying mathematical foundations directly to complex computational algorithms.",
      image: "",
      icon: Icons.trophy,
      mlh: "",
      links: [],
    },
    {
      title: "350+ Algorithmic Problems Solved",
      dates: "Milestone",
      location: "LeetCode & Codeforces",
      description:
        "Solved 350+ competitive programming and algorithmic challenges spanning dynamic programming, graphs, trees, and advanced data structures with optimal time/space complexity.",
      image: "",
      icon: Icons.code,
      mlh: "",
      links: [],
    },
    {
      title: "National Science & Engineering Fair Prototype",
      dates: "2022",
      location: "Foka STEM Center",
      description:
        "Built and certified an Arduino/RFID ticketing and queue-management prototype with a companion desktop application for a national science and engineering fair.",
      image: "",
      icon: Icons.award,
      mlh: "",
      links: [],
    },
  ],
} as const;
