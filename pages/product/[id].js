import React from 'react';
import ProductView from "../../components/ProductView";

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const paths = products.map(product => ({
    
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

const ProductPage = ({ product }) => {
  return (
    <ProductView product={product} />
  );
};

export default ProductPage;