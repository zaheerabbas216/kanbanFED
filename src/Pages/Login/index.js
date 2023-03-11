import React, { useState } from "react";
import "./styles.css";
import Heading from "../../Components/Headings";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../Services/APIServices/AuthServices";
import { setLocal } from "../../Utils/LocalStorage";
import { useDispatch } from "react-redux";
import { adduser, setIsAUTH } from "../../features/kanban/kanbanSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const gotosignup = () => {
    navigate("/register");
  };

  const loginUser = () => {
    let payload = {
      email: email,
      password: password,
    };
    LoginService(payload).then((res) => {
      if (res.status === 200) {
        dispatch(adduser(res.data));
        dispatch(setIsAUTH(true));
        setLocal("token", res.data.token);
        setLocal("userDetails", res.data.user);
        console.log("res-----", res);
      } else if (res.status === 401) {
        console.log("email and password not valid");
      } else {
        console.log("internal server error");
      }
    });
  };

  return (
    <>
      <div className="container maindiv">
        <div className="outlinediv">
          <div>
            <Heading heading="Welcome" subheading="Join the community!" />
          </div>
          <div className="text-center my-3">
            <h1>Login Here</h1>
          </div>
          <div className="logindiv">
            <div className="card p-5 m-4 text-center">
              <div className="fieldsdiv">
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    type="text"
                    className="mx-2 inputtag"
                    name=""
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <input
                    type="text"
                    className="mx-2 inputtag"
                    name=""
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="forgotpassworddiv my-3 text-end">
                  <p className="small">
                    <strong>Forgot Password</strong>
                  </p>
                </div>
                <div className="btndiv d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-login my-2" onClick={loginUser}>
                    Login
                  </button>
                  <button className="btn btn-signup my-2" onClick={gotosignup}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
