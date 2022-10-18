import { MemeInterface } from "../../types/meme";
import "./Meme.css";
interface MemeProps {
  meme: MemeInterface;
}

export const Meme = ({ meme }: MemeProps) => {
  return (
    <div className="meme">
      <img className="meme-img" src={meme.url} alt={meme.name} />
      <h2 className="meme-title">{meme.name}</h2>
    </div>
  );
};
