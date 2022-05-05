import React from "react";
import "./OrderCard.scss";
import { useNavigate } from "react-router-dom";
import ButtonsDiv from "../ButtonsDiv/ButtonsDiv";
import axios from "axios";
import { useLoadingWithRefreash } from "../../CustomHooks/LoadingData";
import { apiurl } from "../../App";

function OrderCard({ name, carnumber, model, date, time, arrival, id }) {
  const navigate = useNavigate();
  const { setisLoading } = useLoadingWithRefreash();

  const orderdeltfunc = async () => {
    await axios.post(`${apiurl}/Order/delete`, { _id: id });
    setisLoading(true);
  };
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
      <ButtonsDiv
        morefunct={() => navigate(`/order/${id}`)}
        deltFun={orderdeltfunc}
      />
    </div>
  );
}

export default OrderCard;
