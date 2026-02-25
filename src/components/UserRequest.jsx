import React from "react";
import {Logger} from "sass";

const UserRequest = (data) => {
  const {email, firstName, lastName, username, gender, image, id} = data?.data;  
  localStorage.setItem("idDummy", id);
  if (localStorage.getItem("usersDummy")) {
    const userObj = JSON.parse(localStorage.getItem("usersDummy"));
    let same = false;
    userObj.map((item) => {
      if (item.accessToken == data?.data?.accessToken) {
        same = true;
        return;
      }
    });
    if (!same) {
      userObj.push(data?.data);
    }
    localStorage.setItem("usersDummy", JSON.stringify(userObj));
  } else {
    if (data?.data.image) {
      const users = [];
      users.push(data?.data);
      localStorage.setItem("usersDummy", JSON.stringify(users));
    }
  }
  if (image) {
    return (
      <div className="users">
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
  } else {
    return <></>;
  }
};

export default UserRequest;
