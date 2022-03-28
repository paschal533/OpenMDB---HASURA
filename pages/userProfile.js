import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogout } from 'react-google-login';
import BGImage from '../assets/home-bg.jpg';

import Loader from '../components/Loader';

const UserProfile = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) router.push('/login');
    setUser(User);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const logout = () => {
    localStorage.clear();

    router.push('/');
  };

  if (!user) return <div className="h-[100vh] bg-[#111]"><Loader /></div>;

  return (
    <div className="relative h-[100vh] bg-[#111] text-white pb-2 justify-center items-center">
      <Head>
        <title>MoviesAPI - UserProfile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#111] flex relative flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex relative flex-col justify-center items-center">
            <Image
              className="w-full brightness-75 shadow-inner bg-cover static object-cover"
              src={BGImage}
              height="600"
              alt="bg-pic"
            />
            <img
              className="rounded-full relative w-20 h-20 -mt-10 shadow-xl object-cover"
              src={user.image}
              alt="user-pic"
            />
          </div>
          <h1 className="font-bold text-3xl text-center mt-3">
            {user.userName}
          </h1>
          <div className="absolute top-0 z-1 right-0 p-2">
            <GoogleLogout
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiOutlineLogout color="red" fontSize={21} />
                </button>
              )}
              onLogoutSuccess={logout}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
        <div className="text-center cursor-pointer h-full mb-7">
          <GoogleLogout
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none"
                >
                  Log Out
                </button>
              )}
              onLogoutSuccess={logout}
              cookiePolicy="single_host_origin"
            />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
