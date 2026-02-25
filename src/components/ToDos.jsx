import React, {useEffect, useState} from "react";
import axios from "axios";
import RenderTodos from "./RenderTodos";
const ToDos = () => {
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
          renderTodos(response?.data?.todos);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }

    function renderTodos(response) {
      localStorage.setItem("todosDummy", JSON.stringify(response));
      setTimeout(() => {
        setData(response);
        setLoading(false);
      }, 429);
    }

    useEffect(() => {
      if (localStorage.getItem("todosDummy")) {
        const todos = JSON.parse(localStorage.getItem("todosDummy"));
        renderTodos(todos);
      } else {
        const api = "https://dummyjson.com/todos";
        getResponse(api);
      }
    }, []);

    return (
      <div>
        <h2>Todos:</h2>
        <div className="todos__wr">
        {loading ? "Loading..." : ""}
          <RenderTodos todos={data} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default ToDos;
