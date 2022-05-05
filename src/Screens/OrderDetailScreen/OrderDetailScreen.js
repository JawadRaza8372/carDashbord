import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./OrderDetailScreen.scss";
import { Player } from "video-react";
import { useLoadingWithRefreash } from "../../CustomHooks/LoadingData";
import Loader from "../../Components/Loader/Loader";

function OrderDetailScreen() {
  const { id } = useParams();
  const { setisLoading, isLoading } = useLoadingWithRefreash();

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
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="orderdeltscreen">
      <div className="ordernumber">
        <h1>Order Details</h1>
        <span>{id}</span>
      </div>

      {ClientName && (
        <p>
          <span>Client Name:</span>
          {ClientName ? ClientName : "Not Available"}
        </p>
      )}
      {ClientNumber && (
        <p>
          <span>Client Phone:</span>
          {ClientNumber ? ClientNumber : "Not Available"}
        </p>
      )}
      {ClientIdentityNumber && (
        <p>
          <span>Client CNIC:</span>
          {ClientIdentityNumber ? ClientIdentityNumber : "Not Available"}
        </p>
      )}
      {ClientEmail && (
        <p>
          <span>Client Email:</span>
          {ClientEmail ? ClientEmail : "Not Available"}
        </p>
      )}
      {ClientFrontIDcard && (
        <>
          <p>
            <span>Client Front side CNIC:</span>
          </p>
          <img src={`${ClientFrontIDcard}`} alt="Client Front side CNIC" />
        </>
      )}
      {ClientBackIDcard && (
        <>
          <p>
            <span>Client Back side CNIC:</span>
          </p>
          <img src={`${ClientBackIDcard}`} alt="Client Back side CNIC" />
        </>
      )}
      {CarName && (
        <p>
          <span>Car Name:</span>
          {CarName ? CarName : "Not Available"}
        </p>
      )}

      {CarModel && (
        <p>
          <span>Car Model:</span>
          {CarModel ? CarModel : "Not Available"}
        </p>
      )}
      {CarPirateNumber && (
        <p>
          <span>Car Pirate Number:</span>
          {CarPirateNumber ? CarPirateNumber : "Not Available"}
        </p>
      )}
      {CarCurrentFuel && (
        <p>
          <span>Car Current Fuel:</span>
          {CarCurrentFuel ? CarCurrentFuel : "Not Available"}
        </p>
      )}
      {CarCurrentKMS && (
        <p>
          <span>Car Current KMS:</span>
          {CarCurrentKMS ? CarCurrentKMS : "Not Available"}
        </p>
      )}
      {CarFrontSideImage && (
        <>
          <p>
            <span>Car Front Side Image:</span>
          </p>
          <img src={`${CarFrontSideImage}`} alt="Car Front Side " />
        </>
      )}
      {CarLeftSideImage && (
        <>
          <p>
            <span>Car Left Side Image:</span>
          </p>
          <img src={`${CarLeftSideImage}`} alt="Car Left Side " />
        </>
      )}
      {CarRightSideImage && (
        <>
          <p>
            <span>Car Right Side Image:</span>
          </p>
          <img src={`${CarRightSideImage}`} alt="Car Right Side " />
        </>
      )}

      {CarRightSideImage && (
        <>
          <p>
            <span>Car Right Side Image:</span>
          </p>
          <img src={`${CarRightSideImage}`} alt="Car Right Side " />
        </>
      )}
      {CarBackSideImage && (
        <>
          <p>
            <span>Car Back Side Image:</span>
          </p>
          <img src={`${CarBackSideImage}`} alt="Car Back Side " />
        </>
      )}
      {CarNumberPlateImage && (
        <>
          <p>
            <span>Car Number Plate Image:</span>
          </p>
          <img src={`${CarNumberPlateImage}`} alt="Car Number Plate " />
        </>
      )}
      {CarFrontLeftTypeImage && (
        <>
          <p>
            <span>Car Front Left Type Image:</span>
          </p>
          <img src={`${CarFrontLeftTypeImage}`} alt="Car Front Left Type " />
        </>
      )}
      {CarFrontRightTypeImage && (
        <>
          <p>
            <span>Car Front Right Type Image:</span>
          </p>
          <img src={`${CarFrontRightTypeImage}`} alt="Car Front Right Type" />
        </>
      )}
      {CarBackRightTypeImage && (
        <>
          <p>
            <span>Car Back Right Type Image:</span>
          </p>
          <img src={`${CarBackRightTypeImage}`} alt="Car Back Right Type" />
        </>
      )}
      {CarBackLeftTypeImage && (
        <>
          <p>
            <span>Car Back Left Type Image:</span>
          </p>
          <img src={`${CarBackLeftTypeImage}`} alt="Car Back Left Type" />
        </>
      )}
      {CarVideoClip && (
        <>
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
        </>
      )}

      {DeliveryTime ||
        (DeliveryDate && (
          <p>
            <span>Delivery :</span>
            {DeliveryTime} {DeliveryDate}
          </p>
        ))}
      {EstimatedDeliveryDateandTime && (
        <p>
          <span>Estimated Delivery Date and Time:</span>
          {EstimatedDeliveryDateandTime}
        </p>
      )}
      {Signature && (
        <>
          <p>
            <span>Signature:</span>
          </p>
          <img src={`${Signature}`} alt="Signature" />
        </>
      )}
      {EmployeeEmail && (
        <p>
          <span>Employe Email:</span>
          {EmployeeEmail ? EmployeeEmail : "Not Available"}
        </p>
      )}
      {EmployeeName && (
        <p>
          <span>Employe Name:</span>
          {EmployeeName ? EmployeeName : "Not Available"}
        </p>
      )}
      <p>
        <span>Completed:</span>
        {Arrival ? "True" : "False"}
      </p>
    </div>
  );
}

export default OrderDetailScreen;
