import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Song from "./Song";
import { Link } from "react-router-dom";

const Songs = (props) => {
  return (
    <div className="player song-list">
      <header>
        <Link to="/">
          <button>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
        </Link>

        <h4>Music Library</h4>
      </header>

      {props.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Songs;
