import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/:category?" component={NewsPage}/>
    </Routes>
  )
};

export default App;