import Head from 'next/head'
import Image from 'next/image'
import Iframe from 'react-iframe'

import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';
import Profile from '../public/assets/pic.jpg'

const imageLoader = require("../loader");

export default function Home() {

    return (
        <div>
            <Header />

            <div className='h-screen px-28 py-1'>
                <NavBar />
                <div className='flex'>
                    <div className='px-10 py-20'>
                        <div className='mb-10'>
                            <h5>Hello good people! <span className='text-lg'>&#128075;</span> !</h5>
                            <h5>My name is Hashim Athman, a Full Stack Developer based in Kenya.</h5>
                        </div>
                        <p className='tracking-wide leading-7'>I’ve always admired how thoughtful design has the power to change our world. Whether
                            it’s through simplifying one interaction or giving users an opportunity to view things through a new lens, I love working on projects that make people happy. At any scale. In the past few years,
                            I’ve found myself in language learning, motion media, visual design, front-end, and smart education.</p>
                    </div>
                    <div className='p-16'>
                        <Image loader={imageLoader} src={Profile} alt="profile pic" className='rounded-lg' />
                    </div>
                </div>

                <div className='flex space-x-4 py-12 border-solid border-y-2'>
                    <div>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                    <div>
                        <Image loader={imageLoader} src={Profile} alt="pic 1" />
                    </div>
                </div>

                <div className='py-10 text-center'>
                    <h5>Plus, here are some things that inspire me.</h5>
                </div>

                <div className='mb-14'>
                    <div className='flex space-x-7 w-full h-60 mb-5'>
                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/54ZCz8mc7jE"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/AqqMtcabNr8"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/54ZCz8mc7jE"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                    </div>

                    <div className='flex space-x-7 w-full h-60 mb-5'>
                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/54ZCz8mc7jE"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/AqqMtcabNr8"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                        <div className='w-full h-full'>
                            <Iframe
                                url="https://www.youtube.com/embed/54ZCz8mc7jE"
                                width='100%'
                                height='100%'
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>


        </div>
    )
}
