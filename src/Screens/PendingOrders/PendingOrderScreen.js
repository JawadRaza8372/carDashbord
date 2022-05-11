import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "../../Components/OrderCard/OrderCard";
import DataUnavl from "../Data Unavilble/DataUnavl";
import "./PedingOrder.scss";

function PendingOrderScreen() {
  const { orders } = useSelector((state) => state.project);
  const filteredlist = orders && orders.filter((dat) => dat.Arrival === false);
  console.log("show pending", filteredlist);
  return (
    <>
      {filteredlist.length > 0 ? (
        <div className="cardContanier">
          {filteredlist.map((dat) => (
            <OrderCard
              name={dat.ClientName}
              carnumber={dat.CarPirateNumber}
              model={dat.CarName + " " + dat.CarModel}
              date={
                dat.DeliveryDate
                  ? dat.DeliveryDate
                  : dat.EstimatedDeliveryDateandTime
              }
              time={dat.DeliveryTime ? dat.DeliveryTime : ""}
              arrival={dat.Arrival}
              id={dat._id}
              key={dat._id}
            />
          ))}
        </div>
      ) : (
        <DataUnavl />
      )}
    </>
  );
}

export default PendingOrderScreen;