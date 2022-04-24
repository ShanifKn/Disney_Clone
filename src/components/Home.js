import React, { useEffect } from "react";
import styled from "styled-components";
import Imgslider from "./Imgslider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  return (
    <Container>
      <Imgslider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 64px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
