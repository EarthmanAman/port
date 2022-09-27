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
import CompanyLogo from "../public/assets/opl_logo.png"
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
                        <Image loader={imageLoader} src={CompanyLogo} alt="divider" />
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

                <div className='text-center py-10 pb-2'>
                    <motion.div variants={fadeIn} className="px-28 md:px-56 lg:px-[30rem]">
                        <Image loader={imageLoader} src={Flower} alt="divider" />
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <h3 className='font-bold'>PROBLEM STATEMENT</h3>
                    </motion.div>
                    <motion.div variants={fadeIn} className='my-3 mt-7 px-10'>
                        <p className='leading-8 text-sm mb-3'>One Petroleum is a company located in Mombasa Kenya. It deals in oil products Petrol, diesel, and kerosine. To allow distribution across the country, they have depots across the country</p>
                        <p className='leading-8 text-sm'>Daily each depot provides a daily report of sales. Unfortunately, they were using manual excel to do that which give the challenge of retrieval of previous records and performing some business intelligence on the data</p>
                    </motion.div>
                </div>



                <motion.div variants={fadeIn} className='flex flex-wrap text-center md:text-left w-full my-16 md:px-10'>
                    <div className='w-full md:w-[60%] mb-5 md:pr-16'>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-8'>RESEARCH</h3>
                        <p className='leading-8 text-sm mb-3'>To understand the scope of the problem and find a solution, I talked to the depot managers and the management to find out how the current process works and identify requirements to be achieved in our solution.</p>
                        <p className='leading-8 text-sm mb-3'>I also analyzed the old reports and identify the data which are similar in all the depots and the ones unique to a given depot.</p>
                        <p className='leading-8 text-sm mb-3'>I then organized a meeting with the stakeholders to identify the type of data they want and how to accommodate the uniqueness of the data in the depots.</p>



                    </div>
                    <div className='h-auto w-full md:w-[40%] px-16 order-first md:order-last mb-10'>
                        <Image loader={imageLoader} layout='responsive' src={Research} alt="research" width={200} height={200} />
                    </div>
                </motion.div>


                <motion.div variants={fadeIn} className='text-center py-2'>

                    <motion.div variants={fadeIn}>
                        <h3 className='font-bold'>FINDINGS</h3>
                    </motion.div>
                    <motion.div variants={fadeIn} className='my-3 mt-7 px-10 w-full'>
                        <div className='px-8 w-full'>
                            <div className='flex justify-center items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>The depot managers prefer the usage of excel because of is easy to update and correct errors in sales.</p>
                            </div>

                            <div className='flex justify-center items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>There is no uniqueness in the data field it’s only that some sales do not contain that information.</p>
                            </div>

                            <div className='flex justify-center items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>There are different categories of sales. Some sales are just transfers from one depot to another.
                                </p>
                            </div>

                            <div className='flex justify-center items-center space-x-2 mb-4'>
                                <span><SiCodemagic /></span>
                                <p>Several depot managers manage more than one depot
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>

                <motion.div variants={fadeIn} className='flex flex-wrap text-center md:text-right w-full my-24 px-10'>
                    <div className='h-auto w-full md:w-[40%] px-16'>
                        <Image loader={imageLoader} layout='responsive' src={Solution} alt="research" width={200} height={200} />
                    </div>

                    <div className='w-full md:w-[60%] mb-5 md:pl-16'>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl mb-8'>PROPOSED SOLUTION</h3>
                        <p className='leading-8 text-sm mb-3'>After analyzing the problem and the finding from the research, I proposed to implement an online portal where the depot manager will be uploading their daily reports.</p>
                        <p className='leading-8 text-sm mb-3'>To allow ease of modification of sales and error corrections on the sales. The mode of data upload I proposed to be through a standard excel sheet which was approved by the management.</p>
                        <p className='leading-8 text-sm mb-3'>With the data collected, graphs and trends will be generated automatically in the portal.</p>

                    </div>

                </motion.div>
            </motion.div >

            <Footer />

        </motion.div >
    )
}
