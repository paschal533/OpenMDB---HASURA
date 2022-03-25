import { gql } from '@apollo/client';
import initializeApollo from "../../../lib/Apollo";

export default async function handler(req, res) {
  const { movieId } = req.query;
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
  const result = data.movies.filter(({ id }) =>  id == movieId );
  res.status(200).json(result);
}
