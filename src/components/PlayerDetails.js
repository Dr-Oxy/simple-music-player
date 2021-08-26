import React from "react";

const PlayerDetails = (props) => {
  return (
    <div className="player-detail">
      <div className="detail-img">
        <img src={props.songs.img_src} alt="album art" />
      </div>

      <h3 className="detail-title">{props.songs.title}</h3>

      <h4 className="detail-artist">{props.songs.artist}</h4>
    </div>
  );
};

export default PlayerDetails;
