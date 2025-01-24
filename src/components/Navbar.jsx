import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("All");
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // setMenuOpen(false); 
  };

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <nav className="bg-white shadow-sm font-light h-17">
      <div className="mx-5 flex justify-between items-center h-full ">
        {/* Logo and Nav Items */}
        <div className="flex items-center space-x-6 cursor-pointer">
          {/* Logo */}
          <div className="font-semibold text-xl">
            <Link to="/">Shopi</Link>
          </div>

          {/* Nav items for larger screens */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <p
              to="/all"
              className={`inline-flex items-center pt-1 border-b-2 text-sm ${
                activeTab === "All"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("All")}
            >
              All
            </p>
            <p
              to="/clothes"
              className={`inline-flex items-center pt-1 border-b-2 text-sm ${
                activeTab === "Clothes"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Clothes")}
            >
              Clothes
            </p>
            <p
              to="/electronics"
              className={`inline-flex items-center pt-1 border-b-2 text-sm ${
                activeTab === "Electronics"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Electronics")}
            >
              Electronics
            </p>
            <p
              to="/furnitures"
              className={`inline-flex items-center pt-1 border-b-2 text-sm ${
                activeTab === "Furnitures"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Furnitures")}
            >
              Furnitures
            </p>
            <p
              to="/toys"
              className={`inline-flex items-center pt-1 border-b-2 text-sm ${
                activeTab === "Toys"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Toys")}
            >
              Toys
            </p>
          </div>
        </div>

        {/* Cart and Login ps */}
        <div className="hidden sm:flex sm:items-center cursor-pointer">
          <div className="ml-3 flex items-center text-sm">
            <p to="/my-orders" className="text-gray-500 hover:text-gray-700">
              My Orders
            </p>
            <p
              to="/my-account"
              className="ml-3 text-gray-500 hover:text-gray-700"
            >
              My Account
            </p>
            <p
              to="/cart"
              className="ml-3 text-gray-500 hover:text-gray-700 flex gap-1"
            >
              <IoCart fontSize={22} color="black" />
              <span>0</span>
            </p>
            <p
              to="/login"
              className="ml-3 px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Login
            </p>
          </div>
        </div>

        {/* Hamburger button for mobile screens */}
{/* 
        <button
          className="sm:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button> */}
      </div>

      {/* {menuOpen && (
        <div className="sm:hidden flex flex-col bg-white shadow-md">
          <p
            to="/all"
            className={`px-4 py-2 border-b ${
              activeTab === "All" ? "text-black font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </p>
          <Link
            to="/clothes"
            className={`px-4 py-2 border-b ${
              activeTab === "Clothes"
                ? "text-black font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleTabClick("Clothes")}
          >
            Clothes
          </Link>
          <Link
            to="/electronics"
            className={`px-4 py-2 border-b ${
              activeTab === "Electronics"
                ? "text-black font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleTabClick("Electronics")}
          >
            Electronics
          </Link>
          <Link
            to="/furnitures"
            className={`px-4 py-2 border-b ${
              activeTab === "Furnitures"
                ? "text-black font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleTabClick("Furnitures")}
          >
            Furnitures
          </Link>
          <Link
            to="/toys"
            className={`px-4 py-2 border-b ${
              activeTab === "Toys" ? "text-black font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("Toys")}
          >
            Toys
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Login
          </Link>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
