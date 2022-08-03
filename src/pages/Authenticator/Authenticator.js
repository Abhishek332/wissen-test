import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginCall } from "../../redux/action";
// import { storeType } from '../redux/types/storeType';

import "./Authenticator.css";
import { ToastBox, useToaster } from "../../utils/toaster";
import { LOGIN_NULL } from "../../redux/types/actionTypes";

const Authenticator = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" }),
    dispatch = useDispatch(),
    toaster = useToaster(),
    { loading, userInfo, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!error) return;
    console.log(error);
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
    handleSubmit = () => dispatch(userLoginCall(formValue));

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="form">
        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          value={formValue.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formValue.password}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ToastBox />
    </>
  );
};

export default Authenticator;
