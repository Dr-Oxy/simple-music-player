import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Song = ({ song }) => {
  return (
    <div className="card song-wrapper">
      <div className="card-top">
        <div className="song-image">
          <img src={song.img_src} alt="" />
        </div>
        <div className="song-details">
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist}</p>
        </div>
      </div>

      <div>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
};

export default Song;
