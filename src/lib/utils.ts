import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EVENTS_API_PATH } from "./constants";
import { TEvent } from "./types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function captializeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function fetchEvents(city: string) {
  const res = await fetch(`${EVENTS_API_PATH}?city=${city}`);
  const events: TEvent[] = await res.json();
  return events;
}

export async function getEvent(slug: string) {
  const res = await fetch(`${EVENTS_API_PATH}/${slug}`);
  const event: TEvent = await res.json();
  return event;
}
