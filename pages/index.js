import Head from 'next/head'
import Image from 'next/image'
import {
  SiAdobexd, SiFigma, SiPython, SiJavascript, SiReact, SiHtml5, SiCss3,
  SiTailwindcss, SiAzuredevops, SiDocker, SiKubernetes, SiGithub, SiPostgresql,
  SiMysql, SiSolidity, SiEthereum
} from "react-icons/si"
import { DiDjango, DiSass } from "react-icons/di"
import { TbBrandReactNative } from "react-icons/tb"
import { motion } from 'framer-motion'
import ReactTyped from 'react-typed'
import Slider from "react-slick";
import NavBar from '../components/home/nav'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeIn, slideInLeftFast, slideInRightFast, slideInFromBottom, stagger, antiStagger } from '../components/animations'

import Flower from "../public/assets/flower.png"
import Collage from '../public/assets/c1.jpg'

const imageLoader = require("../loader");

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Hashim Athman | Full Stack developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <motion.div variants={stagger} className='h-screen px-12 py-1 md:px-24'>
        <NavBar />
        <motion.div variants={fadeIn} className='w-full text-center my-10 mt-5 tracking-widest'>

          <motion.h1 className="text-[1.5rem] mb-1 tracking-[0.2rem] md:text-[2rem] md:mb-1.5 md:tracking-[0.3rem]">Hashim Athman</motion.h1>
          <motion.h1 className="text-[1rem] mb-1 tracking-[0.1rem] md:text-[1.8rem] md:mb-1.5 md:tracking-[0.15rem]">Software Developer/Admin</motion.h1>
          <motion.div>
            <h2>My work is always a <span className="text-[#f60961]">Wooow</span></h2>

          </motion.div>
        </motion.div>

        <motion.div variants={antiStagger} className='flex flex-wrap justify-between items-start'>
          <motion.div variants={slideInLeftFast} className='w-full pb-8 flex flex-1 flex-col justify-start items-start text-center md:text-left lg:order-first'>
            <div className="px-20 md:hidden">
              <Image loader={imageLoader} src={Flower} alt="divider" />
            </div>
            <div className="w-full px-5">
              <h6 className="">BIOGRAPHY</h6>
              <p>Work for money and design for love! I'm Hashim, a full stack developer based in Kenya</p>
            </div>

            <div className="w-full px-5">
              <h6>CONTACT</h6>
              <p>Mombasa, Kenya</p>
              <p>contact@hashimathman.com</p>
              <p>+254 70146 7872</p>

            </div>

            <div className="w-full px-5">
              <h6>SERVICES</h6>
              <p>UI/UX Design</p>
              <p>Backend Development</p>
              <p>Frontend Development</p>
              <p>Mobile Development</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className='w-full relative -top-2 order-first px-3 mb-3 flex flex-col items-center lg:flex-1'>
            <div className='h-64 w-full relative p-10 border-solid border-2 rounded-full md:h-85 md:w-96'>
              <div className='h-full  rounded-full relative overflow-hidden'>
                <div className='absolute -top-2'>
                  <Image loader={imageLoader} src={Collage} alt="profile pic" className='rounded-full' />
                </div>

              </div>

            </div>

            <div className="px-48 hidden md:block lg:hidden">
              <Image loader={imageLoader} src={Flower} alt="divider" />
            </div>
          </motion.div>

          <motion.div variants={slideInRightFast} className='w-full pb-8 flex flex-1 flex-col justify-center items-center text-center md:text-right'>
            <div className="px-20 md:hidden">
              <Image loader={imageLoader} src={Flower} alt="divider" />
            </div>
            <div className="w-full">
              <h6>PROFESSIONAL<br />CERTIFICATIONS</h6>
              <p>Google UI/UX certification</p>
              <p>Google Project Management certification</p>
              <p>Google IT Support certification</p>
            </div>

            <div className="w-full">
              <h6><br />OTHER CERTIFICATIONS</h6>
              <p className='mb-2'>Advanced CSS and Sass: Flexbox, Grid, Animations</p>
              <p>Ethereum and Solidity: The Complete Developer’s
                Guide</p>
            </div>

            <div className="w-full">
              <h6>PROJECTS DONE</h6>
              <h2>10</h2>
            </div>
          </motion.div>



        </motion.div>
        <motion.div variants={slideInFromBottom} className="pb-20 items-center">
          <div className="px-20 md:px-48 lg:px-[30rem]">
            <Image loader={imageLoader} src={Flower} alt="divider" />
          </div>
          <div className='text-center mt-2'>
            <h2>Skills</h2>
          </div>
          <Slider {...settings} className="mx-2 my-3 md:mx-48 lg:mx-56">
            <div>
              <SiAdobexd size={25} color="#450135" />
              <p className='text-[#45013] text-[0.5rem] font-bold mt-1 '>Adobe Xd</p>
            </div>
            <div>
              <SiFigma size={25} color="#9d56f7" />
              <p className='text-[#45013] text-[0.5rem] font-bold mt-1 '>Figma</p>
            </div>
            <div>
              <SiPython size={25} color="#326a96" />
              <p className='mt-1 text-[0.5rem] font-bold'>Python</p>
            </div>
            <div>
              <DiDjango size={25} color="#092d1f" />
            </div>
            <div>
              <SiJavascript size={25} color="#efd81d" />
              <p className='mt-1 text-[0.5rem] font-bold'>Javascript</p>
            </div>
            <div>
              <SiReact size={25} color="#5ed3f3" />
              <p className='mt-1 text-[0.5rem] font-bold'>React</p>
            </div>
            <div>
              <TbBrandReactNative size={25} color="#5ed3f3" />
              <p className='mt-1 text-[0.5rem] font-bold'>React Native</p>
            </div>
            <div>
              <SiHtml5 size={25} color="#dd4b25" />
              <p className='mt-1 text-[0.5rem] font-bold'>Html</p>
            </div>
            <div>
              <SiCss3 size={25} color="#254bdd" />
              <p className='mt-1 text-[0.5rem] font-bold'>CSS</p>
            </div>
            <div>
              <SiTailwindcss size={25} color="#36b7f0" />
              <p className='mt-1 text-[0.5rem] font-bold'>Tailwind CSS</p>
            </div>

            <div>
              <DiSass size={25} color="#c76494" />

            </div>

            <div>
              <SiAzuredevops size={25} color="#1391f7" />
              <p className='mt-1 text-[0.5rem] font-bold'>Devops</p>
            </div>
            <div>
              <SiDocker size={25} color="#00a5d3" />
              <p className='mt-1 text-[0.5rem] font-bold'>Docker</p>
            </div>
            <div>
              <SiKubernetes size={25} color="#306adf" />
              <p className='mt-1 text-[0.5rem] font-bold'>Kubernetes</p>
            </div>
            <div>
              <SiGithub size={25} color="#1a1e22" />
              <p className='mt-1 text-[0.5rem] font-bold'>Github</p>
            </div>
            <div>
              <SiPostgresql size={25} color="#31648c" />
              <p className='mt-1 text-[0.5rem] font-bold'>Postgresql</p>
            </div>
            <div>
              <SiMysql size={25} color="#005e88" />
              <p className='mt-1 text-[0.5rem] font-bold'>Mysql</p>
            </div>

            <div>
              <SiSolidity size={25} color="#363636" />
              <p className='mt-1 text-[0.5rem] font-bold'>Solidity</p>
            </div>
            <div>
              <SiEthereum size={25} color="#5b6087" />
              <p className='mt-1 text-[0.5rem] font-bold'>Ethereum</p>
            </div>

          </Slider>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
