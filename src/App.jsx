import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { styled } from "styled-components";

// 모바일 크기 레이아웃 고정
export const Container = styled.div`
  background-color: #fff;
  width: 430px;
  min-height: 932px;
  position: relative;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;