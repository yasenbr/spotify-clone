import React from "react";
import "../css/SongRow.css";

function SongRow({ track, playSong, addDate }) {
  let state = {
    myCurrentTime: new Date().toLocaleString(),
  };

  console.log(state.myCurrentTime);

  console.log(track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <div className="songRow__title">
        <img className="songRow__img" src={track.album.images[0].url} alt="" />
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
      </div>

      <div className="songRow__album">
        <p>{track.album.name}</p>
      </div>
      <div className="songRow__addDate">
        <p>{addDate}</p>
      </div>
      <div className="songRow__time songRow__info">
        <p>1h</p>
      </div>
    </div>
  );
}

export default SongRow;
