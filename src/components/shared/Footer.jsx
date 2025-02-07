import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>
        &copy; 2025{" "}
        <Link className="text-medium font-bold" href="/">
          <span className="text-red-400">Next</span>
          Web
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
