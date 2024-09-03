"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { ProductType } from "@/utils/types";
import { useRouter } from "next/navigation";

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 4%;
  border-radius: 6px;
  height: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 55%;
  align-items: center;
  padding: 3%;
  margin: 1%;
  border-radius: 10px;
  background: #ffffff;
  color: #50220e;
  box-shadow: 0 5px 8px -7px rgba(0, 0, 0, 0.2),
    0 3px 13px 0 rgba(0, 0, 0, 0.19);
`;
const ImageContainer = styled.div`
  box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  padding: 3% 7%;
`;
const Button = styled.button`
  all: unset;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #50220e;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 5px 8px -7px rgba(0, 0, 0, 0.2),
    0 3px 13px 0 rgba(0, 0, 0, 0.19);
`;

export default function Products({ products }: { products: ProductType[] }) {
  const router = useRouter();
  return (
    <GridContainer>
      {products.map((p) => {
        return (
          <Container key={p.id}>
            <ImageContainer>
              <Image
                key={p.id}
                src={p.image}
                alt={p.title}
                layout="responsive"
                width={150}
                height={150}
                priority
                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </ImageContainer>

            <Details>
              <Title>{p.title}</Title>
              <span>{`${p.price}$`}</span>
              <Button onClick={() => router.push(`/product/${p.id}`)}>
                view
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5ZM10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4ZM10 6.25C10.7894 6.2503 11.5586 6.49973 12.198 6.96275C12.8374 7.42578 13.3144 8.07878 13.561 8.82872C13.8075 9.57867 13.8112 10.3873 13.5713 11.1394C13.3314 11.8915 12.8603 12.5488 12.2251 13.0175C11.5898 13.4862 10.8229 13.7425 10.0335 13.7498C9.24408 13.7572 8.47249 13.5152 7.82864 13.0584C7.18479 12.6016 6.70153 11.9533 6.4477 11.2057C6.19388 10.4582 6.18243 9.64965 6.415 8.89525C6.59044 9.28728 6.89521 9.60717 7.27829 9.80137C7.66138 9.99557 8.09954 10.0523 8.51946 9.96209C8.93938 9.87187 9.31557 9.64017 9.58508 9.30575C9.85459 8.97133 10.0011 8.5545 10 8.125C10.0001 7.76385 9.8959 7.41036 9.69992 7.10701C9.50394 6.80366 9.22452 6.56336 8.89525 6.415C9.24475 6.30775 9.61525 6.25 10 6.25Z"
                    fill="#868C98"
                  />
                </svg>
              </Button>
            </Details>
          </Container>
        );
      })}
    </GridContainer>
  );
}
