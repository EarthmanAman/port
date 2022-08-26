import Image from 'next/image'
import Link from "next/link";

import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

import { slideInFromTop } from '../animations';
import Logo from '../../public/assets/logo.ico'
const imageLoader = require("../../loader");
export default function NavBar() {
    return (
        <motion.div variants={slideInFromTop} className='flex justify-between items-center'>
            <div className='w-full'>
                <ul className='flex items-center'>

                    <li className='mr-10 text-xs font-bold'>
                        <Link href="/" >
                            HOME
                        </Link>
                    </li>

                    <li className='mr-10 text-xs font-bold'>
                        <Link href="/works">
                            WORKS
                        </Link>
                    </li>

                    <li className='mr-10 text-xs font-bold'>
                        <Link href="/about">
                            ABOUT
                        </Link>
                    </li>

                    {/* <li className='mr-10 text-xs font-bold'>
                        <Link href="/contact">
                            CONTACT
                        </Link>
                    </li> */}

                </ul>
            </div>

            <div className='w-full flex justify-center'>
                <Image loader={imageLoader} src={Logo} width="50" height="50" alt="logo" />
            </div>

            <div className='w-full'>
                <div className='flex justify-end'>
                    <div className='ml-4'>
                        <a href='https://github.com/EarthmanAman' target="_blank">
                            <FaGithub size={15} color="#1a1e22" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <a href='https://linkedin.com/in/hashim001/' target="_blank">
                            <FaLinkedin size={15} color="#2764ac" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <a href='https://twitter.com/Hashim_athman_' target="_blank">
                            <FaTwitter size={15} color="#1c96e8" />
                        </a>
                    </div>
                    <div className='ml-4'>
                        <FaInstagram size={15} color="#f60961" />
                    </div>
                </div>
            </div>

        </motion.div >
    )
}
