import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        home container
      </div>
    </div>
  );
}

export default Home;
