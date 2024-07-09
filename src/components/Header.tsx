import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events/all">All Events</Link>
        </li>
      </nav>
    </header>
  );
}
