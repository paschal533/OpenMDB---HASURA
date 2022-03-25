import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { Sidebar } from '../components';
import logo from '../assets/openMDB.png';
import { Horror, Home, Action, Movies, Romantic, SearchQuery, SingleMovie, Trending } from '../DocPages';

const DocsPage = ({ query }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  const selectedModal = () => {
    switch (query) {
      case "horror":
        return (
          <Horror />
        );
      case "trending":
        return (
          <Trending />
        );
      case "action":
        return (
          <Action />
        );
      case "romantic":
        return (
          <Romantic />
        );
      case "movies":
        return (
          <Movies />
        );
      case "searchQuery":
        return (
          <SearchQuery />
        );
      case "singleMovie":
        return (
          <SingleMovie />
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex bg-[#111] text-white docs h-screen transition-height duration-75 ease-out">
      <div className="hidden fixed md:flex h-screen flex-initial">
        <Sidebar query={query} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row items-center shadow-md">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
          <Link href="/">
            <div className="flex ml items-center cursor-pointer">
              <Image src={logo} height={40} width={40} />
              <div className="text-white font-semibold text-2xl">OpenMDB</div>
            </div>
          </Link>
        </div>
        {toggleSidebar && (
        <div className="fixed w-4/5 h-screen overflow-y-auto shadow-lg shadow-white-500/50 z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
          </div>
          <Sidebar closeToggle={setToggleSidebar} query={query} />
        </div>
        )}
      </div>
      <div className="selectedModal bg-[#111] flex-1 h-[100%]" ref={scrollRef}>
         {selectedModal()}
      </div>
    </div>
  );
};

export default DocsPage;
