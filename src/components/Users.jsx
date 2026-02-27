import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table";
const Users = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    function getResponse(url) {
      const responseData = getRequest(url)
        .then((response) => {
          renderUsers(response?.data?.users);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }

    function renderUsers(response) {
      localStorage.setItem("usersProfileDummy", JSON.stringify(response));
      setTimeout(() => {
        setData(response);
        setLoading(false);
      }, 429);
    }

    useEffect(() => {
      if (localStorage.getItem("usersProfileDummy")) {
        const users = JSON.parse(localStorage.getItem("usersProfileDummy"));
        renderUsers(users);
      } else {
        const api = "https://dummyjson.com/users";
        getResponse(api);
      }
    }, []);

    return (
      <div className="todos__main">
        <h2>Users:</h2>
        <div className="todos__wr">
        {loading ? "Loading..." : ""}
          <Table users={data} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Users;
