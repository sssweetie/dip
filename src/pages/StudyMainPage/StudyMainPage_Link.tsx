import React from "react";
import styled from "styled-components";

const Link = styled.a`
  list-style-type: none;
  text-decoration: none;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
export const StudyMainPage_Link = ({ children }: any) => {
  return <Link>{children}</Link>;
};
