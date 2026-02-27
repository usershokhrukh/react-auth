import React, {useEffect, useState} from "react";
import {Routes, Route, useNavigate, Outlet} from "react-router-dom";
import Form from "../components/Form";
import TopSearch from "../components/TopSearch";
import Dashboard from "../components/Dashboard";
import Image from "../components/Image";
import ToDos from "../components/ToDos";
import Users from "../components/Users";
const Router = () => {
  const [token, setToken] = useState(localStorage.getItem("tokenDummy"));
  const [id, setId] = useState(localStorage.getItem("idDummy"));
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("idDummy"));
    const userId = 0;
    const users = JSON.parse(localStorage.getItem("usersDummy"));

    let access = false;
    users?.map((item) => {
      if (item?.id == id) {
        if (item?.accessToken == token) {
          access = true;
          return;
        }
      }
    });

    if (users || access) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [token]);

  setInterval(() => {
    setToken(localStorage.getItem("tokenDummy"));
  }, 5000);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="*" element={<h2>Not Found 404</h2>} />
        <Route path="users/:id" element={<TopSearch />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/image" element={<Image />} />
          <Route path="/dashboard/todos" element={<ToDos />} />
          <Route path="/dashboard/users" element={<Users/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
