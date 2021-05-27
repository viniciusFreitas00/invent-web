import React from "react";
import { Card } from "./style";
import { IconType } from "react-icons/lib";

interface DashBoardProps {
  text: string;
  amount: number;
  background: string;
  Icon: IconType;
}

const DashBoardCard = ({ text, Icon, amount, background }: DashBoardProps) => {
  return (
    <Card color={background}>
      <Icon color="#fff" size={60} />
      <div>
        <span>{text}</span>
        <div>
          <span>{amount}</span>
          {amount > 1 ? <span>Pessoas</span> : <span>Pessoa</span>}
        </div>
      </div>
    </Card>
  );
};

export default DashBoardCard;
