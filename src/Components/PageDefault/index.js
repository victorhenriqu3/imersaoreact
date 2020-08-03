import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/index';
import Footer from '../Footer/index';

const Main = styled.main`
  background-color: #141414;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  height: 100vh;
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
