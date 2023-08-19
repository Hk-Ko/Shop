import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Card = ({ product }) => {
  const { title, image, price, rating, id } = product;
  const { dispatch } = useStateContext();
  return (
    <div className="w-80 border-2 p-5 rounded-lg transform duration-300 hover:scale-105 hover:shadow-xl bg-primary">
      <img src={image} alt="" className="h-[150px] block mx-auto" />
      {title?.length > 25 ? (
        <h3 className="mt-5 font-bold  text-header">
          {title.substring(0, 25)}...
        </h3>
      ) : (
        <h3 className="mt-5 font-bold  text-header">{title}</h3>
      )}
      <div className="flex items-center gap-2 my-3">
        <AiFillStar className="text-danger" />
        <small className="text-secondary font-semibold">({rating?.rate})</small>
      </div>
      <p className="font-bold text-para mb-5">${price}</p>
      <div className="">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-info text-primary text-xs font-semibold px-5 py-2 rounded shadow-md cursor-pointer transform transition hover:scale-90 hover:shadow-md"
        >
          Add To Cart
        </button>
        <Link to={`/detail/${id}`}>
          <button className="bg-header text-primary text-xs font-semibold px-5 py-2 rounded shadow-md ml-3 cursor-pointer transform transition hover:scale-90 hover:shadow-md">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
