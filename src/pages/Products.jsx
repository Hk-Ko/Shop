import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useStateContext } from "../context/StateContext";

const Products = () => {
  const {
    state: { products },
  } = useStateContext();

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 my-10">
      {products?.map((pd) => (
        <Card key={pd?.id} product={pd} />
      ))}
    </div>
  );
};

export default Products;
