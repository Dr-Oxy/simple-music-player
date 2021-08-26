import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Player = (props) => {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;

        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;

        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="player">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>

      <div className="header">
        <h4>Now Playing...</h4>

        <Link to="/songs">
          <button>
            <FontAwesomeIcon icon={faListUl} />
          </button>
        </Link>
      </div>

      <PlayerDetails songs={props.songs[props.currentSongIndex]} />

      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />

      <div className="next">
        <p style={{ marginBottom: "5px" }}>
          <strong>Next Song:</strong>
        </p>

        <p>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Player;
