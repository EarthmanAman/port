import Image from 'next/image'
import { FaTwitter, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

export default function NavBar() {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex-1 w-full'>
                <ul className='flex items-center'>
                    <li className='mr-10 text-xs font-bold'>WORKS</li>
                    <li className='mr-10 text-xs font-bold'>CONTACT</li>
                    <li className='mr-10 text-xs font-bold'>RESUME</li>
                </ul>
            </div>

            <div className='flex-1 w-full'>
                <Image src={"/../public/assets/logo.ico"} width="50" height="50" alt="logo" />
            </div>

            <div className='flex-1 w-full'>
                <div className='flex'>
                    <div className='ml-3'>
                        <FaGithub size={15} />
                    </div>
                    <div className='ml-3'>
                        <FaLinkedin size={15} />
                    </div>
                    <div className='ml-3'>
                        <FaTwitter size={15} />
                    </div>
                    <div className='ml-3'>
                        <FaFacebookF size={15} />
                    </div>
                </div>
            </div>

        </div>
    )
}
