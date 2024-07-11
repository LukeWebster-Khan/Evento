import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-3 pt-36">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        worldwide
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/Austin">Austin</Link>
          <Link href="/events/berlin">Berlin</Link>
        </div>
      </section>
    </main>
  );
}
