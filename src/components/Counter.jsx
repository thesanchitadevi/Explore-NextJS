"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Simple Counter</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 min-w-[100px] text-xl"
            aria-label="Decrement"
          >
            -
          </button>
          <span className="text-4xl font-bold w-20" aria-live="polite">
            {count}
          </span>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 min-w-[100px] text-xl"
            aria-label="Increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
