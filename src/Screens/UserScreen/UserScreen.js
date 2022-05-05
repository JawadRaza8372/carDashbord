import React from "react";
import { useSelector } from "react-redux";
import EmployeCard from "../../Components/EmployeCard/EmployeCard";
import "./UserScreen.scss";

function UserScreen() {
  const { employs } = useSelector((state) => state.project);

  return (
    <div className="usercont">
      {employs.map((dat) => {
        if (dat.Name && dat.Email) {
          return (
            <EmployeCard
              Name={dat.Name}
              Email={dat.Email}
              pNumber={dat.Number}
              IdentityNumber={dat.IdentityNumbr}
              Address={dat.Address}
              id={dat._id}
              key={dat._id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default UserScreen;
