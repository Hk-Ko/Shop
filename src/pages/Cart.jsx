import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const incresePrice = (price) => {
    setTotal(total + price);
  };

  const decresePrice =(price)=>{
    setTotal(total - price)
  }

  const checkoutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };

  useEffect(() => {
    setTotal(cart?.reduce((a, c) => a + c.price, 0));
  }, []);

  return (
    <div className="">
      {cart?.length > 0 ? (
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-5 col-span-3">
            {cart?.map((item) => (
              <CartItem key={item?.id} item={item} incresePrice={incresePrice} decresePrice={decresePrice}/>
            ))}
          </div>
          <div className="col-span-1">
            <div className="bg-secondary p-5 rounded shadow-lg my-5">
              <h1 className="text-3xl font-semibold mb-5 text-primary">
                Total Price - {total.toFixed(2)}
              </h1>
              <button
                onClick={checkoutHandler}
                className="px-5 py-2 bg-info text-primary rounded shadow-lg uppercase"
              >
                Checkout
              </button>
            </div>
            <div className="">
              <button
                className="text-secondary bg-danger rouned shadow-lg px-5 py-2"
                onClick={() => dispatch({ type: "CART_EMPTY" })}
              >
                Cart Empty
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen animate__animated animate__backInDown">
          <div className="bg-secondary p-8 rounded shadow-lg text-center">
            <h1 className="text-4xl font-semibold tracking-wide text-danger">
              Your cart is empty
            </h1>
            <Link to={"/"}>
              <button className="text-primary bg-info px-5 py-2 shadow-lg uppercase rounded mt-7 transform transition hover:scale-90">
                Go Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
