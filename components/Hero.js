import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Marvel from '../assets/Marvel.jpg'
import SpiderMan from '../assets/spider_man.jpg';
import BGImage from '../assets/home-bg.jpg';

const style = {
  wrapper: `relative overflow-x-hidden`,
  container: `overflow-x-hidden`,
  contentWrapper: `flex mt-8 ml-[20px] ml-[20px] relative justify-center flex-wrap items-center`,
  copyContainer: `md:w-1/2 md:mr-[20px] mr-[0px] w-[100%]`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `hidden md:block rounded-[3rem] mt-[15px] md:mt-0`,
  infoContainer: `h-17 mt-[-10px] bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <Image
        src={BGImage}
        layout="fill"
        alt="background"
        className="w-full bg-cover static object-cover"
      />
      <div className={style.container}>
        <div className={style.contentWrapper} >
          <div className={style.copyContainer}>
            <div className={style.title}>
            Discover millions of movies and TV shows.
            </div>
            <div className={style.description}>
              OpenMDB is the world&apos;s largest Movie database
            </div>
            <div className={style.ctaContainer}>
              <Link href="/docs/home" passHref> 
                <button className={style.accentedButton}>Explore</button>
              </Link>
              <Link href="/login" passHref> 
                <button className={style.button}>Login</button>
              </Link>
            </div>
          </div>
          <Link href={`/movie/1`} passHref> 
            <div className={style.cardContainer}>
              <Image
                className="rounded-t-lg cursor-pointer"
                height='300px'
                width='250px'
                src={SpiderMan}
                alt=""
              />
              <div className={style.infoContainer}>
                <Image
                  className="h-[2.25rem] image rounded-full"
                  height='30px'
                  width='30px'
                  src={Marvel}
                  alt=""
                />
                <div className={style.author}>
                  <div className={style.name}>Hot Pick </div>
                  <a
                    className="text-[#1868b7]"
                    href="https://www.marvel.com/movies/spider-man-no-way-home"
                  >
                    Marvel
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="banner--fadeBottom relative" />
    </div>
  )
}

export default Hero
