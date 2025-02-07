import Navbar from "@/components/Shared/Navbar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
