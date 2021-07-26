import styled from "styled-components";

export const NavBarStyles = styled.header`
  background-color: #f1f1f1 !important;
  @media(max-width: 700px) {
    display: flex;
    justify-content:center !important;
    align-items:center !important;
    flex-wrap: nowrap;
    }
`;

export const BackContainer = styled.nav`
  margin-left: 6rem;

  a {
    text-decoration: none;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 55px;

    color: gray;

    &:hover {
      color: black;
    }
  }
`;

export const TitleContainer = styled.nav`
  width: 60%;
  text-align: center;
  margin-left: 10em;

  h1 {
    color: gray;

    &:hover {
      color: black;
    }
    @media(max-width: 700px) {
    font-size: 22px;
    }
  }
`;
