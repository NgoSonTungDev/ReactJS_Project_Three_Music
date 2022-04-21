import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../../Context";
import "./footer.scss";

const Footer = (prop) => {
    // const {handlesetSong} = useContext(Songs)
    const data = prop.dataSongId;
    const handleClickNext = () => {
      // handlesetSong(data.id + 1)
    }
    const handleClickPre = () => {
      // handlesetSong(data.id - 1)
    }

  return (
    <div>
      <AudioPlayer
        className="footer"
        src={data.url}
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
};

export default Footer;
