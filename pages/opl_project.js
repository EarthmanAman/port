import Image from 'next/image'
import { FaEye } from "react-icons/fa"
import {
    SiMinutemailer,
    SiAdobexd, SiPython, SiReact, SiHtml5, SiPostgresql,
} from "react-icons/si"
import { DiDjango, DiSass } from "react-icons/di"
import { BsTools } from "react-icons/bs"

import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';

import OplScreen from "../public/assets/works/main_screen.png"
import OplGraphs from "../public/assets/works/monthly.png"
import OplSales from "../public/assets/works/sale_pic.png"
import Customer from "../public/assets/works/customer.png"

const imageLoader = require("../loader");

export default function Home() {

    return (
        <div>
            <Header />

            <div className=' px-28 py-1'>
                <NavBar />
                <div className='my-10'>
                    <h3 className='font-bold'>OPL Daily Reporting & BI Tool</h3>
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
                            <DiSass size={20} color="#c76494" />
                        </div>

                    </div>
                    <div className='my-3 mt-10 '>
                        <p className='leading-8 text-lg'>A portal which provide uploading of sales report from various depots</p>
                        <p className='leading-8 text-lg'>And shows trends of sales of the depots</p>
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
                    <div className='w-full flex space-x-2 mb-5'>
                        <div className='w-full shadow-xl shadow-gray-400'>
                            <Image loader={imageLoader} layout='responsive' src={OplScreen} alt="hero image" />
                        </div>
                        <div className='w-full shadow-xl shadow-gray-400'>
                            <Image loader={imageLoader} layout='responsive' src={OplGraphs} alt="hero image" />
                        </div>
                    </div>
                    <div className='w-full flex space-x-2 mb-5'>
                        <div className='w-full shadow-xl shadow-gray-400'>
                            <Image loader={imageLoader} layout='responsive' src={OplSales} alt="hero image" />
                        </div>
                        <div className='w-full shadow-xl shadow-gray-400'>
                            <Image loader={imageLoader} layout='responsive' src={Customer} alt="hero image" />
                        </div>
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
                </div>
            </div >

            <Footer />

        </div >
    )
}
