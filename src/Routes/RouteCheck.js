import React, { useEffect, useState } from "react";
import AuthRoutes from "./AuthRoutes";
import StackRoutes from "./StackRoutes";
import { useSelector } from "react-redux";

const RouteCheck = () => {
  const { isAUTH, user } = useSelector((state) => state.kanban);
  console.log("🚀 ~ file: RouteCheck.js:8 ~ RouteCheck ~ isAUTH:", isAUTH);
  console.log("🚀 ~ file: RouteCheck.js:8 ~ RouteCheck ~ user:", user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>{isAUTH ? <>{<StackRoutes />}</> : <>{<AuthRoutes />}</>}</>;
};

export default RouteCheck;
