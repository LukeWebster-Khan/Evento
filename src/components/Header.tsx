import React from "react";
import Logo from "./Logo";

import NavItem from "./NavItem";

import { routes } from "@/lib/constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 md:px-9 px-3">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <NavItem key={route.path} href={route.path} label={route.name} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
