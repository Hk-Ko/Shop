import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

const CartItem = ({ item,decresePrice,incresePrice }) => {
  const { dispatch } = useStateContext();

  const [qty, setQty] = useState(1);

  const increseQty = () => {
    setQty((prev) => prev + 1);
    incresePrice(item.price)
  };

  const decreseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
    decresePrice(item.price)
  };

  const removeHandler =()=>{
    decresePrice(item.price * qty)
    dispatch({ type: "REMOVE_FROM_CART", payload: item })
  }

  return (
    <div className="flex gap-3 items-center">
      <img src={item?.image} className="h-32 border-2 rounded p-4" alt="" />
      <div className="">
        <h3 className="text-2xl font-semibold">{item?.title}</h3>
        <p className="text-secondary text-3xl my-2">{item?.price * qty}</p>
        <div className="flex items-center gap-2">
          <AiFillMinusSquare onClick={decreseQty} className="text-danger text-2xl cursor-pointer" />
          <p className="text-2xl ">{qty}</p>
          <AiFillPlusSquare onClick={increseQty} className="text-info text-2xl cursor-pointer" />
          <AiFillDelete
            className="text-danger text-2xl"
            onClick={
              removeHandler
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
