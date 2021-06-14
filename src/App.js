import React, { useEffect, useState } from "react";
import Login from "./components/Login.js";
import Player from "./components/Player.js";
import { getTokenFromRequest } from "./services/spotify.js";
import { useDataLayerValue } from "./context/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();
  //run code based on condition in this condition is change on the URL
  useEffect(() => {
    const hash = getTokenFromRequest();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(":)", user);
      });
    }

    console.log("Token:", token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
