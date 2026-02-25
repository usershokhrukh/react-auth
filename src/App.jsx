import React from "react";
import Router from "./router/Router";
import Form from "./components/Form";
import TopSearch from "./components/TopSearch";
import { useParams } from "react-router-dom";
const App = () => {
  const {id} = useParams();
  return (
    <div>
      <Router/>
      
    </div>
  );
};

export default App;
