import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <li>
      <Link className="text-white/50 hover:text-white transition" href={href}>
        {label}
      </Link>
    </li>
  );
}
