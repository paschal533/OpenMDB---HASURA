import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#111] h-[100%]">
       <div>
          <h1 className="font-bold mb-1">OpenMDB API</h1>
          <hr />
          <p className="mt-3"> The Open Movie Database API is a GraphQL web service to obtain movie information.
          All content and images on 
          the site are contributed and maintained by the dev Team of OpenMDB.

          If you find this service useful, please consider making a 
          one-time donation or become a patron.</p>
       </div>

       <div>
          <h1 className="font-bold mt-4">API Overview</h1>
          <hr />
          <p className="mt-2">Our API is available for everyone to use. A OpenMDB user account is required to make API request. 
          Professional users are approved on a per application basis.

          As always, you must attribute OpenMDB as the source of your data.</p>
       </div>

       <div>
          <h1 className="font-bold mt-4">What is OpenMDB's API?</h1>
          <hr />
          <p className="mt-2">The API service is for those of you interested in 
          using our movie, TV show and/or data in your application. 
          Our API is a system we provide for you and your team to programmatically 
          fetch and use our data and/or images.</p>
       </div>

       <div>
          <h1 className="font-bold mt-4">Does the API key cost anything?</h1>
          <hr />
          <p className="mt-2">Our API is free to use as long as you 
          attribute OpenMDB as the source of the data and/or images. 
          However, we reserve the right to charge 
          for the commercial API key in the future.</p>
       </div>
    </div>
  );
}
