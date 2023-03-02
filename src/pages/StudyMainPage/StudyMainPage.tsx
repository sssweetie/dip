import React from "react";
import styled from "styled-components";
import { StudyBar } from "../../components/StudyBar";
import { StudyMainPage_Navigation } from "./StudyMainPage_Navigation";
import { StudyMainPage_Profile } from "./StudyMainPage_Profile";
const Aside = styled.aside`
  width: 16.25rem;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 40px;
  height: 36.75rem;
  background-color: #ffffff;
`;
export const StudyMainPage = () => {
  return (
    <div>
      <StudyBar></StudyBar>
      <main>
        <section>
          <p></p>
          <div></div>
        </section>
        <section>
          <p></p>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
      <Aside>
        <StudyMainPage_Profile></StudyMainPage_Profile>
        <StudyMainPage_Navigation></StudyMainPage_Navigation>
      </Aside>
    </div>
  );
};
