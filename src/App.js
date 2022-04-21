import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Narbar/Narbar";
import Footer from "./components/Footer/footer";
import BodyList from "./components/BodyList/BodyList";
import BodyDetai from "./components/BodyDetai/BodyDetai";
import { Songs } from "./Context";
import dataSong from "./data/songs.json";


function App() {
  const [song, setSong] = useState(dataSong[0]);

  const handlesetSong = (idsong)=>{
    const song = dataSong.find((song) => song.id === idsong)
    if (!song) setSong(dataSong[0]);
    else setSong(song);
  }

  return (
    <div className="container">
      <Navbar />
      <Songs.Provider value={{dataSong, song ,handlesetSong}}>
        <div className="body-content">
          <BodyDetai />
          <BodyList />
        </div>
      </Songs.Provider>
      <Footer dataSongId={song}/>
    </div>
  );
}

export default App;
