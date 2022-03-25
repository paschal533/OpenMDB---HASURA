import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';

const Row = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingData = async () => {
      try {
        await fetch('/api/getTrendingMovies')
          .then(function(response) {
            return response.json();
          }).then(function(data) {
            setResult(data);
            setLoading(false);
          })
      }catch (error) {
        console.log(error);
      }
    } 
    getTrendingData();
  }, []);

  return (
    <div className="bg-[#111]">
      <div className="ml-[10px] text-white">
        <h2 className="text-white font-medium text-3xl">Trending now</h2>
        {loading ? 
         <div className="mt-[-50px]">
            <Loader />
            <div className="mt-12">.</div>
          </div> : 
         <div className="grid grid-cols-2 gap-1 md:grid md:grid-cols-6 md:gap-2 pt-[15px] p-[5px]">
           {result?.map(data =>
            <div className="row__poster" key={data.id}>
              <Link href={`/movie/${data?.id}`} passHref> 
                <Image key={data.id} alt="poster" height="320px" width="220px" objectFit="fill" src={data.image_url} className="rounded-lg w-[250px] h-[270px]" />
              </Link>
            </div>
          )}
        </div>}
      </div>
    </div>
  )
}

export default Row;
