import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Gotham;
  }
  body, #root {
    background-color: #FAFBFF;
    min-height: 100vh;
  }
  button {
    cursor: pointer;
  }
`;