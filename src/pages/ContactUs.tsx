import { FilledButton } from '@/components/reusable/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { envelop, location, phone, shorter_dots } from '@/constants/image';
import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ContactUs: React.FC = () => {
    return (
        <>
            <div className="container mx-auto py-20 ">
                <div className="satoshi-black text-4xl md:text-6xl text-header-text text-center">Contact Us</div>
                <div className="mt-6 text-header text-center">We're here to help! Whether you have questions about our services or would like to discuss how we can support your business goals,<br /> please don't hesitate to reach out. Contact us today to learn more about how our expertise in these sectors<br />can help you achieve success.</div>
                <form className='mt-20'>
                    <div className='flex justify-center'>
                        <Input type="text" className='input w-full sm:max-w-[400px]' placeholder="Your fullname" />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Input type="email" className='input w-full sm:max-w-[400px]' placeholder="Your email address" />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Textarea className='input w-full sm:max-w-[400px]' rows={8} placeholder='Write a note about your request' />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <FilledButton text='Send' className='w-full sm:max-w-[400px]' />
                    </div>
                </form>
            </div>
            <div className="bg-primary-foreground py-[150px] relative">
                <div className='container mx-auto'>
                    <img src={shorter_dots} className='absolute top-0 right-0' />
                    <img src={shorter_dots} className='absolute bottom-0 left-0' />
                    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
                        <Card className='card-shadow border-none py-6 px-10'>
                            <CardHeader>
                                <CardTitle className='satoshi-bold text-2xl text-header-text'>Get In Touch</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='flex items-center gap-2'>
                                    <img src={envelop} className='w-4 h-4' />
                                    <p className='text-header-text-foreground text-[14px]'>oladapodaniel10@gmail.com</p>
                                </div>
                                <div className='flex items-center gap-2 mt-2'>
                                    <img src={phone} className='w-4 h-4' />
                                    <p className='text-header-text-foreground text-[14px]'>+234 (90) 332 46067</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='card-shadow border-none py-6 px-10'>
                            <CardHeader>
                                <CardTitle className='satoshi-bold text-2xl text-header-text'>Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <div className='flex gap-2'>
                                    <img src={location} className='w-4 h-4 mt-1' />
                                    <p className='text-header-text-foreground text-[14px]'>88/89 Peter Odili Road,<br /> Port Hartcourt, Rivers State.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;