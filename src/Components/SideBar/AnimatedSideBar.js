import React, { useState } from "react";
import "./AnimatedSideBar.scss";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import MenuIcon from "@material-ui/icons/Menu";
import GridViewIcon from "@material-ui/icons/GridOn";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import MenuBook from "@material-ui/icons/MenuBook";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import LinkButton from "./LinkButton";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";
function AnimatedSideBar({ children }) {
  const [expand, setexpand] = useState(false);
  const dispatch = useDispatch();
  const navArry = [
    { title: "Employes", icon: <PersonIcon id="navIcon" />, link: "/userList" },
    { title: "Orders", icon: <MenuBook id="navIcon" />, link: "/orders" },
    {
      title: "Add Employe",
      icon: <PersonAddIcon id="navIcon" />,
      link: "/addusers",
    },
  ];
  return (
    <section className="mainContainer">
      <div className={expand ? "sidebar active" : "sidebar"}>
        <div className="logoContent">
          <div className="logo">
            <DirectionsCar id="logoicon" />
            <div className="logoName">Admin Panel</div>
          </div>
          {expand ? (
            <CloseIcon id="menuIcon" onClick={() => setexpand(false)} />
          ) : (
            <MenuIcon id="menuIcon" onClick={() => setexpand(true)} />
          )}
        </div>
        <ul className="navList">
          {navArry.map((dat, index) => (
            <li key={index}>
              <LinkButton title={dat.title} link={dat.link}>
                {dat.icon}
              </LinkButton>
            </li>
          ))}
        </ul>
        <div className="profileContent">
          <div
            onClick={() => {
              localStorage.removeItem("carAdminDashbord");
              dispatch(setAuth({ isAuth: null }));
            }}
            className="profile"
          >
            <LogoutIcon id="logoutbutton" />

            <span className="username">Logout</span>
          </div>
        </div>
      </div>
      <div className="mainContentContainer">{children}</div>
    </section>
  );
}

export default AnimatedSideBar;
