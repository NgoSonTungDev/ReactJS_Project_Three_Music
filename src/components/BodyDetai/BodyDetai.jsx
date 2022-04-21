import React,{useContext} from "react";
import './BodyDetai.scss';
import {Songs} from '../../Context'

const BodyDetai = ()=>{
    const  {song} = useContext(Songs);
    return(
        <div className="introduceSong">
            <h2>Now playing</h2>
            <p>STT : {song.id} | {song.name}</p>
            <img src={song.links.images[0].url} alt="" />
            <div className="itro_img">
                <img src={song.links.images[1].url} alt="" />
                <p>{song.author}</p>
            </div>
        </div>
    )
}

export default BodyDetai;