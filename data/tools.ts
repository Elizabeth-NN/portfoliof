import type { SkillGroup } from "./skills";

export const toolGroups: SkillGroup[] = [
  {
    title: "Development & delivery",
    note: "Building, versioning, and shipping software.",
    items: ["Git & GitHub", "Docker", "Workflow automation"],
  },
  {
    title: "Authentication & platforms",
    note: "Connecting applications and managing access.",
    items: ["Clerk", "Supabase", "Firebase","cloudflare"],
  },
  {
    title: "AI & intelligent systems",
    note: "Building knowledge-driven applications.",
    items: ["AI & RAG", "Retrieval pipelines", "pgvector", "langgraph"],
  },
];
