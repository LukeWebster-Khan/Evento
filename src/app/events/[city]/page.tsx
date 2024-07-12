import { Suspense } from "react";

import EventsList from "@/components/events-list";
import H1 from "@/components/H1";
import Loading from "./loading";
import { captializeFirstLetter } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: EventsPageProps) {
  const city = params.city;
  return {
    title: `${
      city === "all" ? "All Events" : `Events in ${captializeFirstLetter(city)}`
    }`,
  };
}

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

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
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
