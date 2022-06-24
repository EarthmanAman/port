import Image from 'next/image'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function NavBar() {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-full'>
                <ul className='flex items-center'>

                    <li className='mr-10 text-xs font-bold'>WORKS</li>
                    <li className='mr-10 text-xs font-bold'>CONTACT</li>
                    <li className='mr-10 text-xs font-bold'>RESUME</li>
                </ul>
            </div>

            <div className='w-full flex justify-center'>
                <Image src={"/../public/assets/logo.ico"} width="50" height="50" alt="logo" />
            </div>

            <div className='w-full'>
                <div className='flex justify-end'>
                    <div className='ml-4'>
                        <FaGithub size={15} color="#1a1e22" />
                    </div>
                    <div className='ml-4'>
                        <FaLinkedin size={15} color="#2764ac" />
                    </div>
                    <div className='ml-4'>
                        <FaTwitter size={15} color="#1c96e8" />
                    </div>
                    <div className='ml-4'>
                        <FaInstagram size={15} color="#f60961" />
                    </div>
                </div>
            </div>

        </div>
    )
}
