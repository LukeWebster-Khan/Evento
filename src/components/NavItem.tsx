"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: NavItemProps) {
  const activePathName = usePathname();
  return (
    <li
      className={cn(
        `text-white/50 relative hover:text-white transition flex items-center`,
        {
          "text-white/100": activePathName === href,
        }
      )}
    >
      <Link href={href}>{label}</Link>
      {activePathName === href ? (
        <motion.div
          layoutId="header-active-link"
          className="bg-accent h-1 w-full absolute bottom-0"
        ></motion.div>
      ) : null}
    </li>
  );
}
