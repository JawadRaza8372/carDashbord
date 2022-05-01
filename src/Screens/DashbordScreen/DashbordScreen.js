import React from "react";
import OverViewCard from "../../Components/OverViewCard/OverViewCard";
import "./DasbordScreen.scss";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import CustomerComments from "../../Components/CustomerComent/CustomerComments";
function DashbordScreen() {
  return (
    <section className="dashbordscreen">
      <div className="overviewcards">
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
      </div>

      <CustomerReview />
      <CustomerComments />
      <br />
      <br />
      <br />
    </section>
  );
}

export default DashbordScreen;
