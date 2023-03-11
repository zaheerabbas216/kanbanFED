import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const StackRoutes = () => {
  return (
    <>
      {/* <h4>Stack Routes</h4> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default StackRoutes;
