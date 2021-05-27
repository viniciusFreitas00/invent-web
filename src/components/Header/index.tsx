import React from "react";
import { Header } from "./style";
import image from "../../assets/images/image.jpeg";

const DashBoardCard = () => {
  return (
    <Header>
      <img src={image} alt="company logo" />
    </Header>
  );
};

export default DashBoardCard;
