import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find events around you</h1>
      <p>
        Browse more than <span>10,000 events</span> worldwide
      </p>
      <form>
        <input placeholder="Search events in any city..." spellCheck={false} />
      </form>
      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/Austin">Austin</Link>
          <Link href="/events/berlin">Berlin</Link>
        </div>
      </section>
    </main>
  );
}
