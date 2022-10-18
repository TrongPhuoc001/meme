import { useEffect, useState } from "react";
import { MemeInterface } from "../../types/meme";
import { Meme } from "../meme/Meme";
import "./MemeGallery.css";
export const MemeGallery = ({ memes }: { memes: MemeInterface[] }) => {
  const size = useWindowSize();
  const [columns, setColumns] = useState(4);
  useEffect(() => {
    if (size.width) {
      if (size.width < 968) {
        setColumns(1);
      } else if (size.width < 1444) {
        setColumns(2);
      } else if (size.width < 1700) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    }
  }, [size]);
  return (
    <div className="meme-gallery">
      {chunkArray(memes, Math.ceil(memes.length / columns)).map(
        (memesChunk, i) => (
          <div className="meme-gallery-col" key={i}>
            {memesChunk.map((meme) => (
              <Meme key={meme.id} meme={meme} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

const chunkArray: (arr: MemeInterface[], size: number) => MemeInterface[][] = (
  arr: MemeInterface[],
  size: number
) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined as number | undefined,
    height: undefined as number | undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
