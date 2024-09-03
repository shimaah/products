import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  width: 120px;
  height: 120px;
  border: 5px solid #50220e;
  border-color: #50220e transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};
export default Loading;
