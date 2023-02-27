import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  color: white;
  background-color: #0075ff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  border: 0;
  padding: 0;
  width: 100%;
  height: 3rem;
  margin-bottom: 20px;
  cursor: pointer;
  &:active {
    background-color: #1e70cd;
  }
`;

export const LoginSubmitButton = ({ children }: any) => {
  return (
    <SubmitButton onClick={(e) => e.preventDefault()}>{children}</SubmitButton>
  );
};
