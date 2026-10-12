export interface SkillGroup {
  title: string;
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces that are fast and accessible.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    note: "APIs and services behind the interface.",
    items: ["Node.js", "Python", "Flask", "FastAPI", "Django"],
  },
  {
    title: "Databases & cloud",
    note: "Where the data lives.",
    items: ["PostgreSQL", "pgvector", "SQLite", "Firebase", "Neon db"],
  },
 
];
