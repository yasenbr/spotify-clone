import React from "react";
import "../css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
