import { relative } from "path";
import React from "react";
import styled from "styled-components";

type StudyProps = {
  left: string;
  top: string;
};

const StudyBackground = styled.div<StudyProps>`
  position: absolute;
  width: 86.875rem;
  height: 35.5rem;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  z-index: -1;
  font-weight: 700;
  font-size: 27.375rem;
  line-height: 35.5rem;
  text-transform: capitalize;
  color: rgba(0, 117, 255, 0.03);
`;
export const LoginPageStudyBackground = ({ left, top }: StudyProps) => {
  return (
    <StudyBackground left={left} top={top}>
      STUDY
    </StudyBackground>
  );
};
