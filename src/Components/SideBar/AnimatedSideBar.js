import React, { useState } from "react";
import "./AnimatedSideBar.scss";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import MenuIcon from "@material-ui/icons/Menu";
import GridViewIcon from "@material-ui/icons/GridOn";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import PersonIcon from "@material-ui/icons/Person";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import LinkButton from "./LinkButton";
function AnimatedSideBar({ children }) {
  const [expand, setexpand] = useState(false);
  const navArry = [
    { title: "Dashboard", icon: <HomeIcon id="navIcon" />, link: "/dashord" },
    { title: "Users", icon: <PersonIcon id="navIcon" />, link: "/users" },
  ];
  return (
    <section className="mainContainer">
      <div className={expand ? "sidebar active" : "sidebar"}>
        <div className="logoContent">
          <div className="logo">
            <AcUnitIcon id="logoicon" />
            <div className="logoName">Jawad Raza</div>
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
          <div className="profile">
            <div className="profileDetails">
              <img src="https://picsum.photos/200/300" alt="something" />
              <div className="username">Name</div>
            </div>
            <LogoutIcon id="logoutbutton" />
          </div>
        </div>
      </div>
      <div className="mainContentContainer">{children}</div>
    </section>
  );
}

export default AnimatedSideBar;
