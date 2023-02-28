import React from "react";
import styled from "styled-components";
import ava from "../../assets/ava.jpg";
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  object-fit: cover;
  border-radius: 50%;
`;
export const StudyMainPage_Profile = () => {
  return (
    <Profile>
      <Avatar src={ava} />
      <p style={{ textAlign: "center" }}>
        Токарев Александр
        <br></br>
        <span
          style={{
            color: "#9B9B9B",
            fontSize: "12px",
            margin: "0",
          }}
        >
          Студент
        </span>
      </p>
    </Profile>
  );
};
