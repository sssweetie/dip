import React from "react";
import styled from "styled-components";

type InputType = {
  id: string;
};
const InputBar = styled.input`
  border-radius: 10px;
  background-color: #f9f9fa;
  border: 0.2px solid rgba(0, 117, 255, 0.5);
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  &:focus {
    outline: none;
  }
  width: 100%;
  line-height: 2.625rem;
  padding: 0;
`;
export const LoginInput = ({ id }: InputType) => {
  return <InputBar id={id}></InputBar>;
};
