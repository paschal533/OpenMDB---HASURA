import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../assets/openMDB.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  wrapper: `bg-[#04111d] w-full justify-between w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `md:flex md:flex-1 flex md:w-[600px] flex-0 w-[100%] mr-[3px] mx-[0.8rem] w-max-[650px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] focus:ring-0 outline-none w-full md:w-[600px] border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `md:flex w-full items-center justify-end`,
  headerItem: `text-white md:mt-[0px] mt-[20px] px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] md:mt-[0px] mt-[20px] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    if(event.key === 'Enter'){
        window.location.href = "/search/" +  searchQuery ;
    }
 }

  return (
    <div className={style.wrapper}>
      <Link href="/" passHref>
        <div className={style.logoContainer}>
          <Image alt="openMDB" src={Logo} height={40} width={40} />
          <div className={style.logoText}>OpenMDB</div>
        </div>
      </Link>
      <div className="hidden md:flex"> 
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleSubmit}
            placeholder="Search movies, series, and documentry"
          />
        </div>
        <div className={style.headerItems}>
          <Link href="/docs/home" passHref>
            <div className={style.headerItem}>for developers</div>
          </Link>
          <Link href="/docs/home" passHref>
            <div className={style.headerItem}> Docs </div>
          </Link>
          <Link href="/login" passHref> 
            <div className={style.headerItem}> Sign In </div>
          </Link>
          <Link href="/userProfile" passHref> 
            <div className={style.headerIcon}>
              <CgProfile />
            </div>
          </Link>
          <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet />
          </div>
        </div>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-[#04111d] text-white animate-slide-in"
          >
            <div className={style.searchBar}>
              <div className={style.searchIcon}>
                <AiOutlineSearch />
              </div>
              <input
                className={style.searchInput}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyPress={handleSubmit}
                placeholder="Search movies, series, and documentary"
              />
            </div>
            <div className={style.headerItems}>
              <Link href="/dashboard" passHref>
                <div className={style.headerItem}>For developers</div>
              </Link>
              <Link href="/docs" passHref>
                <div className={style.headerItem}> Docs </div>
              </Link>
              <Link href="/login" passHref> 
                <div className={style.headerItem}> Sign In </div>
              </Link>
              <Link href="/userProfile" passHref> 
                <div className={style.headerIcon}>
                  <CgProfile />
                </div>
              </Link>
              <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
              </div>
            </div>
            {toggleMenu && (
              <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
