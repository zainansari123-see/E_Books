"use client";
import React, { useState } from "react";

const Navbar2 = () => {
  const [active, setActive] = useState("Home");

  const linkClass = (name) =>
    `text-lg font-medium cursor-pointer pb-1 ${
      active === name
        ? "text-purple-500 border-b-2 border-purple-500"
        : "text-black hover:text-purple-500"
    }`;

  return (
    <div className="w-full h-16 items-center flex justify-between px-10 shadow-md">
      <div className="flex space-x-8 ml-18 mr-20">

        <a href="/" onClick={() => setActive("Home")} className={linkClass("Home")}>
          Home
        </a>

        <a href="./" onClick={() => setActive("Books")} className={linkClass("Books")}>
          Books
        </a>

        <a href="#" onClick={() => setActive("Series")} className={linkClass("Series")}>
          Series
        </a>

        <a href="#" onClick={() => setActive("Contributors")} className={linkClass("Contributors")}>
          Contributors
        </a>

        <a href="#" onClick={() => setActive("About Us")} className={linkClass("About Us")}>
          About Us
        </a>

      </div>
    </div>
  );
};

export default Navbar2;
