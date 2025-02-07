"use client"; // this will show only client side code in the browser

// Using react error suspense boundary to catch the error
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold py-5">
        Something went wrong!
        <br />
        <span className="text-xl text-red-500 font-medium">
          Error: {error.message}
        </span>
      </h1>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
