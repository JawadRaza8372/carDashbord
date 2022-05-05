import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
import { setEmploys, setOrders } from "../store/projectSlice";
export const useLoadingWithRefreash = () => {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const checklogin = async () => {
    console.log("run");
    try {
      const cat = localStorage.getItem("carAdminDashbord");
      if (cat) {
        dispatch(setAuth({ isAuth: "avalble" }));
      }
      const result = await axios.get(`/Order/AllOrders`);
      const resul = await axios.get(`/Employee/`);
      if (result.data.length > 0 && resul.data.length > 0) {
        dispatch(setEmploys({ employs: resul.data }));
        dispatch(setOrders({ orders: result.data }));
      }

      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  // useEffect(() => {
  //   checklogin();
  // }, []);
  useEffect(() => {
    if (isLoading) {
      checklogin();
    }
  }, [isLoading]);
  return { isLoading, setisLoading };
};
