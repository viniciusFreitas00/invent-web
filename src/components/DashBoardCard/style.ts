import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.color};
  padding: 20px 40px;
  height: 100px;
  width: 300px;
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.38);

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  span:first-child {
    color: #fff;
    font-size: 18px;
  }
  div > span:first-child {
    color: #fff;
    font-size: 30px;
    margin-right: 5px;
  }
  div > span:last-child {
    color: #fff;
    font-size: 18px;
  }
`;
