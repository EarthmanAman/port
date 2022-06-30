
import Footer from '../components/footer';
import Header from '../components/head';
import NavBar from '../components/home/nav';

export default function Contact() {

    return (
        <div>
            <Header />

            <div className='h-screen px-28 py-1'>
                <NavBar />
                <div className='text-right my-10'>
                    <p>Mombasa, Kenya</p>
                    <p>contact@hashimathman.com</p>
                    <p>+254 701467872</p>
                </div>

                <div className='mb-8'>
                    <h3>Love to hear from you!</h3>
                    <h3>Get in touch! <span className='text-lg'>&#128075;</span> !</h3>
                </div>

                <div>
                    <form>
                        <div className='flex space-x-8'>
                            <div className='flex flex-col space-y-3'>
                                <label className='font-Montserrat'>Your Name</label>
                                <input type="text" className='border-solid border-2 border-gray-500 h-10 rounded-lg w-96' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-Montserrat'>Your Email</label>
                                <input type="text" className='border-solid border-2 border-black h-10 rounded-lg w-96' />
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>


        </div>
    )
}
