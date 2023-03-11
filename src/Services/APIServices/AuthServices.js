import axios from "axios";
import { config } from "../Configuration";

export const LoginService = async (data) => {
  const response = await axios.post(config.login, data);
  if (response) {
    return response;
  } else {
    console.log("error in the user login");
  }
};

export const SignupService = async (data) => {
  const response = await axios.post(config.register, data);
  if (response) {
    return response;
  } else {
    console.log("error in the user login");
  }
};
