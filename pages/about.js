import Head from 'next/head'
import Image from 'next/image'
import Iframe from 'react-iframe'

import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';
import Profile from '../public/assets/pic.jpg'
import Collage from '../public/assets/c1.jpg'

const imageLoader = require("../loader");

export default function Home() {

    return (
        <div>
            <Header />

            <div className='h-screen px-6 md:px-16 lg:px-28 py-1'>
                <NavBar />
                <div className='flex flex-wrap md:mt-10 lg:mt-0'>
                    <div className='px-5 py-15 lg:px-10 lg:py-20 md:order-first md:flex-1'>
                        <div className='mb-5 lg:mb-10'>
                            <h5>Hello good people! <span className='text-lg'>&#128075;</span> !</h5>
                            <h5>My name is Hashim Athman, a Full Stack Developer based in Kenya.</h5>
                        </div>
                        <p className='tracking-wide leading-7'>I’ve always admired how thoughtful design has the power to change our world. Whether
                            it’s through simplifying one interaction or giving users an opportunity to view things through a new lens, I love working on projects that make people happy. At any scale. In the past few years,
                            I’ve found myself in language learning, motion media, visual design, front-end, and smart education.</p>
                    </div>
                    <div className='p-8 order-first lg:p-16 md:flex-1 md:h-80 lg:h-96 overflow-hidden'>
                        <Image loader={imageLoader} src={Collage} alt="profile pic" className='rounded-lg' />
                    </div>
                </div>

                <div className='w-full flex flex-wrap space-x-1 md:space-x-4 py-12 border-solid border-y-2 mt-5'>
                    <div className='w-[48%] ml-1 md:flex-1'>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div className='w-[48%] md:flex-1'>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div className='w-[48%] md:flex-1'>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div className='w-[48%] md:flex-1'>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                </div>

                <div className='py-10 text-center'>
                    <h5>Plus, here are some things that inspire me.</h5>
                </div>


                <div className='flex flex-wrap space-y-4 w-full h-60 mb-5 p-5 md:space-y-0 md:space-x-2'>
                    <div className='w-full h-auto md:flex-1'>
                        <Iframe
                            url="https://www.youtube.com/embed/54ZCz8mc7jE"
                            width='100%'
                            height='100%'
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen={true}
                        />
                    </div>

                    <div className='w-full h-full md:flex-1'>
                        <Iframe
                            url="https://www.youtube.com/embed/AqqMtcabNr8"
                            width='100%'
                            height='100%'
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen={true}
                        />
                    </div>

                    <div className='w-full h-full md:flex-1'>
                        <Iframe
                            url="https://www.youtube.com/embed/54ZCz8mc7jE"
                            width='100%'
                            height='100%'
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen={true}
                        />
                    </div>

                </div>

                <div className='relative mt-96 md:mt-0 lg:mt-0'>
                    <Footer />
                </div>
            </div>


        </div>
    )
}
