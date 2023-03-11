import React, { useState } from "react";
import "./styles.css";
import Heading from "../../Components/Headings";
import { useNavigate } from "react-router-dom";
import { SignupService } from "../../Services/APIServices/AuthServices";

const Signup = () => {
  const [signupdata, setSignupdata] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    project: "",
    role: "",
  });
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/");
  };

  const signupuser = () => {
    console.log("signup", signupdata);
    SignupService(signupdata).then((res) => {
      if (res.status === 201) {
        navigate("/")
        console.log("resposne", res);
      } else {
        console.log("error signup the data");
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
            <h1>Sign Up Here</h1>
          </div>
          <div className="logindiv">
            <div className="card p-5 m-4 text-center">
              <div className="fieldsdiv">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        placeholder="Enter username"
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            username: e.target.value,
                          })
                        }
                      />

                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter your phone number"
                      />
                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            project: e.target.value,
                          })
                        }
                        placeholder="Enter project name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter your email"
                      />
                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            password: e.target.value,
                          })
                        }
                        placeholder="Enter your password"
                      />
                      <input
                        type="text"
                        className="mx-2 inputtag my-2"
                        name=""
                        id=""
                        onChange={(e) =>
                          setSignupdata({
                            ...signupdata,
                            role: e.target.value,
                          })
                        }
                        placeholder="Enter your role"
                      />
                    </div>
                  </div>
                </div>

                <div className="btndiv d-flex flex-column mx-2">
                  <p className="small text-start gotosignupLink">
                    Already have an account?
                    <a className="gotologin" onClick={gotoLogin}>
                      Click Here
                    </a>
                  </p>
                  <button className="btn btn-signup my-2" onClick={signupuser}>
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

export default Signup;
