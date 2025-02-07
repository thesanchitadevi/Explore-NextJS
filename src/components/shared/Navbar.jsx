"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href="/">
          <span className="text-red-400">Next</span>
          Web
        </Link>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href ? "text-red-400" : ""
              } hover:text-red-400 transition`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
