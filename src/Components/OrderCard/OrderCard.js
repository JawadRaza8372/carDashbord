import React from "react";
import "./OrderCard.scss";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonsDiv from "../ButtonsDiv/ButtonsDiv";
function OrderCard({ name, carnumber, model, date, time, arrival, id }) {
  const navigate = useNavigate();
  return (
    <div className="ordrCard">
      <p>
        <span>Client Name:</span>
        {name}
      </p>
      <p>
        <span>Car Number:</span>
        {carnumber}
      </p>
      <p>
        <span>Car Model:</span>
        {model}
      </p>
      <p>
        <span>Date:</span>
        {time} {date}
      </p>
      <p>
        <span>Arrival:</span>
        {arrival ? "True" : "False"}
      </p>
      <ButtonsDiv morefunct={() => navigate(`/order/${id}`)} />
    </div>
  );
}

export default OrderCard;
