import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginCall } from "../../redux/action";
import Logo from "./logo.png";
// import { storeType } from '../redux/types/storeType';

import "./Authenticator.scss";
import { ToastBox, useToaster } from "../../utils/toaster";
import { LOGIN_NULL } from "../../redux/types/actionTypes";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components";

const Authenticator = () => {
  const [formValue, setFormValue] = useState({
      email: "",
      password: "",
      checkbox: false,
    }),
    dispatch = useDispatch(),
    toaster = useToaster(),
    navigate = useNavigate(),
    { loading, userInfo, error } = useSelector((state) => state.userLogin),
    alreadyLogged = JSON.parse(localStorage.getItem("userInfo") || "null");

  if (alreadyLogged) navigate("/home");

  useEffect(() => {
    if (!error) return;
    toaster("error", error);
    dispatch({ type: LOGIN_NULL });
  }, [error, dispatch, toaster]);

  useEffect(() => {
    if (!userInfo) return;
    toaster("success", "Login Successful");
    dispatch({ type: LOGIN_NULL });
  }, [userInfo, dispatch, toaster]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValue({ ...formValue, [name]: value });
    },
    handleSubmit = (e) => {
      e.preventDefault();
      dispatch(userLoginCall(formValue));
    };

  if (loading) return <h1 className="loading">Loading...</h1>;

  const InputFields = [
    {
      name: "email",
      type: "email",
      value: formValue.email,
      handleChange,
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      value: formValue.password,
      handleChange,
      label: "Password",
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-box flex flex-col justify-center"
      >
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <p>Hello there, SignIn to continue</p>
        {InputFields.map((inputData, index) => (
          <InputBox key={`input-${index + 1}`} {...inputData} />
        ))}
        <div className="flex check">
          <InputBox
            type="checkbox"
            name="checkbox"
            value={formValue.checkbox}
            handleChange={handleChange}
            required
          />
          <p>
            By creating or logging into an account, you are agreeing with our{" "}
            <span>Terms & Conditions</span> and <span>Privacy Policys.</span>
          </p>
        </div>
        <button>Next</button>
        <h4>Signin with company SSO</h4>
      </form>

      <ToastBox />
    </>
  );
};

export default Authenticator;
