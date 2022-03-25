import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import Logo from '../../assets/openMDB.png';
import YouTube from 'react-youtube';
import Rating from '@mui/material/Rating';
   
const MovieDatails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: false,
    }
  };

  useEffect(() => {
    const getMovieData = async () => {
      try {
        if(id) { 
         await fetch(`/api/getMovie/${id}`)
          .then(function(response) {
            return response.json();
          }).then(function(data) {
            setMovie(data[0]);
            setLoading(false);
          })
        }
      }catch (error) {
        console.log(error);
      }
    } 
    getMovieData();
  }, [id])

  return (
    <div className="bg-black bg-cover h-[100vh] w-[100vw] text-white">
      <Head>
        <title>MoviesAPI - moviePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loader /> :
        <div className="bg-black text-white">
          <div className="banner"
            style={{
              backgroundSize: "cover",
              zIndex: "-1",
              backgroundPosition: "center",
                transform: "translatez(0)",
                height: "400px",
              width: "100%",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),url(
                  "${movie?.cover_Image_url}"
              )`}} 
          >
            <Link href="/" passHref>
              <div className="flex ml-[5px] items-center cursor-pointer">
                <Image src={Logo} alt="openMDB" height={40} width={40} />
                <div className="ml-[0.6rem] text-white font-semibold text-2xl">OpenMDB</div>
              </div>
            </Link>
          </div>
          <div className=" m-[20px] content p-[0 5px] flex mt-[20px]">
          {movie?.image_url && <Image
              src={movie?.image_url}
              alt="poster"
              className="poster__image rounded-lg"
              height="1200px"
              width="800px"
            />}
            <div className="m-[20px]" >
              <h1 className="ml-[0.8rem] md:mt-8 mt-2 text-white font-bold text-3xl">{movie.title}</h1>
              <p className="md:mt-4 mt-1 font-semibold text-2xl">Duration:  <span className=" font-small text-1xl">{movie.duration}</span> </p>
              <p className="md:mt-4 mt-2 font-semibold text-2xl">Rating:   {movie.rating} <Rating name="half-rating-read" size="large" max={10} precision={0.5} defaultValue={parseInt(movie.rating)} readOnly /></p>
              <p className="md:mt-3 mt-2 font-semibold text-1xl">Overview:   <span> {movie.plot}</span> </p>
            </div>
          </div>
          <br/>
          {movie?.trailer_url && <YouTube videoId={movie.trailer_url.slice(17)} opts={opts} />}
          <br />
        </div>}
    </div>
  )
}

export default MovieDatails;

