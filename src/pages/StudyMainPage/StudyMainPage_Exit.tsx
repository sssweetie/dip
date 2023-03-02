import React from "react";
import styled from "styled-components";
import { StudyMainPage_Link } from "./StudyMainPage_Link";

const Exit = styled.div`
  margin-top: 200px;
`;

const Line = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
`;
export const StudyMainPage_Exit = () => {
  return (
    <Exit>
      <Line></Line>
      <StudyMainPage_Link>Выход</StudyMainPage_Link>
    </Exit>
  );
};
