import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl" href="/">
          My Site
        </Link>
        <div className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
