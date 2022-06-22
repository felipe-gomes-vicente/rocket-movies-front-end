import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export const Logo = styled.div`
  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`;

export const Search = styled.div`
  width: 52.5%;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  align-self: end;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
