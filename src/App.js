import React, { useEffect, useState } from "react";
import Login from "./components/Login.js";
import Player from "./components/Player.js";
import { getTokenFromRequest } from "./services/spotify.js";
import { useDataLayerValue } from "./context/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  //run code based on condition in this condition is change on the URL
  useEffect(() => {
    const hash = getTokenFromRequest();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
          type: 'SET_TOKEN',
          token: _token,
        })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    }
  }, []);
  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
