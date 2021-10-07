import React from "react";
import SidebardOption from "./SidebardOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../context/DataLayer";
import "../css/Sidebar.css";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebardOption Icon={HomeIcon} title="Home" />
      <SidebardOption Icon={SearchIcon} title="Search" />
      <SidebardOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {/* {playlists?.items?.map((playlist) => (
        <SidebardOption title={playlist.name} />
      ))} */}
    </div>
  );
}

export default Sidebar;
