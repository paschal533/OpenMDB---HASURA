import { gql } from '@apollo/client';
import initializeApollo from "../../lib/Apollo";

export default async function getAllMoviesAPI(req, res) {
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`query fetchMovies {
      movies {
        title
        id
        cover_Image_url
        image_url
        trailer_url
        rating
        duration
        plot
        genre
      }
    }`
  })
  const result = data.movies.filter(({ genre }) => genre.includes("trending"));
  res.status(200).json(result);
}
