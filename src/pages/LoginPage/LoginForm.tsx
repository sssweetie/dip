import React from "react";
import styled from "styled-components";
import { LoginInput } from "./LoginInput";
import { LoginInputLabel } from "./LoginInputLabel";
import { LoginSubmitButton } from "./LoginSubmitButton";
import { LoginCheckboxSubmit } from "./LoginCheckboxSubmit";
interface Props {
  marginBottom: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 40px 30px 25px 30px;
  max-width: 18.75rem;
`;

const SubmitDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const InputDataWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom};
`;

const SubmitConfidentialLabel = styled.label`
  width: 86%;
  font-size: 0.625rem;
`;
export const LoginForm = () => {
  return (
    <Form>
      <p style={{ marginBottom: "30px" }}>Авторизация</p>
      <InputDataWrapper marginBottom="20px">
        <LoginInputLabel htmlFor="email" label="E-mail"></LoginInputLabel>
        <LoginInput id="email"></LoginInput>
      </InputDataWrapper>
      <InputDataWrapper marginBottom="30px">
        <LoginInputLabel htmlFor="password" label="Password"></LoginInputLabel>
        <LoginInput id="password"></LoginInput>
      </InputDataWrapper>
      <LoginSubmitButton>Войти</LoginSubmitButton>
      <SubmitDataWrapper>
        <LoginCheckboxSubmit type="checkbox" />
        <SubmitConfidentialLabel>
          Я подтверждаю согласие на обработку персональных данных в соответствии
          с условиями Политики конфиденциальности , ознакомился и согласен с
          условиями Пользовательского соглашения
        </SubmitConfidentialLabel>
      </SubmitDataWrapper>
    </Form>
  );
};
