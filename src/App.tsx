import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getMemes } from "./api/meme";
import "./App.css";
import { MemeGallery } from "./components/memeGallery/MemeGallery";
import { MemeInterface } from "./types/meme";

const getMemesData = (setMemes: Dispatch<SetStateAction<MemeInterface[]>>) => {
  getMemes().then((data) => {
    setMemes(data);
  });
};

function App() {
  const [memesOnloaded, setMemesOnloaded] = useState<MemeInterface[]>([]);
  const [memesOnClick, setMemesOnClick] = useState<MemeInterface[]>([]);

  useEffect(() => {
    getMemesData(setMemesOnloaded);
  }, []);

  const handleButtonClicked = () => {
    getMemesData(setMemesOnClick);
  };

  return (
    <div className="app">
      <div className="section">
        <h1>Onloaded</h1>
        <MemeGallery memes={memesOnloaded} />
      </div>
      <div className="section">
        <div className="flex">
          <h1>On button clicked</h1>
          <button className="button" onClick={handleButtonClicked}>
            Load memes
          </button>
        </div>
        <MemeGallery memes={memesOnClick} />
      </div>
    </div>
  );
}

export default App;
