import { MemeInterface } from "../types/meme";

interface GetMemesResponse {
  success: boolean;
  data: {
    memes: MemeInterface[];
  };
}

export const getMemes = async (): Promise<MemeInterface[]> => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const res = (await response.json()) as GetMemesResponse;
  return res.data.memes;
};
