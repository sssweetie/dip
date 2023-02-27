import React from "react";
import styled from "styled-components";

const StudyHeaderBar = styled.header`
  max-width: 72.5rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  margin: 30px 140px;
`;

const Study = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.9375rem;
  color: #0075ff;
  margin: 14px;
`;
export const StudyBar = () => {
  return (
    <StudyHeaderBar>
      <Study>STUDY</Study>
    </StudyHeaderBar>
  );
};
