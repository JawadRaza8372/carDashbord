import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DashbordScreen from "../Screens/DashbordScreen/DashbordScreen";
import AuthScreen from "../Screens/AuthScreen/AuthScreen";
import UserScreen from "../Screens/UserScreen/UserScreen";
const user = "null";
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
        path="/dashord"
        element={
          <ProtectedRoute>
            <DashbordScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <UserScreen />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1 style={{ color: "green" }}>error</h1>} />
    </Routes>
  );
}
let ProtectedRoute = ({ children }) => {
  return user ? children : <Navigate to="/" />;
};
let AuthRoute = ({ children }) => {
  return user ? <Navigate to="/dashord" /> : children;
};
export default Routess;
