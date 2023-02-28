import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StudyMainPage_Navigation = () => {
  return (
    <Navigation>
      <a>Главная</a>
      <a>Журнал</a>
      <a>Сообщения</a>
      <a>Публикация</a>
      <a>Настройки</a>
    </Navigation>
  );
};
