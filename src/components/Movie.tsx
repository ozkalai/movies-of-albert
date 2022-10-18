import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { IMovie } from "../typings/movie";

interface IMovieProps {
  movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
  const { locale } = useRouter();
  return (
    <Link href={`/movie/${movie.id}`} locale={locale}>
      <a>
        <Box
          w="full"
          wordBreak="break-word"
          maxW={{ base: "125px", md: "175px", lg: "225px" }}
        >
          <Box
            w={{ base: "125px", md: "175px", lg: "225px" }}
            h={{ base: "180px", md: "295px", lg: "315px" }}
            position="relative"
          >
            <Image
              loading="eager"
              layout="fill"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movie"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Text color="white" mt-4>
            {movie.title}
          </Text>
        </Box>
      </a>
    </Link>
  );
};

export default Movie;
