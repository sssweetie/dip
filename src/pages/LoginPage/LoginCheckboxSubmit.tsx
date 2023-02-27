import React from "react";
import styled from "styled-components";

interface LoginCheckbox {
  type: string;
}

const InputCheckBox = styled.input`
  appearance: none;
  background: #fcfcfc;
  border: 0.5px solid rgba(0, 117, 255, 0.5);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  margin-right: 10px;
  padding: 15px;
  height: 0px;
`;

export const LoginCheckboxSubmit = ({ type }: LoginCheckbox) => {
  return <InputCheckBox type={type}></InputCheckBox>;
};
