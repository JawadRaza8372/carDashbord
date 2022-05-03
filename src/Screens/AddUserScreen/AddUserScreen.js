import React, { useState } from "react";
import "./AddUserScreen.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmploys } from "../../store/projectSlice";
function AddUserScreen() {
  const apiurl = "https://cardeliveryapplication.herokuapp.com";
  const dispatch = useDispatch();
  const [formSubmit, setformSubmit] = useState({
    Name: "",
    Email: "",
    Number: "",
    Address: "",
    IdentityNumbr: "",
    Password: "",
  });
  const adduserfunc = async (e) => {
    e.preventDefault();
    const rest = await axios.post(`${apiurl}/Employee/signup`, formSubmit);
    if (rest.data.msg) {
      alert(rest.data.msg);
      const resul = await axios.get(`${apiurl}/Employee/`);
      if (resul.data.length > 0) {
        dispatch(setEmploys({ employs: resul.data }));
      }
      setformSubmit({
        Name: "",
        Email: "",
        Number: "",
        Address: "",
        IdentityNumbr: "",
        Password: "",
      });
    }
  };
  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setformSubmit((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  return (
    <div className="adduserdiv">
      <form className="adduserform" onSubmit={adduserfunc}>
        <h1 className="formHeading"> Add User</h1>
        <input
          type={"text"}
          placeholder="Name"
          minLength={5}
          id="Name"
          value={formSubmit.Name}
          onChange={handleChange}
        />
        <input
          type={"email"}
          placeholder="Email"
          minLength={9}
          id="Email"
          value={formSubmit.Email}
          onChange={handleChange}
        />
        <input
          type={"number"}
          minLength={10}
          placeholder="CNIC"
          id="IdentityNumbr"
          value={formSubmit.IdentityNumbr}
          onChange={handleChange}
        />
        <input
          type={"number"}
          id="Number"
          minLength={12}
          placeholder="Phone Number"
          value={formSubmit.Number}
          onChange={handleChange}
        />
        <input
          type={"text"}
          placeholder="Address"
          id="Address"
          minLength={10}
          value={formSubmit.Address}
          onChange={handleChange}
        />
        <input
          type={"text"}
          placeholder="Password"
          id="Password"
          minLength={5}
          value={formSubmit.Password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AddUserScreen;
