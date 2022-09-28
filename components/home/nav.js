import Image from 'next/image'
import Link from "next/link";

import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

import { slideInFromTop } from '../animations';
import Logo from '../../public/assets/flower.png'
const imageLoader = require("../../loader");
export default function NavBar() {
    return (
        <motion.div variants={slideInFromTop} className='flex flex-wrap justify-between items-center px-16'>
            <div className='w-full mb-3 md:flex-1 lg:order-first'>
                <ul className='flex items-center justify-center md:justify-start'>

                    <li className='mr-5 md:mr-10 text-[0.8rem] border-b-2 border-[#f60961] font-bold'>
                        <Link href="/">
                            HOME
                        </Link>
                    </li>

                    <li className='mr-5 lg:mr-10 text-[0.9rem] border-b-2 font-bold'>
                        <Link href="/works">
                            WORKS
                        </Link>
                    </li>

                    <li className='mr-5 lg:mr-10 text-[0.9rem] border-b-2 font-bold'>
                        <a href="https://docs.google.com/document/d/1CNtv6La75DhkSAkaXHDusPS23U_mm1PHFxJe1KNjmkw/edit?usp=sharing" target="_blank">
                            RESUME
                        </a>
                    </li>

                    {/* 
                    <li className='mr-5 lg:mr-10 text-[0.9rem] border-b-2 font-bold'>
                        <Link href="/about">
                            ABOUT
                        </Link>
                    </li> */}

                    {/* <li className='mr-10 text-xs font-bold'>
                        <Link href="/contact">
                            CONTACT
                        </Link>
                    </li> */}

                </ul>
            </div>

            <div className='w-full flex justify-center order-first mb-3 lg:flex-1'>
                <Image loader={imageLoader} src={Logo} width="50" height="50" alt="logo" />
            </div>

            <div className='w-full md:flex-1'>
                <div className='flex justify-center md:justify-end'>
                    <div className=''>
                        <a href='https://github.com/EarthmanAman' target="_blank">
                            <FaGithub size={14} color="#1a1e22" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <a href='https://linkedin.com/in/hashim001/' target="_blank">
                            <FaLinkedin size={14} color="#2764ac" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <a href='https://twitter.com/Hashim_athman_' target="_blank">
                            <FaTwitter size={14} color="#1c96e8" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <FaInstagram size={14} color="#f60961" />
                    </div>
                </div>
            </div>

        </motion.div >
    )
}
