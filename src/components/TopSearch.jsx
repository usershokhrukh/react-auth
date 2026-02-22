import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import RenderUsers from "./RenderUsers";
const TopSearch = () => {
  const {id} = useParams();
  const [routeId, setRouteId] = useState("");
  const navigate = useNavigate();
  const [text, setText] = useState(true);
  const [found, setFound] = useState("finding");
  const handleID = () => {
    if (routeId) navigate(`/users/${routeId}`);
    setRouteId("");
    setText(true);
  };
    setTimeout(() => {
      const docFound = document.querySelector(".found-users");
      setFound(docFound);
      if (!found) {
        setText(false);
      } else {
        setText(true);
      }
    }, 1000);

  const handleRoute = () => {
    navigate("/");
  };
  return (
    <div className="main">
      <div className="main__form-i-top">
        <input
          onChange={(e) => setRouteId(e.target.value.trim())}
          className="main__form-i main__form-top-input"
          placeholder="Search auth users in a route"
          type="search"
          value={routeId}
        />
        <button onClick={handleID} className="main__form-top-button">
          Search
        </button>
      </div>
      <button onClick={handleRoute} className="main__form-button">
        Back
      </button>
      {text ? "" : <h3 style={{color: "red"}}>Couldn't found</h3>}
      <RenderUsers id={id} />
    </div>
  );
};

export default TopSearch;
