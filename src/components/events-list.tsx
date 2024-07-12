import EventCard from "./event-card";
import { fetchEvents } from "@/lib/utils";

export default async function EventsList({ city }: { city: string }) {
  const events = await fetchEvents(city);
  return (
    <>
      <section className="flex flex-wrap max-w-[1100px] gap-10 justify-center px-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </>
  );
}
