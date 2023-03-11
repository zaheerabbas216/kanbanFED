import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteuser, setIsAUTH } from "../../features/kanban/kanbanSlice";
import { clearLocal } from "../../Utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
  const user = useSelector((state) => state.kanban);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("🚀 ~ file: index.js:7 ~ Dashboard ~ user:", user);

  const logout = () => {
    // dispatch(deleteuser(""));
    dispatch(deleteuser());
    dispatch(setIsAUTH(false));
    clearLocal();
    navigate("/");
  };

  return (
    <>
      {/* <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button> */}
      <div className="parentdiv">
        <div className="headerdiv container">
          <h2 className="font-weight-bold">Kanban board</h2>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
