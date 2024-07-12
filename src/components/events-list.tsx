import EventCard from "./event-card";
import { fetchEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await fetchEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <>
      <section className="flex flex-wrap max-w-[1100px] gap-10 justify-center px-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <PaginationControls previousPath={previousPath} nextPath={nextPath} />
      </section>
    </>
  );
}
