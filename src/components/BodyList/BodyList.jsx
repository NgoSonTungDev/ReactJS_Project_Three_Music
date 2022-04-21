import React, { useContext , useState} from "react";
import "./BodyList.scss";
import { Songs } from "../../Context";

const BodyList = () => {
  const [idSong,setIdSong]= useState(0);
  const { dataSong,handlesetSong } = useContext(Songs);

  const handleSong = (idsong)=>{
    setIdSong(idsong);
    handlesetSong(idSong);
  }
  
  return (
    <div className="bodyList">
      <div className="row-intro">
        <div className="STT">
          <p>STT</p>
        </div>
        <div className="TITLE">
          <p>TITLE</p>
        </div>
        <div className="AUTHOR">
          <p>AUTHOR</p>
        </div>
        <div className="DOWLOAD">
          <i class="fa fa-download"></i>
        </div>
      </div>
      <div className="row-body">
        {dataSong.map((song, index) => (
          <div className="row-body-colum" key={index} onClick={()=>{handleSong(song.id);}}>
            <div className="STT2">
              <p>{song.id}</p>
            </div>
            <div className="TITLE2">
              <p>{song.name}</p>
            </div>
            <div className="AUTHOR2">
              <p>{song.author}</p>
            </div>
            <div className="DOWLOAD2">
                <a href={song.url}><i  class="fa fa-download"></i></a> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyList;
