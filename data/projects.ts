export type ProjectCategory = "fullstack" | "ai";

export interface Project {
  id: string;
  initials: string;
  name: string;
  category: ProjectCategory;
  label: string;
  description: string;
  technologies: string[];
  image: string;
  theme: string;
  liveUrl: string;
  githubUrl?: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: "innovation-marketplace",
    initials: "IM",
    name: "Innovation Marketplace",
    category: "fullstack",
    label: "Marketplace",
    description:
      "A platform that empowers Moringa School students to showcase, monetize, and scale their final capstone projects. Visitors discover talent, buy innovative solutions, and shop Moringa-branded merchandise.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Firebase",
      "Flask",
      "SQLite",
    ],
    image: "/images/innovation-marketplace.png",
    theme: "",
    liveUrl: "https://innovation-marketplace.vercel.app/",
    status: "Live",
  },
  {
    id: "mcm-cargo",
    initials: "MC",
    name: "MCM-CARGO",
    category: "fullstack",
    label: "Logistics",
    description:
      "A logistics platform covering customs clearance, sea, air and land freight forwarding, and warehousing services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Django",
      "Clerk",
      "Docker",
    ],
    image: "/images/mcm-cargo.png",
    theme: "p-amber",
    liveUrl: "https://mcm-amber.vercel.app/",
    githubUrl: "https://github.com/Elizabeth-NN/mcm",
    status: "Live",
  },
  {
    id: "alexcyberservices",
    initials: "AC",
    name: "AlexCyberServices",
    category: "fullstack",
    label: "Digital services",
    description:
      "A digital-services platform for service requests, document handling, and customer workflows.",
    technologies: [
      "Next.js",
      "React",
      "FastAPI",
      "Supabase",
      "Clerk",
    ],
    image: "/images/alexcyberservices.png",
    theme: "p-blue",
    liveUrl: "https://alex-cyber-services.vercel.app",
    githubUrl: "https://github.com/Elizabeth-NN/cafe",
    status: "Live",
  },
  {
    id: "customer-support-agent",
    initials: "CS",
    name: "Customer Support Agent",
    category: "ai",
    label: "AI & RAG",
    description:
      "An AI support assistant that retrieves answers from business knowledge, cites relevant sources, and escalates when it cannot answer confidently. Order lookup and ticket creation are planned.",
    technologies: [
      "Next.js",
      "FastAPI",
      "RAG",
      "PostgreSQL",
      "pgvector",
    ],
    image: "/images/customer-support-agent.png",
    theme: "p-rose",
    liveUrl: "https://customer-support-agent-jade-two.vercel.app/",
    githubUrl:
      "https://github.com/Elizabeth-NN/customer-support-agent",
    status: "Live",
  },
];
