import React from "react";

import { Container, Content } from "./style";
import DashBoardCard from "../../components/DashBoardCard";
import Header from "../../components/Header";
import { IoIosWalk, IoIosExit, IoIosPerson } from "react-icons/io";

const DashBoard = () => {
  return (
    <Content>
    <Header />
      <Container>
        <div>
          <DashBoardCard
            text="Entradas"
            background="#32cd32"
            amount={60}
            Icon={IoIosWalk}
          />
          <DashBoardCard
            text="Saida"
            background="#FF0000"
            amount={45}
            Icon={IoIosExit}
          />
          <DashBoardCard
            text="Agora"
            background="#0000FF"
            amount={15}
            Icon={IoIosPerson}
          />
        </div>
      </Container>
    </Content>
  );
};

export default DashBoard;
