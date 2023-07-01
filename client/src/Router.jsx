import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App.jsx";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <App />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default Router;
