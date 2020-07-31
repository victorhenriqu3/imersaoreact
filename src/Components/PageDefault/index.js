import React from "react";
import Menu from "./../Menu/index";
import Footer from "./../Footer/index";
import styled from "styled-components";

const Main = styled.main`
  background-color: #262222;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <div>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default PageDefault;
