import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '../../components';
import NotFound from '../../assets/not-found.png';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    const getMovieData = async () => {
      try {
        if(query) { 
         await fetch(`/api/searchMovie/${query}`)
          .then(function(response) {
            return response.json();
          }).then(function(data) {
            setMovies(data);
            setLoading(false);
          })
        }
      }catch (error) {
        console.log(error);
      }
    } 
    getMovieData();
  }, [query])

  return (
    <div className="bg-[#111] w-full h-[100vh]">
       <Head>
        <title>MoviesAPI - Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {loading ? <Loader /> :
        movies.length != 0 ?
        <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-6 md:gap-4 p-[15px]">
           {movies?.map((movie) => {
             return ( 
              <div key={movie.id} className="cursor-pointer duration-500 hover:scale-110">
                <Link href={`/movie/${movie?.id}`}> 
                  {movie.image_url && <Image key={movie.id}  height="320px" width="220px" alt="poster" objectFit="fill" src={movie.image_url} className="rounded-lg w-[250px] h-[270px]" />}
                </Link>
              </div>
             )
           })}
        </div> : 
        <div className="text-white pl-[5px] pr-[2px] flex flex-col space-y-4 w-full mt-[20px] justify-center items-center align-middle">
          <h2 className="font-semibold text-2xl mb-[40px]">Sorry, the movie &quot{query}&quot can not be found.</h2>
          <Image objectFit="fill" alt="notFound" src={NotFound} className="rounded-lg w-[250px] h-[270px]" />
        </div>}
    </div>
  )
}

export default Search;
