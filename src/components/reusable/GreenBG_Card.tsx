import React from "react";
import ProfileCard from "./Profile_Card";
import { shorter_dots } from "@/constants/image";
import { motion } from "framer-motion";

const GreenBGCard: React.FC = () => {
    const cards = [
        {
            name: "Alexandra Thompson",
            image: "",
            country: "United States",
            content: "Russtrade Limited's financial advisory services helped me navigate complex investment decisions with clarity and confidence. It's a pleasure working with their team."
        },
        {
            name: "Khateeb Ahmed",
            image: "",
            country: "United Arab Emirates",
            content: "The oil & gas consulting services provided by Rustrade were instrumental in optimizing our operational efficiency. We recommend for automated and swift services."
        },
        {
            name: "Rodriguez Sofia",
            image: "",
            country: "Brazil",
            content: "I highly recommend Russtrade for their investment consulting services. They helped me diversify my portfolio effectively and provided ongoing support to ensure my financial goals were met."
        },
    ]
    const cardVariants = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <div className="bg-primary-foreground py-[150px] relative">
            <div className="container mx-auto">
                <img src={shorter_dots} className='absolute top-0 right-0' />
                <img src={shorter_dots} className='absolute bottom-0 left-0' />
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="satoshi-black text-4xl text-header-text text-center"
                >
                    Our Happy Customers
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                    {cards.map((i, index) =>
                        <motion.div
                            initial="hidden"
                            variants={cardVariants}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: (index + .5) * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <ProfileCard
                                name={i.name}
                                content={i.content}
                                country={i.country}
                                image={i.image}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default GreenBGCard