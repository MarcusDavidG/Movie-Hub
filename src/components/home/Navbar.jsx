import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-70 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#">MOVIE-HUB</a>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="hover:underline">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Movies
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here..."
            className="hidden md:block bg-gray-700 rounded-full px-4 py-2 text-white focus:outline-none"
          />
          <button className="p-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M338.29 338.29 448 448"
              ></path>
            </svg>
          </button>
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 16c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08C16.71 18.72 14.5 20 12 20z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
