import { Suspense } from "react";

import EventsList from "@/components/events-list";
import H1 from "@/components/H1";
import Loading from "./loading";
import { captializeFirstLetter } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;
  return {
    title: `${
      city === "all" ? "All Events" : `Events in ${captializeFirstLetter(city)}`
    }`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

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
      <Suspense key={city + parsedPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
