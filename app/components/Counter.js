"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded w-48">
      <h2 className="text-xl font-semibold">Count: {count}</h2>

      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}
