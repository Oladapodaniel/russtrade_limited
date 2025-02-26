import { hero_img, hero_img_bg } from "@/constants/image";
import React from "react";
import { FilledButton } from "../reusable/Button";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <div className="bg-gradient-to-t from-primary-foreground to-white ">
            <div className="container mx-auto py-10 ">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="p-4 col-span-2 md:col-span-1"
                    >
                        <div className="satoshi-black text-4xl md:text-6xl text-header-text">Your success story <br /> begins with us</div>
                        <div className="mt-6 text-header">Unlock strategic opportunities and navigate complex markets with our<br /> comprehensive consultancy services in investment, finance, <br />and oil & gas.</div>
                        <div className='mt-10 flex justify-center sm:justify-start w-full'>
                            <FilledButton
                                text="Get Started"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-4 py-10 relative col-span-2 md:col-span-1"
                    >
                        <img src={hero_img_bg} alt="hero-image_background" className="absolute left-8" />
                        <img src={hero_img} alt="hero_image" className="rounded-tr-[100px] rounded-bl-[100px]" />
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;