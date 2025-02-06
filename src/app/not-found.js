import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-20">
      Page not found
      <br />
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded">
          Got to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
