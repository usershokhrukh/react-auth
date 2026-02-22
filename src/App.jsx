import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import Form from "./components/Form";
import TopSearch from "./components/TopSearch";

const App = () => {
  const {id} = useParams();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="*" element={<h2>Not Found 404</h2>}/>
        <Route path="users/:id" element={<TopSearch/>}/>
      </Routes>
    </div>
  );
};

export default App;
