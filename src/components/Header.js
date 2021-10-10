import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "../css/Header.css";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          alt={user?.display_name}
          src={user?.images[0].url}
          className="avatar"
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
