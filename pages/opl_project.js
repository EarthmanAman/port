import Image from 'next/image'

import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';

import OplScreen from "../public/assets/works/o.png"

export default function Home() {

    return (
        <div>
            <Header />

            <div className='h-screen px-28 py-1'>
                <NavBar />

                <div className='w-full h-85 overflow-hidden shadow-md shadow-gray-400'>
                    <Image src={OplScreen} alt="hero image" />
                </div>
            </div>

            <Footer />

        </div>
    )
}
