import React from "react";
import { createGlobalStyle } from "styled-components";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import IMBPlex from "./fonts/IBMPlexSans-Regular.ttf";
const Global = createGlobalStyle`
@font-face {
  font-family: 'IBM Plex Sans';
  src: url(${IMBPlex}) format('ttf');
}
html, body {
  margin: 0;
  padding: 0;
  font-family: "IBM Plex Sans";
}
`;
function App() {
  return (
    <div className="App">
      <Global></Global>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
