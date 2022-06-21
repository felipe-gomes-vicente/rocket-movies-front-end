import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    font-weight: 500;
  }

  > a {
    display: flex;
    align-self: center;
    margin-top: 124px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK_300};

    svg {
      align-self: center;
      font-size: 22px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`;