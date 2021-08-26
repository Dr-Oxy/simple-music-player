import { useState, useEffect } from "react";
import Player from "./components/Player";
import Songs from "./components/Songs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [songs] = useState([
    {
      id: "1",
      title: "Shrike",
      artist: "Hozier",
      img_src: "./images/shrike.jpg",
      src: "./music/shrike.mp3",
    },
    {
      id: "2",
      title: "The Chase",
      artist: "Sohn",
      img_src: "./images/the-chase.jpg",
      src: "./music/the-chase.mp3",
    },
    {
      id: "3",
      title: "5 AM",
      artist: "Amber Run",
      img_src: "./images/5am.jpg",
      src: "./music/5am.mp3",
    },
    {
      id: "4",
      title: "Santa Monica",
      artist: "Theory of a Deadman",
      img_src: "./images/gasoline.jpg",
      src: "./music/santa-monica.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}
                nextSongIndex={nextSongIndex}
              />
            )}
          />

          <Route path="/songs" render={() => <Songs songs={songs} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
