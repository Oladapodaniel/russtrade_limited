import React from "react";
import { motion } from "framer-motion";
import { FilledButton } from "./Button";
import { Input } from "../ui/input";

const SubscribeNewLetter: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="satoshi-black text-4xl text-header-text text-center">Subscribe to our newsletter
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className='text-header-text-foreground leading-8 text-center mt-5'>Subscribe to our newsletter for exclusive updates, expert analysis, and strategic advice to <br />help you navigate the ever-changing business landscape.
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-center mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: .8 }}
                    viewport={{ once: true }}
                    className='w-full sm:max-w-[300px]'
                >
                    <Input type="email" className='input w-full sm:max-w-[300px]' placeholder="Email" />
                </motion.div>
                <div className="sm:ml-4 mt-4 sm:mt-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <FilledButton 
                            text="Subscribe"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default SubscribeNewLetter;