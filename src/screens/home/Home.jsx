import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widgets/Widget";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts"></div>
      </div>
    </div>
  );
}

export default Home;
