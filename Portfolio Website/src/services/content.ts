import { fallbackNotes, fallbackProfile, fallbackProjects } from "../data/fallback";
import { prisma } from "../lib/prisma";

const hasDatabase = Boolean(process.env.DATABASE_URL);

export async function getProfile() {
  if (!hasDatabase) {
    return fallbackProfile;
  }

  return prisma.profile.findFirst({
    orderBy: { updatedAt: "desc" },
  });
}

export async function getProjects() {
  if (!hasDatabase) {
    return fallbackProjects;
  }

  return prisma.project.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

export async function getFeaturedProjects() {
  if (!hasDatabase) {
    return fallbackProjects.filter((project) => project.featured);
  }

  return prisma.project.findMany({
    where: { featured: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: 3,
  });
}

export async function getNotes() {
  if (!hasDatabase) {
    return fallbackNotes;
  }

  return prisma.note.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
  });
}

export async function getNoteBySlug(slug: string) {
  if (!hasDatabase) {
    return fallbackNotes.find((note) => note.slug === slug) ?? null;
  }

  return prisma.note.findFirst({
    where: {
      slug,
      published: true,
    },
  });
}
