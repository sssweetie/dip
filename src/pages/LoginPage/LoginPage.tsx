import React from "react";
import { LoginForm } from "./LoginForm";
import { StudyBar } from "../../components/StudyBar";
import styled from "styled-components";
import { LoginPageStudyBackground } from "./LoginPageStudyBackground";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 90rem; 1440px*/
  height: 64rem;
  background-color: #f9f9fa;
  position: sticky;
`;

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      {/* <LoginPageStudyBackground
        left="-90px"
        top="16px"
      ></LoginPageStudyBackground> text as a background has some difficulties with Z-index and Y letter */}
      <StudyBar></StudyBar>
      <LoginForm></LoginForm>
      {/* <LoginPageStudyBackground
        left="140px"
        top="432px"
      ></LoginPageStudyBackground> */}
    </LoginPageWrapper>
  );
};
