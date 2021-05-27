import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #dadada;
  align-items: center;
  justify-content: center;
  padding: 6% 0;

  div:first-child {
    background-color: #fff;
    height: 100%; 
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 0px 14px -3px #000000;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div > input {
      border-width: 0 0 2px 0;
      border-color: #dadada;
      padding: 5px;
      width: 250px;
      text-align: center;
      font-size: 17px;
      margin: 10px 0 10px 0;
    }
    button {
      border: none;
      padding: 10px 40px;
      background-color: #fb9e2e;
      color: #fff;
    }
    button:hover {
      transform: scale(1.02);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
    button:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.24);
    }
  }
`;
