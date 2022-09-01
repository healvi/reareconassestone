import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              width={25}
              height={25}
              alt="Flowbite Logo"
            />
            <span className="ml-[4px] self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              New York times
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
