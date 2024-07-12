import "server-only";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { captializeFirstLetter } from "./utils";

export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : captializeFirstLetter(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : captializeFirstLetter(city),
    },
  });
  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) return notFound();
  return event;
});
