import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen animate__animated animate__backInDown">
      <div className="bg-secondary p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-semibold tracking-wide text-danger">
          Thanks For Purchasing.
        </h1>
        <Link to={"/"}>
          <button className="text-primary bg-info px-5 py-2 shadow-lg uppercase rounded mt-7 transform transition hover:scale-90">
            Go Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
