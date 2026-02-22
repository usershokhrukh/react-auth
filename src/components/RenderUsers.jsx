import React, {useState} from "react";
import {toast} from "react-toastify";
// import Find from "./Find";

const RenderUsers = (id) => {
  if (localStorage.getItem("usersDummy")) {
    const users = JSON.parse(localStorage.getItem("usersDummy"));
    return users?.map((item) => {
      if (item?.id) {
        if (item?.id == id?.id) {
          const {email, firstName, lastName, username, gender, image} = item;
          return (
            <div key={username} className="users found-users">
              <p className="users__username">{username}</p>
              <p className="users__username">{email}</p>
              <div className="users__top">
                <img
                  className="users__img"
                  width={"100px"}
                  height={"100px"}
                  src={image}
                  alt="photo profile"
                />
                <div className="users__right">
                  <p className="users__firstName">{firstName}</p>
                  <p className="users__secondName">{lastName}</p>
                </div>
              </div>
              <p className="users__gender">{gender}</p>
            </div>
          );
        }
      }
    });
  } else if (!localStorage.getItem("usersDummy")) {
    return (
      <h1
        style={{
          color: "red",
        }}
      >
        Auth users aren't exist in Locale!
      </h1>
    );
  }
};

export default RenderUsers;
