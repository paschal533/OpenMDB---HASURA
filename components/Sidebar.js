import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/openMDB.png';
import { AiOutlineHome } from 'react-icons/ai';
 
const isNotActiveStyle = 'flex ml-4 gap-2 cursor-pointer items-center px-5 gap-3 text-gray-200 hover:text-gray transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex ml-4 gap-2 cursor-pointer items-center px-5 gap-3 font-extrabold border-r-2 border-white  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ closeToggle, query }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="bg-[#04111d] flex flex-col justify-between text-white h-full min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="openMDB" height={40} width={40} />
            <div className="text-white font-semibold text-2xl">OpenMDB</div>
          </div>
        </Link>
        <div className="mt-4">
          <Link
            href="/docs/home"
            passHref
          >
            <div onClick={handleCloseSidebar} className={query === "home" ? isActiveStyle : isNotActiveStyle}>
              <AiOutlineHome /> Home
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="mt-4 px-5 font-semibold">Discover EndPoints</h3>
            <Link
              passHref
              href={`/docs/trending`}
            >
              <div onClick={handleCloseSidebar} className={query === "trending" ? isActiveStyle : isNotActiveStyle}>
                Trending
              </div>
            </Link>
            <Link
              href={`/docs/action`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "action" ? isActiveStyle : isNotActiveStyle}>
                Action
              </div>
            </Link>
            <Link
              href={`/docs/romantic`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "romantic" ? isActiveStyle : isNotActiveStyle}>
                Romantic
              </div>
            </Link>
            <Link
              href={`/docs/horror`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "horror" ? isActiveStyle : isNotActiveStyle}>
                Horror
              </div>
            </Link>
            <Link
              href={`/docs/singleMovie`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "singleMovie" ? isActiveStyle : isNotActiveStyle}>
                getSingleMovie
              </div>
            </Link>
            <Link
              href={`/docs/searchQuery`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "searchQuery" ? isActiveStyle : isNotActiveStyle}>
                SearchQuery
              </div>
            </Link>
            <Link
              href={`/docs/movies`}
              passHref
            >
              <div onClick={handleCloseSidebar} className={query === "movies" ? isActiveStyle : isNotActiveStyle} >
                Movies
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
