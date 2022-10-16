import axios from "axios";

import { IMovie } from "../typings/movie";

interface IMoviesResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export const getMovies = async (
  language: "en-US" | "tr-TR" = "en-US",
  type: "popular" | "upcoming" | "top_rated",
  page?: number | string
) => {
  try {
    const { data } = await axios.get<IMoviesResponse>(`/${type}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language,
        page,
      },
    });
    return data.results;
  } catch (error) {
    return [];
  }
};
