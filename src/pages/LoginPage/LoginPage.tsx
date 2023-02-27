import React from "react";
import { LoginForm } from "./LoginForm";
import { StudyBar } from "../../components/StudyBar";
import styled from "styled-components";
import { LoginPageStudyBackground } from "./LoginPageStudyBackground";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90rem;
  height: 64rem;
  background-color: #f9f9fa; ;
`;

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginPageStudyBackground
        left="-90px"
        top="16px"
      ></LoginPageStudyBackground>
      <StudyBar></StudyBar>
      <LoginForm></LoginForm>
      <LoginPageStudyBackground
        left="140px"
        top="432px"
      ></LoginPageStudyBackground>
    </LoginPageWrapper>
  );
};
