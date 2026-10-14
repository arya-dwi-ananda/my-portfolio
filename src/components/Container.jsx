import React from "react";

function Container({ children }) {
  return <div className="w-fit rounded-xl border border-gray-200 p-4 py-8 bg-white shadow-md">{children}</div>;
}

export default Container;
