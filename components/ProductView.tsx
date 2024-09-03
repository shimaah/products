"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductType } from "@/utils/types";
import styled, { css } from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  color: #50220e;
  background: #ffffff;
`;
const ProductContainer = styled.div<{ $smallScreen: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 30%) 1fr;
  align-items: end;
  padding: 4%;
  color: #50220e;
  gap: 7%;
  background: #ffffff;

  ${(props) =>
    props.$smallScreen &&
    css`
      grid-template-columns: 1fr;
      height: 100%;
      align-items: center;
      gap: 2%;
    `};
`;
const Description = styled.div<{ $smallScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  ${(props) =>
    props.$smallScreen &&
    css`
      font-size: 14px;
      width: 90%;
    `};
`;
const ProductTitle = styled.div<{ $smallScreen?: boolean }>`
  font-size: 22px;
  font-weight: 600;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ${(props) =>
    props.$smallScreen &&
    css`
      font-size: 20px;
      text-align: center;
      padding: 5% 0;
    `};
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;
  padding: 25px;
`;
const LinkContainer = styled.div<{ $smallScreen?: boolean }>`
  display: flex;
  margin: 3% 0;
  ${(props) =>
    props.$smallScreen &&
    `
    width: 90%;
    `};
`;
const LinkButton = styled(Link)`
  border-radius: 6px;
  padding: 10px;
  width: 90px;
  text-align: center;
  color: #50220e;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 1px 8px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
`;
const ProductView = ({ product }: { product?: ProductType }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is small
    const checkSmallScreen = () => {
      const width = window.innerWidth;
      setSmallScreen(width <= 768);
    };
    window.addEventListener("resize", checkSmallScreen);
    checkSmallScreen();

    return () => window.removeEventListener("resize", checkSmallScreen);
  }, []);

  return (
    <Container>
      {product ? (
        <ProductContainer $smallScreen={smallScreen}>
          {!smallScreen && (
            <Description>
              <p>{product.description}</p>
              <div>Category: {product.category}</div>
            </Description>
          )}
          <ImageContainer>
            <ProductTitle $smallScreen={smallScreen}>
              <span>{product.title}</span>
              {product.price}$
            </ProductTitle>
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              priority
            />
          </ImageContainer>
          {smallScreen && (
            <Description $smallScreen={smallScreen}>
              <p>{product.description}</p>
              <div>Category: {product.category}</div>
            </Description>
          )}
          <LinkContainer $smallScreen={smallScreen}>
            <LinkButton href="/">back</LinkButton>
          </LinkContainer>
        </ProductContainer>
      ) : (
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </div>
      )}
    </Container>
  );
};

export default ProductView;
