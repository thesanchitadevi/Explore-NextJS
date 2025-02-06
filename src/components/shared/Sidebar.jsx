import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-gray-100">
      <div className="flex items-center justify-center h-14 border-b border-gray-700">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <Link href="/" className="p-2 hover:bg-gray-700 cursor-pointer">
          Home
        </Link>
        <Link href="/" className="p-2 hover:bg-gray-700 cursor-pointer">
          Products
        </Link>
        <Link href="/" className="p-2 hover:bg-gray-700 cursor-pointer">
          Orders
        </Link>
        <Link href="/profile" className="p-2 hover:bg-gray-700 cursor-pointer">
          Profile
        </Link>
        <Link href="/settings" className="p-2 hover:bg-gray-700 cursor-pointer">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
