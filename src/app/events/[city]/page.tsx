import EventsList from "@/components/events-list";
import H1 from "@/components/H1";

import { EVENTS_API_PATH } from "@/lib/constants";
import { TEvent } from "@/lib/types";
import { sleep } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  await sleep(1000);
  const res = await fetch(`${EVENTS_API_PATH}?city=${city}`);
  const events: TEvent[] = await res.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10 sm:mb-24">
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
