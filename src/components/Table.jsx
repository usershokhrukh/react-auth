import React from "react";
import {useLocation} from "react-router-dom";

const Table = ({todos, users}) => {
  const location = useLocation()?.pathname;
  if (location === "/dashboard/todos") {
    return (
      <div className="table">
        <table className="table__main">
          <thead className="table__head">
            <tr className="table__row table__animate">
              <td className="table__data">id</td>
              <td className="table__data">Todo</td>
              <td className="table__data">completed</td>
            </tr>
          </thead>
          <tbody className="table__body">
            {todos?.map((item, index) => (
              <tr key={item?.todo} className="table__row table__animate">
                <td className="table__data">{item?.id}</td>
                <td className="table__data">{item?.todo}</td>
                <td className="table__data">
                  {item?.completed ? (
                    <svg
                      className="table__svg table__corr"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="table__svg table__no"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (location === "/dashboard/users") {
    return (
      <div className="table">
        <table className="table__main">
          <thead className="table__head">
            <tr className="table__row table__animate">
              <td className="table__data">id</td>
              <td className="table__data">Image</td>
              <td className="table__data">Username</td>
              <td className="table__data">email</td>
              <td className="table__data">Phone</td>
              <td className="table__data">age</td>
              <td className="table__data">role</td>
              <td className="table__data">action</td>
            </tr>
          </thead>
          <tbody className="table__body">
            {users?.map((item, index) => (
              <tr key={users?.username} className="table__row table__animate">
                <td className="table__data">{item?.id}</td>
                <td className="table__data">
                  <img width={50} height={50} src={item?.image} alt="" />
                </td>
                <td className="table__data">{item?.username}</td>
                <td className="table__data">{item?.email}</td>
                <td className="table__data">{item?.phone}</td>
                <td className="table__data">{item?.age}</td>
                <td className="table__data">{item?.role}</td>
                <td className="table__data table__acts-data">
                  <button className="table__acts">
                    <svg
                      className="table__acts-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z"></path>
                    </svg>
                  </button>
                  <button className="table__acts">
                    <svg
                      className="table__acts-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H8V9H6V7ZM8 11H6V13H8V11ZM6 15H8V17H6V15ZM18 7H10V9H18V7ZM10 15H18V17H10V15ZM18 11H10V13H18V11Z"></path>
                    </svg>
                  </button>
                  <button className="table__acts">
                    <svg
                    className="table__acts-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
