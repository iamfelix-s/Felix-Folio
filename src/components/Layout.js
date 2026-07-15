import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`z-0 block h-full w-full bg-transparent px-24 py-8 xl:px-16 lg:px-12 md:px-8 md:py-4 sm:px-5 max-w-[1200px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;

