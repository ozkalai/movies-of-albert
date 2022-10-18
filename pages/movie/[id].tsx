import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { getMovie } from "../../src/services/get-movie";
import { IMovieDetail } from "../../src/typings/movie";
import { Languages } from "../../src/typings/translation";
import Layout from "../../src/components/Layout";

interface IDetailProps {
  movie: IMovieDetail;
}

export const getStaticProps: GetStaticProps<IDetailProps> = async (context) => {
  const { id } = context.params as { id: string };
  const movie = await getMovie((context.locale as Languages) || "en-US", id);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const Detail: NextPage<IDetailProps> = ({ movie }) => {
  const { back } = useRouter();

  return (
    <Layout>
      <Box
        minW="100%"
        overflowY="auto"
        overflowX="unset"
        color="white"
        p={{ base: "2", md: "10" }}
        mb={"14"}
      >
        <IconButton
          _hover={{ bg: "header.200" }}
          icon={<ArrowBackIcon />}
          bg="transparent"
          aria-label="back-button"
          onClick={back}
          mb={{ base: "2", md: "10" }}
        >
          Back
        </IconButton>
        <Flex
          display="flex"
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={{ base: "center", md: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div
            style={{
              width: "200px",
              height: "300px",
              position: "relative",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              layout="fill"
            />
          </div>

          <Flex
            px={10}
            flex="2"
            direction="column"
            gap="10px"
            mt={{ base: 4, md: 0 }}
          >
            <Text fontWeight="semibold" fontSize={"2xl"}>
              {movie.title}
            </Text>
            <Text>{movie.overview}</Text>
            <Text>{`Duration: ${movie.runtime} min`}</Text>
            <Flex>
              Genre:
              {movie.genres.map((genre) => (
                <Text key={genre.id} ml={1}>
                  {genre.name}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Detail;
