import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import { AiFillStar } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useStateContext } from "../context/StateContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const {dispatch} = useStateContext()

  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };

  const getProductsByCat = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filterData = data?.filter((item) => item?.id !== product.id);
    setProducts(filterData);
  };

  useEffect(() => {
    getProductDetail();
    getProductsByCat();
  }, [products, product]);

  return (
    <div className="my-20 bg-primary p-10 rounded-md">
      <div className="flex gap-5 items-center">
        <img
          src={product?.image}
          className="h-[300px] border-2 p-10 shadow-lg rounded"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <p className="bg-danger px-3 py-1 text-primary rounded w-52 text-xs font-sans font-semibold">
            {" "}
            {product?.category}
          </p>
          <h3 className="font-bold text-header ">{product?.title}</h3>
          <div className="">
            <p className="text-para font-semibold">Description</p>
            <p className="text-secondary text-sm">{product?.description}</p>
          </div>
          <p className="font-semibold flex gap-1 items-center">
            <AiFillStar className="text-danger" />
            <small className="font-semibold text-para">
              ({product?.rating?.rate})
            </small>
          </p>
          <p className="text-header font-semibold text-3xl">
            ${product?.price}
          </p>
          <div className="">
            <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className="bg-info text-primary text-sm px-5 py-2 rounded shadow-lg transform transition hover:scale-90">
              Add To Cart
            </button>
            <Link to={'/success'}>
              <button className="bg-header text-primary text-sm px-5 py-2 rounded shadow-lg transform transition hover:scale-90 ml-3">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="mb-5">Products you may know</h1>
        <div className="flex flex-wrap gap-10">
          {products?.map((item) => (
            <div key={item?.id}>
              <img
                src={item?.image}
                className="h-[100px] border-2 p-3 rounded shadow-md transform transition-all hover:animate-bounce"
                alt=""
              />
              <p className="text-sm font">${item?.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
