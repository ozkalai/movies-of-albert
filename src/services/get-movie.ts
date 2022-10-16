import axios from "axios";
import { IMovieDetail } from "../typings/movie";
import { Languages } from "../typings/translation";

export const getMovie = async (language: Languages, id?: number | string) => {
  try {
    const { data } = await axios.get<IMovieDetail>(`/${id}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language,
      },
    });
    return data;
  } catch (error) {
    return undefined;
  }
};
