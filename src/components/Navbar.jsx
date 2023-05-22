import React from "react";
import { SiShopify } from "react-icons/si";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useStateContext();
  return (
    <nav className="flex justify-between items-center px-5 py-2 my-5 rounded bg-gray-50 shadow-md">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <SiShopify className="text-4xl text-danger" />
          <h1 className="uppercase text-xl tracking-wider font-semibold text-info">
            mms-shop
          </h1>
        </div>
      </Link>
      <div className="flex gap-2 items-center">
        <Link to={'/cart'}>
          <div className="flex gap-2 items-center bg-gray-500 text-white px-4 py-2 rounded">
            <FaShoppingCart />
            <small>{cart.length}</small>
          </div>
        </Link>
        <div className="flex items-center gap-2 border-2 px-3 py-2 rounded">
          <FaSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="outline-none  bg-transparent"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
