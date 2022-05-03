import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./OrderDetailScreen.scss";
import { Player } from "video-react";

function OrderDetailScreen() {
  const { id } = useParams();
  const { orders } = useSelector((state) => state.project);
  const data = orders.filter((dat) => dat._id === id);
  const {
    _id,
    ClientName,
    ClientNumber,
    ClientIdentityNumber,
    ClientEmail,
    ClientFrontIDcard,
    ClientBackIDcard,
    CarName,
    CarModel,
    CarPirateNumber,
    CarCurrentFuel,
    CarCurrentKMS,
    CarFrontSideImage,
    CarLeftSideImage,
    CarRightSideImage,
    CarBackSideImage,
    CarNumberPlateImage,
    CarFrontLeftTypeImage,
    CarFrontRightTypeImage,
    CarBackRightTypeImage,
    CarBackLeftTypeImage,
    CarVideoClip,
    DeliveryTime,
    DeliveryDate,
    EstimatedDeliveryDateandTime,
    Signature,
    EmployeeEmail,
    EmployeeName,
    Arrival,
  } = data[0];
  return (
    <div className="orderdeltscreen">
      <div className="ordernumber">
        <h1>Order Id</h1>
        <h2>{id}</h2>
      </div>

      <p>
        <span>Client Name:</span>
        {ClientName ? ClientName : "Not Available"}
      </p>
      <p>
        <span>Client Phone:</span>
        {ClientNumber ? ClientNumber : "Not Available"}
      </p>
      <p>
        <span>Client CNIC:</span>
        {ClientIdentityNumber ? ClientIdentityNumber : "Not Available"}
      </p>
      <p>
        <span>Client Email:</span>
        {ClientEmail ? ClientEmail : "Not Available"}
      </p>
      <p>
        <span>Client Front side CNIC:</span>
      </p>
      <img src={`${ClientFrontIDcard}`} alt="Client Front side CNIC" />
      <p>
        <span>Client Back side CNIC:</span>
      </p>
      <img src={`${ClientBackIDcard}`} alt="Client Back side CNIC" />

      <p>
        <span>Car Name:</span>
        {CarName ? CarName : "Not Available"}
      </p>
      <p>
        <span>Car Model:</span>
        {CarModel ? CarModel : "Not Available"}
      </p>
      <p>
        <span>Car Pirate Number:</span>
        {CarPirateNumber ? CarPirateNumber : "Not Available"}
      </p>
      <p>
        <span>Car Current Fuel:</span>
        {CarCurrentFuel ? CarCurrentFuel : "Not Available"}
      </p>
      <p>
        <span>Car Current KMS:</span>
        {CarCurrentKMS ? CarCurrentKMS : "Not Available"}
      </p>
      <p>
        <span>Car Front Side Image:</span>
      </p>
      <img src={`${CarFrontSideImage}`} alt="Car Front Side Image" />
      <p>
        <span>Car Left Side Image:</span>
      </p>
      <img src={`${CarLeftSideImage}`} alt="Car Left Side Image" />

      <p>
        <span>Car Right Side Image:</span>
      </p>
      <img src={`${CarRightSideImage}`} alt="Car Right Side Image" />

      <p>
        <span>Car Back Side Image:</span>
      </p>
      <img src={`${CarBackSideImage}`} alt="Car Back Side Image" />

      <p>
        <span>Car Number Plate Image:</span>
      </p>
      <img src={`${CarNumberPlateImage}`} alt="Car Number Plate Image" />

      <p>
        <span>Car Front Left Type Image:</span>
      </p>
      <img src={`${CarFrontLeftTypeImage}`} alt="Car Front Left Type Image" />

      <p>
        <span>Car Front Right Type Image:</span>
      </p>
      <img src={`${CarFrontRightTypeImage}`} alt="Car Front Right Type Image" />

      <p>
        <span>Car Back Right Type Image:</span>
      </p>
      <img src={`${CarBackRightTypeImage}`} alt="Car Back Right Type Image" />

      <p>
        <span>Car Back Left Type Image:</span>
      </p>
      <img src={`${CarBackLeftTypeImage}`} alt="Car Back Left Type Image" />

      <p>
        <span>Car Video Clip:</span>
      </p>
      <div className="playvide">
        <Player
          playsInline
          poster={`${CarFrontSideImage}`}
          src={`${CarVideoClip}`}
        />
      </div>

      <p>
        <span>Delivery :</span>
        {DeliveryTime} {DeliveryDate}
      </p>
      <p>
        <span>Estimated Delivery Date and Time:</span>
        {EstimatedDeliveryDateandTime}
      </p>
      <p>
        <span>Signature:</span>
      </p>
      <img src={`${Signature}`} alt="Signature" />

      <p>
        <span>Employe Email:</span>
        {EmployeeEmail ? EmployeeEmail : "Not Available"}
      </p>
      <p>
        <span>Employe Name:</span>
        {EmployeeName ? EmployeeName : "Not Available"}
      </p>
      <p>
        <span>Completed:</span>
        {Arrival ? "True" : "False"}
      </p>
    </div>
  );
}

export default OrderDetailScreen;