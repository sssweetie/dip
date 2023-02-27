import React from "react";
import styled from "styled-components";

const InputBar = styled.input`
  border-radius: 10px;
  background-color: #f9f9fa;
  border: 0.2px solid rgba(0, 117, 255, 0.5);
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  &:focus {
    outline: none;
  }
  width: 83%;
  line-height: 2.625rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 30px 25px 30px 40px;
  max-width: 22.5rem;
`;
export const LoginForm = () => {
  return (
    <Form>
      <p>Авторизация</p>
      <label>E-mail</label>
      <InputBar></InputBar>
      <label>Password</label>
      <InputBar />
      <button>Войти</button>
      <input />
      <label>
        Я подтверждаю согласие на обработку персональных данных в соответствии с
        условиями Политики конфиденциальности , ознакомился и согласен с
        условиями Пользовательского соглашения
      </label>
    </Form>
  );
};
