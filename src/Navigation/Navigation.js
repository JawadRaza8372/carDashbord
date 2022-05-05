import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Routess from "./Routess";
import AnimatedSideBar from "../Components/SideBar/AnimatedSideBar";
import { useLoadingWithRefreash } from "../CustomHooks/LoadingData";
import Loader from "../Components/Loader/Loader";
function Navigation() {
  const location = useLocation()?.pathname;
  const { isLoading } = useLoadingWithRefreash();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {location !== "/" ? (
        <AnimatedSideBar>
          <Routess />
        </AnimatedSideBar>
      ) : (
        <Routess />
      )}
    </>
  );
}

export default Navigation;
