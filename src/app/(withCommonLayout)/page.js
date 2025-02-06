"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl ">Welcome to the home page of Next JS Project</h1>

      <button
        onClick={handleNavigation}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded"
      >
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
