import React from "react";
import styled from "styled-components";
import { StudyMainPage_Exit } from "./StudyMainPage_Exit";
import { StudyMainPage_Link } from "./StudyMainPage_Link";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StudyMainPage_Navigation = () => {
  return (
    <Navigation>
      <StudyMainPage_Link>Главная</StudyMainPage_Link>
      <StudyMainPage_Link>Журнал</StudyMainPage_Link>
      <StudyMainPage_Link>Сообщения</StudyMainPage_Link>
      <StudyMainPage_Link>Публикация</StudyMainPage_Link>
      <StudyMainPage_Link>Настройки</StudyMainPage_Link>
      <StudyMainPage_Exit></StudyMainPage_Exit>
    </Navigation>
  );
};
