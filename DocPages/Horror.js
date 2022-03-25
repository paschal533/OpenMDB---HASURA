import React from 'react';

const Code = () => {
  return `fetch('/api/getHorrorMovies')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  })`
}

const Response = () => {
  return `[
    { 
    __typename":"movies",
    "title":"The Adam Project",
    "id":2,
    "cover_Image_url":"https://i.ibb.co/7zKYFwn/....webp",
    "image_url":"https://i.ibb.co/Nts3bYj/...jpg",
    "trailer_url":" https://youtu.be/IE8HIsIrq4o",
    "rating":"6.5",
    "duration":"1hour 46mins",
    "plot":"Adam Raki (Hugh Dancy)...",
    "genre":["action","trending","sci-fi"]
    },

    ...
  ]`
}

export default function Horror() {
  return (
    <div className="bg-[#111] w-[100%] object-fill h-[100%]">
      <h1 className="font-extrabold text-2xl">Get Horror Movies</h1>

      <p className="font-medium mt-4">the API EndPoint</p>
      <p className="font-medium mt-2">http://localhost:3000/api/getHorrorMovies</p>
      <div>
        <p className="font-semibold mt-4">Code example</p>
        <div className="bg-[#04111d] w-[100%] codePadding mt-4">
        <pre>
          <code> 
             {Code()}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <p className="font-semibold mt-4">Response example</p>
        <div className="bg-[#04111d] codePadding mt-4">
        <pre>
          <code> 
             {Response()}
            </code>
          </pre>
        </div>
      </div>
      <div className="mt-8">.</div>
    </div>
  );
}
