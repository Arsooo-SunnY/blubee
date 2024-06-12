import Link from "next/link";

const AboutUs = () => {
    const logoImage = './BluBee.png'

    return (
        <div className="bg-custom-gradient h-[100vh]">
            <nav className='flex flex-row'>
                <Link href="/">
                <div className='flex flex-row ml-10 pt-5'>
                    <img src={logoImage} alt="BluBee Logo" className='w-12 h-12 mr-1' />
                    <h1><span className='text-5xl font-bold'>BluBee</span><span className='text-3xl'>.AI</span></h1>
                </div>
                </Link>
                <div className='space-x-10 text-xl font-medium pt-7 ml-auto mr-10'>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/about" className="font-extrabold">About Us</Link>
                </div>
            </nav>
            <div className="w-[80vw] mx-auto py-20 font-medium text-lg">
                <h1 className="text-center text-3xl font-semibold mb-10">Founder's Note</h1>
                <span className="font-semibold text-2xl">Hello!</span>
                <br /><br />
                Welcome to BluBee.ai, where your career aspirations take flight with the help of cutting-edge AI technology. My name is Sunny Chawla, and I am founder of BluBee.ai with a prime vision: to empower oneself to navigate through career path with confidence and ease.
                <br /><br />
                Having navigated many twists and turns in own professional journey, I understand the challenges and uncertainties that come with career progression. That’s why at BluBee.ai, we are passionate about offering personalized, AI-driven solutions that help demystify the job market and help to align skills with fulfilling opportunities.
                <br /><br />
                Our mission is simple yet ambitious—to provide each one with insights, tools, and support that make a real difference in their career. Whether you're considering a job change, seeking to upskill, or exploring new industries, BluBee.ai is here to guide at every step of the way.
                <br /><br />
                A platform harnesses the power of sophisticated algorithms to deliver career advice that’s tailored just for you. From job matching and skill assessment to market trends and growth opportunities, we strive to equip you with everything you need to be informed for making decisions about your future.
                <br /><br />
                Thank you for exploring BluBee.ai as your career partner. We will be excited to be part of your career journey and can't wait to see where your career takes you.
                <br /><br />
                <span className="font-semibold">Warm regards,</span>
                <br />
                Sunny Chawla<br />
                Founder, BluBee.ai
            </div>
        </div>
    )
}

export default AboutUs;
