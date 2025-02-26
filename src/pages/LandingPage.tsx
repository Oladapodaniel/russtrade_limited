
import HeroSection from '@/components/independent/HeroSection';
import GreenBGImage from '@/components/reusable/Green_BG_Image';
import React from 'react';
import GreenBGCard from '@/components/reusable/GreenBG_Card';
import { FilledButton } from '@/components/reusable/Button';
import { motion } from 'framer-motion';
import SubscribeNewLetter from '@/components/reusable/SubscribeNesLetter';
import { agriculture, financial_market, founder_colleagues, investment, oil_gas } from '@/constants/image';
import Marquee from "react-fast-marquee";

const LandingPage: React.FC = () => {
    const services = [
        {
            header: "Financial Advisory",
            image: financial_market
        },
        {
            header: "Oil & Gas",
            image: oil_gas
        },
        {
            header: "Agriculture",
            image: agriculture
        },
        {
            header: "Investment",
            image: investment
        },
    ]
    return (
        <div>
            <HeroSection />
            <div className='pt-[50px] bg-primary-foreground'>
                <GreenBGImage image={founder_colleagues}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="satoshi-black text-4xl text-header-text">We offer the best services</motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: 0.5 }} className='mt-5 text-header-text-foreground'>At Rusttrade Limited, we differentiate ourselves through a unique <br />blend of expertise, innovation, and personalized service. Our team of <br />seasoned professionals brings extensive experience in investment, finance, <br />and oil & gas, ensuring that our clients receive tailored solutions that <br />address their specific needs and challenges. We leverage cutting-edge market<br /> analysis and strategic planning to help businesses navigate complex landscapes<br /> and seize emerging opportunities</motion.div>
                        <div className='mt-10 flex justify-center sm:justify-start w-full'>
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8, delay: 0.7 }}>
                                <FilledButton
                                    text='Get Started'
                                />
                            </motion.div>
                        </div>
                    </div>
                </GreenBGImage>
            </div >
            <div className='container mx-auto py-[150px]'>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="satoshi-black text-4xl text-header-text text-center"
                >
                    The Perfect Solution to your business
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='header-text-foreground text-center mt-5'
                >
                    We offer a comprehensive range of services designed to meet the unique challenges. <br />Our expertise helps businesses thrive in a rapidly changing world.
                </motion.div>
                <div className='mt-20'>
                    <Marquee
                        pauseOnHover
                        speed={100}
                    >
                    <div className="flex flex-row items-center space-y-20 lg:space-y-0 space-x-20">
                        {services.map((i, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: (index + .5) * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className='relative w-[200px] h-[300px] overflow-hidden cursor-pointer rounded-tl-xl rounded-tr-xl'>
                                    <motion.img
                                        src={i.image}
                                        alt="service_image"
                                        className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
                                        whileHover={{ scale: 1.2 }}
                                    />
                                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-800 to-transparent p-4'>
                                        <div className='satoshi-medium text-white text-md'>{i.header}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                    </Marquee>
                </div>
            </div>
            <div>
                <GreenBGCard />
            </div>
            <div className='py-[150px] container mx-auto'>
                <SubscribeNewLetter />
            </div>
        </div >
    );
};

export default LandingPage;