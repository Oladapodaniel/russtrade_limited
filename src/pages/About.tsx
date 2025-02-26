import { FilledButton } from "@/components/reusable/Button";
import { founder_friend, hero_img_bg } from "@/constants/image";
import React from "react";
import { motion } from "framer-motion";
import SubscribeNewLetter from "@/components/reusable/SubscribeNesLetter";

const About: React.FC = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 space-x-10 items-center">
                    <div className="p-4 col-span-2 md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="satoshi-black text-4xl md:text-6xl text-header-text">Wale Dada</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mt-6 text-header text-justify">Wale Dada is the visionary behind Russtrade Limited, bringing a wealth of experience in investment, finance, and oil & gas. With a strong background in strategic planning and financial analysis, he has guided numerous businesses to achieve their goals through informed decision-making and innovative solutions. As a seasoned professional, Wale Dada has worked across various sectors, developing a deep understanding of the complexities and opportunities within the investment, finance, and oil & gas industries. His commitment to excellence and client satisfaction has earned Russtrade Limited a reputation as a trusted partner for businesses seeking to navigate today's dynamic global landscape.</div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-4 py-10 relative col-span-2 md:col-span-1"
                    >
                        <img src={hero_img_bg} alt="hero-image_background" className="absolute left-8" />
                        <img
                            src={founder_friend}
                            alt="hero_image"
                            className="w-full h-full rounded-tr-[100px] rounded-bl-[100px]"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="py-[150px] bg-primary-foreground">
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="satoshi-black text-4xl text-header-text text-center leading-13">Are you ready to transform your business with our consultancy <br />expertise, Book a session with us today</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-10"
                >
                    <FilledButton
                        text="Book an appointment"
                    />
                </motion.div>
            </div>
            <div className='py-[150px] container mx-auto'>
                <SubscribeNewLetter />
            </div>
        </>
    )
}

export default About;