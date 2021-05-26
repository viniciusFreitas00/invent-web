import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./style";
import image from "../../assets/images/image.jpeg";

const Login = () => {
  const history = useHistory();

  const handleLoginSubmit = () => {
    history.push("/home");
  };

  return (
    <Container>
      <div>
        <img src={image} alt="company logo" />
        <div>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
        </div>
        <button onClick={handleLoginSubmit}>Login</button>
      </div>
    </Container>
  );
};

export default Login;
