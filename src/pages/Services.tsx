import { FilledButton } from "@/components/reusable/Button";
import GreenBGImage from "@/components/reusable/Green_BG_Image";
import GreenBGCard from "@/components/reusable/GreenBG_Card";
import { agriculture, financial_currency, investment, oil_gas } from "@/constants/image";
import React from "react";
import { motion } from "framer-motion";
import SubscribeNewLetter from "@/components/reusable/SubscribeNesLetter";

const Services: React.FC = () => {
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="p-4 col-span-2 md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                            className="satoshi-black text-4xl text-header-text">Financial Advisor
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className=" md:w-2/3 mt-6 text-header text-justify">Our financial advisory services are designed to help individuals and businesses make informed financial decisions. Our team of experienced financial advisors provides strategic advice on investment management, budgeting, debt management, and retirement planning. We assess your financial situation, understand your goals, and develop personalized plans to ensure you achieve financial stability and growth. Our services include portfolio management, tax efficiency strategies, and long-term healthcare planning, all tailored to meet your unique needs and risk tolerance
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-4 py-10 relative col-span-2 md:col-span-1">
                        <img src={financial_currency} alt="hero_image" className="rounded-tr-[100px] rounded-bl-[100px]" />
                    </motion.div>
                </div>
            </div>
            <GreenBGImage
                image={agriculture}
            >
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="satoshi-black text-4xl text-header-text">Agriculture</motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='mt-5  md:w-2/3 text-justify text-header-text-foreground'>Our agricultural consulting services focus on providing sustainable and innovative solutions to farmers and agricultural businesses. We offer expertise in crop management, soil conservation, irrigation systems, and market analysis to help optimize yields and reduce costs. Our team works closely with clients to develop strategies that enhance productivity while promoting environmental stewardship. Whether you're looking to improve farm efficiency or explore new market opportunities, we're here to support you every step of the way.</motion.div>

                </div>
            </GreenBGImage>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="p-4 col-span-2 md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                            className="satoshi-black text-4xl text-header-text">Investment
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className=" md:w-2/3 mt-6 text-header text-justify">Our investment consulting services are designed to help you navigate complex financial markets and make informed investment decisions. We provide expert advice on portfolio diversification, risk management, and strategic investment planning. Our team analyzes market trends, assesses your financial goals, and develops tailored investment strategies to maximize returns while minimizing risk. Whether you're an individual investor or a corporate entity, we help you achieve your financial objectives with precision and expertise.
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-4 py-10 relative col-span-2 md:col-span-1">
                        <img src={investment} alt="hero_image" className="rounded-tr-[100px] rounded-bl-[100px]" />
                    </motion.div>
                </div>
            </div>
            <GreenBGImage
                image={oil_gas}
            >
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="satoshi-black text-4xl text-header-text">Oil and Gas</motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='mt-5  md:w-2/3 text-justify text-header-text-foreground'>Our oil & gas consulting services offer comprehensive solutions to help companies optimize operations, manage risks, and capitalize on emerging opportunities. We provide expert insights on market trends, operational efficiency, and strategic partnerships. Our team works closely with clients to develop strategies that enhance profitability and drive long-term success in this critical industry. Whether you're looking to improve operational performance or explore new business opportunities, we're here to support you with our expertise and industry knowledge.</motion.div>

                </div>
            </GreenBGImage>
            <div className="py-[150px]">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="satoshi-black text-4xl text-header-text text-center"
                >
                    Are you ready to transform your business with our consultancy <br />expertise, Book a session with us today
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-10"
                >
                    <FilledButton
                        text="Book an appointment"
                    />
                </motion.div>
            </div>
            <GreenBGCard />
            <div className='py-[150px] container mx-auto'>
                <SubscribeNewLetter />
            </div>
        </div >
    )
}

export default Services;