import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthScreen from "../Screens/AuthScreen/AuthScreen";
import UserScreen from "../Screens/UserScreen/UserScreen";
import AddUserScreen from "../Screens/AddUserScreen/AddUserScreen";
import OrderScreen from "../Screens/OrderScreen/OrderScreen";
import OrderDetailScreen from "../Screens/OrderDetailScreen/OrderDetailScreen";
import { useSelector } from "react-redux";

function Routess() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <AuthScreen />
          </AuthRoute>
        }
      />

      <Route
        path="/userList"
        element={
          <ProtectedRoute>
            <UserScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addusers"
        element={
          <ProtectedRoute>
            <AddUserScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrderScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderDetailScreen />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1 style={{ color: "green" }}>error</h1>} />
    </Routes>
  );
}
let ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? children : <Navigate to="/" />;
};
let AuthRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? <Navigate to="/userList" /> : children;
};
export default Routess;