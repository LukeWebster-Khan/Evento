import React from "react";
import { footerRoutes } from "@/lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy;Luke Webster-Khan</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {footerRoutes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
