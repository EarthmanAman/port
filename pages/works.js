import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import NavBar from '../components/home/nav'
import OplScreen from "../public/assets/works/opl_screen.png"
import OnlineDuka from "../public/assets/works/duka_home.png"
import Flower from "../public/assets/flower.png"

import SpadeQuiz from "../public/assets/works/spadequiz.png"
import Bill from "../public/assets/works/bill.png"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { motion } from "framer-motion"
import Slider from 'react-slick';
import Footer from '../components/footer';
import { fadeIn, stagger } from '../components/animations';

const imageLoader = require("../loader");

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return (
        <motion.div initial="initial" animate="animate">
            <Head>
                <title>Hashim Athman | Full Stack developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>

            <motion.div variants={stagger} className='h-screen w-full px-4 lg:px-28 py-1'>
                <NavBar />

                <div className="px-28 md:px-48 lg:px-[30rem]">
                    <Image loader={imageLoader} src={Flower} alt="divider" />
                </div>

                <motion.div variants={fadeIn} className='m-5 mt-0 lg:m-10'>
                    <h3>Hello good people <span className='text-lg'>&#128075;</span></h3>
                    <h3>Below are some of my work. Open them to see magic <span className='text-lg'>&#10024; &#128586;</span></h3>
                    {/* <h3>UI/UX Design, Backend, Frontend or Both </h3> */}
                </motion.div>

                <motion.div variants={fadeIn} className='mx-5 grid grid-cols-2 md:grid-cols-3 gap-2 mb-5'>
                    <Link href="/opl_project" >
                        <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-md group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer border-[0.02rem] p-1 border-[#6a0dad]'>
                            <Image loader={imageLoader} src={OplScreen} alt="work 1" className='rounded-md group-hover:opacity-10' />
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h2 className='text-[#fafafa]'>OPL Dashboard</h2>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href="/spadequiz">
                        <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-md group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer border-[0.02rem] p-1 border-[#6a0dad]'>
                            <Image loader={imageLoader} src={SpadeQuiz} alt="work 1" className='rounded-md group-hover:opacity-10 w-full h-auto' />
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h2 className='text-[#fafafa]'>SpadeQuiz</h2>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href="/bill">
                        <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-md p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer border-[0.02rem] p-1 border-[#6a0dad]'>
                            <Image loader={imageLoader} src={Bill} alt="work 1" className='rounded-md group-hover:opacity-10' />
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h2 className='text-[#fafafa]'>Bill Management</h2>
                            </div>
                        </motion.div>
                    </Link>
                {/* </motion.div>

                <motion.div variants={fadeIn} className='grid md:grid-cols-2 gap-5 mb-5'> */}
                    <Link href="/opl_project">
                        <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-md group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer border-[0.02rem] p-1 border-[#6a0dad]'>
                            <Image loader={imageLoader} src={OnlineDuka} alt="work 1" className='rounded-md group-hover:opacity-10' />
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h2 className='text-[#fafafa]'>Online Duka</h2>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/opl_project">
                        <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-md group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer border-[0.02rem] p-1 border-[#6a0dad]'>
                            <Image loader={imageLoader} src={OnlineDuka} alt="work 1" className='rounded-md group-hover:opacity-10' />
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h2 className='text-[#fafafa]'>Online Duka</h2>
                            </div>
                        </motion.div>
                    </Link>

                </motion.div>


                <motion.div variants={fadeIn} className=' border-solid border-t-2 border-[#16151] mt-10 py-10 px-10 lg:px-36 text-center'>

                    <Slider {...settings} className="">
                        <div>
                            <div className='relative'>
                                <span className='absolute left-0 top-0'><RiDoubleQuotesL /></span>
                                <p className='text-xl lg:text-2xl px-3'>

                                    I have worked with Hashim, he is a good developer and knows what he is doing. I delivered ecery milestone of the project on time.
                                    I highly recommend him.
                                </p>

                                <span className='absolute right-16 bottom-2'><RiDoubleQuotesR /></span>
                            </div>
                            <div className='my-8'>
                                <p className='font-bold text-base'>John Doe</p>
                                <p>Product manager <span className='text-blue-700'>company</span></p>
                            </div>
                        </div>

                        <div>
                            <div className='relative'>
                                <span className='absolute left-0 top-0'><RiDoubleQuotesL /></span>
                                <p className='text-xl lg:text-2xl px-3'>

                                    I have worked with Hashim, he is a good developer and knows what he is doing. I delivered ecery milestone of the project on time.
                                    I highly recommend him.
                                </p>

                                <span className='absolute right-16 bottom-2'><RiDoubleQuotesR /></span>
                            </div>
                            <div className='my-8'>
                                <p className='font-bold text-base'>John Doe</p>
                                <p>Product manager <span className='text-blue-700'>company</span></p>
                            </div>
                        </div>

                        <div>
                            <div className='relative'>
                                <span className='absolute left-0 top-0'><RiDoubleQuotesL /></span>
                                <p className='text-xl lg:text-2xl px-3'>

                                    I have worked with Hashim, he is a good developer and knows what he is doing. I delivered ecery milestone of the project on time.
                                    I highly recommend him.
                                </p>

                                <span className='absolute right-16 bottom-2'><RiDoubleQuotesR /></span>
                            </div>
                            <div className='my-8'>
                                <p className='font-bold text-base'>John Doe</p>
                                <p>Product manager <span className='text-blue-700'>company</span></p>
                            </div>
                        </div>

                    </Slider>
                </motion.div>

                <Footer />
            </motion.div>


        </motion.div>
    )
}
