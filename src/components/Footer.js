import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Grid, Slider } from "@mui/material";

import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/3/3d/Coldplay_-_A_Head_Full_of_Dreams.png"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Coldplay</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__grey" />
        <SkipPreviousIcon className="footer__icon footer__grey" />
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon play__icon"
        />
        <SkipNextIcon className="footer__icon footer__grey" />
        <RepeatIcon className="footer__grey" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
