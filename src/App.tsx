import React from "react";
import { createGlobalStyle } from "styled-components";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import IMBPlex from "./fonts/IBMPlexSans-Regular.ttf";
import { StudyMainPage } from "./pages/StudyMainPage/StudyMainPage";

const Global = createGlobalStyle`
@font-face {
  font-family: 'IBMPlexSans';
  src: local("IBMPlexSans"), url(${IMBPlex}) format('truetype');
}

html, body {
  margin: 0;
  padding: 0;
  font-family: "IBMPlexSans";
  background-color: #F9F9FA;
}
`;

function App() {
  return (
    <div style={{ padding: "30px 140px 0 140px" }}>
      <Global></Global>
      {/* <LoginPage></LoginPage> */}
      <StudyMainPage></StudyMainPage>
    </div>
  );
}

export default App;
