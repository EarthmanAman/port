
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='w-full flex flex-wrap justify-center items-center p-14 border-solid border-t-2 text-center'>
            <div className='w-full mb-3'>
                <p>&copy; 2022 Hashim Athman. All rights reserved </p>
            </div>

            <div className='w-full mb-3 flex justify-center'>
                <p>contact@hashimathman.com</p>
            </div>

            <div className='w-full'>
                <div className='flex justify-center  md:justify-end'>
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

        </footer >
    )
}
