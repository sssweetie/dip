import React from "react";
import styled from "styled-components";

type LabelType = {
  htmlFor: string;
  label: string;
};

const InputLabel = styled.label`
  margin-bottom: 10px;
  color: #9b9b9b;
  justify-self: start;
`;

export const LoginInputLabel = ({ htmlFor, label }: LabelType) => {
  return <InputLabel htmlFor={htmlFor}>{label}</InputLabel>;
};
