import React from "react";
import "./Home.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeDataCall } from "../../redux/action";
import { Table } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    { loading, data } = useSelector((state) => state.homeData),
    loggedin = JSON.parse(localStorage.getItem("userInfo") || "null");

  useEffect(() => {
    if (!loggedin) navigate("/");
  }, [loggedin, navigate]);

  useEffect(() => {
    dispatch(homeDataCall());
  }, [dispatch]);

  if (loading) return <h1 className="loading">Loading...</h1>;

  return <div>{data && <Table data={data} />}</div>;
};

export default Home;
