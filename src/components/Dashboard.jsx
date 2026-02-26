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
            <NavLink
              className={"dashboard__link"}
              to={"/dashboard/todos"}
              content="salom"
            >
          <li className="dashboard__li">
              ToDos
          </li>
            </NavLink>
            <NavLink className={"dashboard__link"} to={"/dashboard/image"}>
          <li className="dashboard__li">
              Custom Image
          </li>
            </NavLink>
          <li className="dashboard__li-exit dashboard__li">
            <NavLink
              style={{
                backgroundColor: "red",
                border: "none",
                color: "white",
                padding: "5px",
              }}
              className={"dashboard__link"}
              to={"/"}
            >
              log Out
            </NavLink>
          </li>
        </ul>
      </div>
      <main>
        <div className="dashboard__bottom">
          <h1>Entered as:</h1>
          <RenderUsers id={id} />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
