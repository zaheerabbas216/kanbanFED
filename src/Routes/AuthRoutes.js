import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TestComponent from "../Pages/test";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;
