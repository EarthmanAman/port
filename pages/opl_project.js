import Image from 'next/image'
import { FaEye } from "react-icons/fa"
import {
    SiMinutemailer, SiCodemagic,
    SiAdobexd, SiPython, SiReact, SiHtml5, SiPostgresql,
} from "react-icons/si"
import { DiDjango, DiSass } from "react-icons/di"
import { BsTools } from "react-icons/bs"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';

import OplScreen from "../public/assets/works/main_screen.png"
import OplGraphs from "../public/assets/works/monthly1.png"
import OplSales from "../public/assets/works/sale_pic.png"
import Customer from "../public/assets/works/customer1.png"

import Research from "../public/assets/research.svg"
import Solution from "../public/assets/solution.svg"

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
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl text-center '>OPL Daily Reporting & BI Tool</h3>
                    </motion.div>


                    <motion.div variants={fadeIn} className='my-5 flex flex-wrap space-x-2 space-y-2 justify-center'>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <BsTools size={14} />
                            <p className='font-bold'>Technologies</p>
                        </div>
                        <h1>:</h1>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiAdobexd size={18} color="#450135" />
                            <p className='font-bold'>Adobe</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiPython size={18} color="#326a96" />
                            <p className='font-bold'>Python</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <DiDjango size={18} color="#092d1f" />
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiReact size={18} color="#5ed3f3" />
                            <p className='font-bold'>React</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <DiSass size={18} color="#c76494" />
                        </div>

                    </motion.div>

                </div>

                <motion.div variants={fadeIn} className='w-full'>
                    <div className='hidden md:hidden lg:block'>
                        <Slider {...settings} className=" my-10">
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplScreen} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplGraphs} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplSales} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Customer} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>

                    <div className='lg:hidden'>
                        <Slider {...settings2} className="my-10 ">
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplScreen} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplGraphs} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full   mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={OplSales} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full  mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Customer} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>

                </motion.div>

                <div className='text-center'>
                    <motion.div variants={fadeIn} className="px-28 md:px-56 lg:px-[30rem]">
                        <Image loader={imageLoader} src={Flower} alt="divider" />
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <h3 className='font-bold'>PROBLEM STATEMENT</h3>
                    </motion.div>
                    <motion.div variants={fadeIn} className='my-3 mt-7 px-10'>
                        <p className='leading-8 text-sm mb-3'>While on campus I had the idea of developing an e-commerce site to help serve the student around the campus to obtain small goods without having to go to town to buy or get from agents of various e-commerce sites.</p>
                        <p className='leading-8 text-sm'>Our model was simple: you order, we accumulate the orders, go to town, fetch them, and deliver them to our customer dorm rooms.</p>
                    </motion.div>
                </div>

                <div className='flex flex-wrap text-center md:text-left w-full my-24 md:px-10'>
                    <div className='w-full md:w-[60%] mb-5 md:pr-16'>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-8'>RESEARCH & FINDINGS</h3>
                        <p className='leading-8 text-sm mb-3'>While on campus I had the idea of developing an e-commerce site to help serve the student around the campus to obtain small goods without having to go to town to buy or get from agents of various e-commerce sites.</p>

                        <div className='px-8'>
                            <div className='flex items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>First item will go here</p>
                            </div>

                            <div className='flex items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>First item will go here</p>
                            </div>

                            <div className='flex items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>First item will go here</p>
                            </div>

                        </div>

                    </div>
                    <div className='h-auto w-full md:w-[40%] px-16 order-first md:order-last mb-10'>
                        <Image loader={imageLoader} layout='responsive' src={Research} alt="research" width={200} height={200} />
                    </div>
                </div>


                <div className='flex flex-wrap text-center md:text-right w-full my-24 px-10'>
                    <div className='h-auto w-full md:w-[40%] px-16'>
                        <Image loader={imageLoader} layout='responsive' src={Solution} alt="research" width={200} height={200} />
                    </div>

                    <div className='w-full md:w-[60%] mb-5 md:pl-16'>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-8'>PROPOSED SOLUTION</h3>
                        <p className='leading-8 text-sm mb-3'>While on campus I had the idea of developing an e-commerce site to help serve the student around the campus to obtain small goods without having to go to town to buy or get from agents of various e-commerce sites.</p>



                    </div>

                </div>
            </motion.div >

            <Footer />

        </motion.div >
    )
}
