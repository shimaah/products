import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Loading from "../components/Loading";
import { isEmpty } from "lodash";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

const HomePage = ({ products }) => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 200);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if(!isEmpty(products)) {
      setLoading(false)
    }
  }, []);
  
  return <>{loading ? <Loading /> : <Products products={products} />}</>
};

export default HomePage;
