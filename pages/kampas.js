import Image from 'next/image'
import { FaEye } from "react-icons/fa"
import {
    SiMinutemailer, SiPython, SiHtml5, SiCss3
} from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { BsTools } from "react-icons/bs"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';

import KHome from "../public/assets/works/KampasHome.png"
import Banner from "../public/assets/works/kampasBanner.png"
import Detail from "../public/assets/works/kampasDetail.png"
import Checkout from "../public/assets/works/kampasCheckout.png"

import { motion } from "framer-motion"
import { fadeIn, stagger } from '../components/animations';

import Flower from "../public/assets/flower.png"

const imageLoader = require("../loader");

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <motion.div initial="initial" animate="animate">
            <Header />

            <motion.div variants={stagger} className=' px-8 md:px-20 lg:px-28 py-1'>
                <NavBar />

                <div className='my-5'>
                    <motion.div variants={fadeIn} className="px-28 md:px-56 lg:px-[30rem]">
                        <Image loader={imageLoader} src={Flower} alt="divider" />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl text-center lg:text-left'>Kampas Market</h3>
                    </motion.div>


                    <motion.div variants={fadeIn} className='my-5 flex flex-wrap space-x-2 space-y-2'>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <BsTools size={14} />
                            <p className='font-bold'>Technologies</p>
                        </div>
                        <h1>:</h1>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiPython size={18} color="#326a96" />
                            <p className='font-bold'>Python</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <DiDjango size={18} color="#092d1f" />
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiHtml5 size={18} color="#dd4b25" />
                            <p className='font-bold'>Html5</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiCss3 size={18} color="#254bdd" />
                            <p className='font-bold'>CSS</p>
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn} className='my-3 mt-7 px-2'>
                        <p className='leading-8 text-sm'>An ecommerce site designed for campus student.</p>
                        <p className='leading-8 text-sm'>The target was to provide fast delivery of items across the campus.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} className='my-5 w-72 flex justify-between'>
                        <button className='bg-[#304577] py-1.5 px-5 rounded-md shadow-md shadow-gray-400 text-white'>
                            <a href='https://kampasmarket.hashimathman.com/' target="_blank">
                                <div className='flex items-center justify-between'>
                                    <FaEye />
                                    <p className='ml-2'>Preview</p>
                                </div>
                            </a>

                        </button>
                        <button className='bg-[#D04D30] py-1.5 px-5 rounded-md shadow-md shadow-gray-400 text-white'>
                            <div className='flex items-center justify-between'>
                                <SiMinutemailer />
                                <p className='ml-2'>Request Demo</p>
                            </div>

                        </button>
                    </motion.div>
                </div>

                <motion.div variants={fadeIn} className='w-full'>
                    <div className='hidden md:hidden lg:block'>
                        <Slider {...settings} className=" my-10">
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={KHome} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Banner} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Detail} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Checkout} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>

                    <div className='lg:hidden'>
                        <Slider {...settings2} className="my-10 ">
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={KHome} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Banner} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Detail} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Checkout} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>


                    {/* <div className='my-5 flex space-x-6'>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-3 py-2 rounded-md'>
                            <BsTools size={25} />
                            <p className='font-bold'>Technologies</p>
                        </div>
                        <h1>:</h1>
                        <div className='flex space-x-2 items-center  bg-slate-200 px-3 py-2 rounded-md'>
                            <SiAdobexd size={25} color="#450135" />
                            <p className='font-bold'>Adobe</p>
                        </div>

                        <div className='flex space-x-2 items-center bg-slate-200 px-3 py-2 rounded-md'>
                            <SiPython size={25} color="#326a96" />
                            <p className='font-bold'>Python</p>
                        </div>

                        <div className='flex space-x-2 items-center bg-slate-200 px-3 py-2 rounded-md'>
                            <DiDjango size={25} color="#092d1f" />
                        </div>

                        <div className='flex space-x-2 items-center bg-slate-200 px-3 py-2 rounded-md'>
                            <SiReact size={25} color="#5ed3f3" />
                            <p className='font-bold'>React</p>
                        </div>

                        <div className='flex space-x-2 items-center bg-slate-200 px-3 py-2 rounded-md'>
                            <DiSass size={25} color="#c76494" />
                        </div>

                    </div> */}
                </motion.div>
            </motion.div >

            <Footer />

        </motion.div >
    )
}
