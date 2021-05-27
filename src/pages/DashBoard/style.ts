import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);

  & > div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 40px 30px;
  }
`;
export const Content = styled.div`
  height: 100vh;
  background-color: #dadada;

`;
