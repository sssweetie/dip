import React from "react";
import styled from "styled-components";

const StudyHeaderBar = styled.header`
  min-width: 72.5rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  height: 3.75rem;
  margin: 0;
`;

const Study = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.9375rem;
  color: #0075ff;
  padding: 14px;
`;
export const StudyBar = () => {
  return (
    <StudyHeaderBar>
      <Study>STUDY</Study>
    </StudyHeaderBar>
  );
};
