import Image from 'next/image'
import { FaEye } from "react-icons/fa"
import {
    SiMinutemailer,
    SiAdobexd, SiPython, SiReact, SiCss3, SiPostgresql,
} from "react-icons/si"
import { DiDjango, DiSass } from "react-icons/di"
import { BsTools } from "react-icons/bs"

import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';
import Slider from "react-slick";
import SpadequizMain from "../public/assets/works/spadequiz.png"
import Admin from "../public/assets/works/admin.png"
import Announcements from "../public/assets/works/announcements.png"
import Report from "../public/assets/works/report.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"
import { fadeIn, stagger } from '../components/animations';
import Flower from "../public/assets/flower.png"
import Upwork from "../public/assets/upwork.png"

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
                        <Image loader={imageLoader} src={Upwork} alt="divider" />
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <h3 className='font-bold text-lg md:text-xl lg:text-2xl text-center'>Spadequiz A Gaming Tracking Platform</h3>
                    </motion.div>
                    <motion.div variants={fadeIn} className='my-5 flex flex-wrap justify-center space-x-2 space-y-2'>
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
                            <SiCss3 size={18} color="#254bdd" />
                            <p className='font-bold'>CSS</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiPostgresql size={18} color="#31648c" />
                            <p className='font-bold'>Postgresql</p>
                        </div>

                    </motion.div>

                </div>

                <motion.div variants={fadeIn} className='w-full'>
                    <div className='hidden md:hidden lg:block'>
                        <Slider {...settings} className=" my-10">
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={SpadequizMain} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Admin} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Announcements} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Report} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>

                    <div className='lg:hidden'>
                        <Slider {...settings2} className=" my-10">
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={SpadequizMain} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Admin} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Announcements} alt="hero image" className='rounded-lg' />
                            </div>
                            <div className='w-full mr-2 border-2'>
                                <Image loader={imageLoader} layout='responsive' src={Report} alt="hero image" className='rounded-lg' />
                            </div>
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <motion.div variants={fadeIn} className="px-28 md:px-56 lg:px-[30rem]">
                            <Image loader={imageLoader} src={Flower} alt="divider" />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <h3 className='font-bold'>PROJECT DESCRIPTION</h3>
                        </motion.div>
                        <motion.div variants={fadeIn} className='my-3 mt-7 px-10'>
                            <p className='leading-8 text-sm mb-3'>While working as a freelancer in Upwork, I got a client who wanted an online platform where admins can create leagues and board game players can register in a league and track their wins and losses against other players.</p>
                            <p className='leading-8 text-sm'>Each league has an admin who controls the rules governing the league and can create tournaments where league members can participate.</p>
                            <p className='leading-8 text-sm'>When a user joins the platform he/she is provided ratings and the ratings are reduced or increased by losing or winning matches respectively</p>
                            <p className='leading-8 text-sm'>When two players are matched to play against each other they can play the game online or physically and the loser reports the match result on the platform.</p>
                        </motion.div>
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
