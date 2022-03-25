import { gql } from '@apollo/client';
import initializeApollo from "../../../lib/Apollo";

export default async function handler(req, res) {
  const { query } = req.query;
  const client = initializeApollo();
  const { data } = await client.query({
    query: gql`query fetchMovies {
      movies(where: {title: {_ilike: "%${query}%"}}) {
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
  res.status(200).json(data.movies);
}
