import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmploys, setOrders } from "./store/projectSlice";
import { setAuth } from "./store/authSlice";
function App() {
  const dispatch = useDispatch();
  const apiurl = "https://cardeliveryapplication.herokuapp.com";
  const fetchAlldata = async () => {
    setloading(!loading);
    const cat = localStorage.getItem("carAdminDashbord");
    console.log("checking", cat);
    if (cat) {
      dispatch(setAuth({ isAuth: "avalble" }));
    }
    const result = await axios.get(`${apiurl}/Order/AllOrders`);
    const resul = await axios.get(`${apiurl}/Employee/`);
    if (result.data.length > 0 && resul.data.length > 0) {
      console.log("found");
      dispatch(setEmploys({ employs: resul.data }));
      dispatch(setOrders({ orders: result.data }));
    }
    setloading(!loading);
  };
  const [loading, setloading] = useState(false);
  useEffect(() => {
    fetchAlldata();
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;