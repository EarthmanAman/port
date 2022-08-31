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
    return (
        <div>
            <Header />

            <div className=' px-28 py-1'>
                <NavBar />
                <div className='my-10'>
                    <h3 className='font-bold'>Spadequiz & Gaming tracking</h3>
                    <div className='my-5 flex space-x-6'>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <BsTools size={20} />
                            <p className='font-bold'>Technologies</p>
                        </div>
                        <h1>:</h1>
                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiAdobexd size={20} color="#450135" />
                            <p className='font-bold'>Adobe</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiPython size={20} color="#326a96" />
                            <p className='font-bold'>Python</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <DiDjango size={20} color="#092d1f" />
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiReact size={20} color="#5ed3f3" />
                            <p className='font-bold'>React</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiCss3 size={20} color="#254bdd" />
                            <p className='font-bold'>CSS</p>
                        </div>

                        <div className='flex space-x-2 items-center  bg-slate-100 px-2 py-1 rounded-md'>
                            <SiPostgresql size={20} color="#31648c" />
                            <p className='font-bold'>Postgresql</p>
                        </div>

                    </div>
                    <div className='my-3 mt-10 '>
                        <p className='leading-8 text-lg'>A portal to enable players find tournaments and be rated from winning games.</p>
                        <p className='leading-8 text-lg'>When a player loses a game he/she report the results</p>
                    </div>
                    <div className='my-8 w-72 flex justify-between'>
                        <button className='bg-[#304577] py-1.5 px-5 rounded-md shadow-md shadow-gray-400 text-white'>
                            <div className='flex items-center justify-between'>
                                <FaEye />
                                <p className='ml-2'>Preview</p>
                            </div>

                        </button>
                        <button className='bg-[#D04D30] py-1.5 px-5 rounded-md shadow-md shadow-gray-400 text-white'>
                            <div className='flex items-center justify-between'>
                                <SiMinutemailer />
                                <p className='ml-2'>Request Demo</p>
                            </div>

                        </button>
                    </div>
                </div>

                <div className='w-full'>
                    <Slider {...settings} className=" my-10">
                        <div className='w-full  p-5'>
                            <Image loader={imageLoader} layout='responsive' src={SpadequizMain} alt="hero image" className='rounded-lg' />
                        </div>
                        <div className='w-full  p-5'>
                            <Image loader={imageLoader} layout='responsive' src={Admin} alt="hero image" className='rounded-lg' />
                        </div>
                        <div className='w-full  p-5'>
                            <Image loader={imageLoader} layout='responsive' src={Announcements} alt="hero image" className='rounded-lg' />
                        </div>
                        <div className='w-full p-5'>
                            <Image loader={imageLoader} layout='responsive' src={Report} alt="hero image" className='rounded-lg' />
                        </div>
                    </Slider>

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
                </div>
            </div >

            <Footer />

        </div >
    )
}
