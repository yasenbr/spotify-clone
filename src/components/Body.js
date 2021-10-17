import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "../context/DataLayer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SongRow from "./SongRow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../css/Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          <p>
            <strong>{discover_weekly?.owner.display_name}</strong> .
            {discover_weekly?.followers.total} Like .
            {discover_weekly?.tracks.total} songs,
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons ">
          <PlayCircleFilledIcon
            className="body__shuffle "
            onClick={playPlaylist}
          />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <row className="title__bar">
          <div className="title__bar__size">TITLE</div>
          <div className="album__bar__size">ALBUM</div>
          <div className="addDate__bar__size">DATE ADDED</div>
          <AccessTimeIcon className="duration__bar__size" />
        </row>
        <hr />

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} addDate={item.added_at}/>
        ))}
      </div>
    </div>
  );
}

export default Body;
