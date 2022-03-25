import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebookOption } from 'react-icons/gr';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import logo from '../assets/openMDB.png';
import BGImage from '../assets/home-bg.jpg';
import { Loader } from '../components';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    
    if (User) router.push('/');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const responseFacebook = (response) => {
    setLoading(true);
    const { name, id } = response;
    const doc = {
      _id: id,
      _type: 'user',
      userName: name,
      image: response.picture.data.url,
    };
    localStorage.setItem('user', JSON.stringify(doc));
    setLoading(false);
    router.push('/')
  };

  const responseGoogle = (response) => {
    setLoading(true);
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    localStorage.setItem('user', JSON.stringify(doc));
    setLoading(false)
    router.push('/')
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <Head>
        <title>MoviesAPI - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading ? <div className="w-full h-full">
        <div className="imageWrapper">
          <Image
            src={BGImage}
            layout="fill"
            alt="background"
            className="w-full h-full shadow-inner bg-cover static object-cover"
          />
        </div>

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <Link href="/" passHref>
            <div className="flex mb-8 ml-[-10px] items-center cursor-pointer">
              <Image src={logo} alt="openMDB" height={40} width={40} />
              <div className="ml-[0.2rem] text-white font-semibold text-2xl">OpenMDB</div>
            </div>
          </Link>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
          <div className="shadow-2xl">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_ID}
              fields="name,email,picture"
              callback={responseFacebook}
              disableMobileRedirect
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-blue-500 flex text-white btn p-3 mt-3 justify-center items-center rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                >
                  <GrFacebookOption /> Sign in with facebook
                </button>
              )}
            />
          </div>
        </div>
      </div> : <Loader />}
    </div>
  );
};

export default Login;
