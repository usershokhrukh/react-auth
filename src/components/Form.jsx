import React, {useState} from "react";
import {useAsyncError, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import UserRequest from "./UserRequest";

const Form = () => {
  async function postRequest(url, obj) {
    const request = await axios.post(url, obj);
    return request;
  }
  try {
    const [eye, setEye] = useState(true);
    const [username, setUsername] = useState("emilys");
    const [password, setPassword] = useState("emilyspass");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [routeId, setRouteId] = useState("");
    let {id} = useParams();
    const handleRequest = (url, obj) => {
      const response = postRequest(url, obj)
        .then((response) => getResponse(response?.data, response?.status))
        .catch((error) => {
          setLoading(false);
          toast.error("Error handled");
          throw new Error(error);
        });
    };

    const getResponse = (response, status) => {      
      setTimeout(() => {
        setLoading(false);
      }, 100);
      if (status === 200) {
        setUsername("");
        setPassword("");
        toast.success("success!", {
          autoClose: 700,
        });
        const safeResponse = {
          image: response?.image,
          username: response?.username,
          lastName: response?.lastName,
          id: response?.id,
          gender: response?.gender,
          firstName: response?.firstName,
          email: response?.email,
          accessToken: response?.accessToken,
        }    
        localStorage.setItem("tokenDummy", safeResponse?.accessToken);    
        setData(safeResponse);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    };

    const handleUsername = (e) => {
      const value = e.target.value.trim();
      setUsername(value);
    };
    const handlePassword = (e) => {
      const value = e.target.value.trim();
      setPassword(value);
    };
    const loadingSvg = <span className="loader"></span>;
    let toastClosed = true;
    const onSubmit = (e) => {
      e.preventDefault();
      if (!username || !password) {
        if (toastClosed) {
          toastClosed = false;
          toast.error("username or password not given!", {
            autoClose: 1000,
          });
          setTimeout(() => {
            toastClosed = true;
          }, 1700);
        }
      } else {
        if (localStorage.getItem("usersDummy")) {
          const users = JSON.parse(localStorage.getItem("usersDummy"));
          let found = false;
          users?.map((item) => {
            if (item?.id) {
              if (item?.username === username) {
                setLoading(true);
                getResponse(item, 200);
                found = true;
                return;
              }
            }
          });
          if (!found) {
            const url = "https://dummyjson.com/auth/login";
            const obj = {
              username,
              password,
              expiresInMins: 30,
            };
            setLoading(true);
            handleRequest(url, obj);
          }
        } else {
          const url = "https://dummyjson.com/auth/login";
          const obj = {
            username,
            password,
            expiresInMins: 30,
          };
          setLoading(true);
          handleRequest(url, obj);
        }
      }
    };
    const handleEye = () => {
      setEye(!eye);
    };
    const handleID = () => {
      if (routeId) navigate(`/users/${routeId}`);
    };

    return (
      <div className="main">
        <div className="main__form-i-top">
          <input
            onChange={(e) => setRouteId(e.target.value.trim())}
            className="main__form-i main__form-top-input"
            placeholder="Search auth users in a route"
            type="search"
          />
          <button onClick={handleID} className="main__form-top-button">
            Search
          </button>
        </div>

        <form onSubmit={onSubmit} className="main__form">
          <h2 className="main__title">Authentication</h2>
          <div className="main__form-b">
            <label className="main__form-l" htmlFor="username">
              Username
            </label>
            <input
              onChange={handleUsername}
              value={username}
              id="username"
              className="main__form-i"
              type="text"
            />
          </div>
          <div className="main__form-b">
            <label className="main__form-l" htmlFor="password">
              Password
              <span onClick={handleEye}>
                {eye ? (
                  <svg
                    className="main__form-eye-close"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457ZM14.7577 16.1718L13.2937 14.7078C12.902 14.8952 12.4634 15.0002 12.0003 15.0002C10.3434 15.0002 9.00026 13.657 9.00026 12.0002C9.00026 11.537 9.10522 11.0984 9.29263 10.7067L7.82866 9.24277C7.30514 10.0332 7.00026 10.9811 7.00026 12.0002C7.00026 14.7616 9.23884 17.0002 12.0003 17.0002C13.0193 17.0002 13.9672 16.6953 14.7577 16.1718ZM7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925L16.947 12.7327C16.9821 12.4936 17.0003 12.249 17.0003 12.0002C17.0003 9.23873 14.7617 7.00016 12.0003 7.00016C11.7514 7.00016 11.5068 7.01833 11.2677 7.05343L7.97446 3.76015Z"></path>
                  </svg>
                ) : (
                  <svg
                    className="main__form-eye-open"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                  </svg>
                )}
              </span>
            </label>
            <input
              onChange={handlePassword}
              value={password}
              id="password"
              className="main__form-i"
              type={eye ? "password" : "text"}
            />
            <button className="main__form-button" type="submit">
              {loading ? loadingSvg : "Send"}
            </button>
          </div>
        </form>
        <UserRequest data={data} />
      </div>
    );
  } catch (error) {
    toast.error(error, {
      autoClose: false,
    });
    throw new Error(error);
  }
};

export default Form;
