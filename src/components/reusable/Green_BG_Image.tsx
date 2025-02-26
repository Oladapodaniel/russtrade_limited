import { hero_img_bg, lady_smiling_one } from '@/constants/image';
import React from 'react';
import { motion } from 'framer-motion';

interface GreenBGImageProps {
    children: React.ReactNode;
    image: string;
}

const GreenBGImage: React.FC<GreenBGImageProps> = ({ children, image }) => {
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    return (
        <div className='bg-primary-foreground py-[150px]'>
            <div className='container mx-auto relative'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 w-full justify-between items-center'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={hero_img_bg} className='absolute top-0' />
                        <img src={image || lady_smiling_one} className='rounded-tr-[100px] rounded-bl-[100px]' />
                    </motion.div>
                    {children}

                </div>

            </div>
        </div>
    );
};

export default GreenBGImage;