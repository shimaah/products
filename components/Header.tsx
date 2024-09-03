import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid rgba(233, 233, 233, 0.15);
  background: #50220e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
const Content = styled.div`
  padding: 0 4%;
`;
export const Header = () => {
  return (
    <Container>
      <Content>Home</Content>
      <Content>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3956 8.12287C18.3956 9.47701 17.8576 10.7757 16.9001 11.7332C15.9426 12.6907 14.6439 13.2287 13.2898 13.2287C11.9356 13.2287 10.6369 12.6907 9.67942 11.7332C8.7219 10.7757 8.18397 9.47701 8.18397 8.12287M2.60999 7.35877L1.71647 18.0809C1.52452 20.3843 1.42855 21.536 1.81791 22.4245C2.16 23.205 2.75271 23.8492 3.50219 24.2549C4.35522 24.7167 5.5109 24.7167 7.82227 24.7167H18.7573C21.0686 24.7167 22.2243 24.7167 23.0774 24.2549C23.8268 23.8492 24.4195 23.205 24.7616 22.4245C25.151 21.536 25.055 20.3843 24.8631 18.0809L23.9696 7.35876C23.8044 5.3769 23.7218 4.38598 23.2829 3.63596C22.8965 2.97551 22.321 2.44599 21.6307 2.1157C20.8468 1.74062 19.8525 1.74062 17.8638 1.74062L8.71579 1.74062C6.72706 1.74062 5.73269 1.74062 4.94882 2.11569C4.25856 2.44598 3.68307 2.9755 3.2966 3.63596C2.85772 4.38597 2.77514 5.3769 2.60999 7.35877Z"
            stroke="#FDFDFD"
            strokeWidth="1.91468"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Content>
    </Container>
  );
};
