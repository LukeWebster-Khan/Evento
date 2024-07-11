import { TEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: TEvent[];
};

export default function EventsList({ events }: EventsListProps) {
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
