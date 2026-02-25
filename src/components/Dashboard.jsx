import React, {useState} from "react";
import {data, NavLink, Outlet} from "react-router-dom";
import UserRequest from "./UserRequest";
import RenderUsers from "./RenderUsers";
const Dashboard = () => {
  const id = localStorage.getItem("idDummy");
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <ul className="dashboard__list">
          <li>
            <NavLink
              className={"dashboard__link"}
              to={"/dashboard/todos"}
              content="salom"
            >
              ToDos
            </NavLink>
          </li>
          <li>
            <NavLink className={"dashboard__link"} to={"/dashboard/image"}>
              Custom Image
            </NavLink>
          </li>
          <li>
            <NavLink style={{
              backgroundColor: "red",
              border: "none",
              color: "white",
              padding: "5px"
            }} className={"dashboard__link"} to={"/"}>
              log Out
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dashboard__bottom">
        <h1>Entered as:</h1>
        <RenderUsers id={id} />
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
