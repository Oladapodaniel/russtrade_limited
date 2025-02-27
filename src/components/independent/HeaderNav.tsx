import { russtrade_logo } from '@/constants/image';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OutlinedButton } from '../reusable/Button';
import { useNavigate } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const HeaderNav: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
            <div className="md:hidden flex items-center justify-between px-4 py-3">
                <div onClick={() => navigate("/")} className='border'>
                    <img src={russtrade_logo} alt="Logo" className="header-logo w-[100px]" />
                </div>

                <Sheet open={open}>
                    <SheetTrigger>
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setOpen(true)}>
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <SheetTitle><img src={russtrade_logo} alt="Logo" className="header-logo w-[100px]" /></SheetTitle>
                            <SheetDescription>
                                <div className="flex justify-center mt-3 gap-5">
                                    <NavigationMenu className="flex flex-col">
                                        <NavigationMenuList>
                                            <Link to="/" className="font-medium">
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setOpen(false)}>
                                                    <div className="font-bold">Home</div>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuList>
                                        <NavigationMenuList>
                                            <Link to="/about" className="font-medium">
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setOpen(false)}>
                                                    <div className="font-medium">About</div>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuList>
                                        <NavigationMenuList>
                                            <Link to="/services" className="font-medium">
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setOpen(false)}>
                                                    <div className="font-medium">Services</div>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <OutlinedButton
                                        text="Contact Us"
                                        onClick={() => {
                                            navigate('/contactus')
                                            setOpen(false)
                                        }}
                                    />
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* <header className={`header-nav ${isOpen ? 'block' : 'hidden'} md:block`}> */}
            <header className={`header-nav hidden md:block`}>
                <nav className='flex justify-between items-center container mx-auto pt-3'>
                    <img src={russtrade_logo} alt="Logo" onClick={() => navigate("/")} className="header-logo w-[100px] cursor-pointer" />
                    <div className='flex items-center space-x-20'>
                        <ul className='flex space-x-10 items-center'>
                            <li className={`hover:bg-green-100 px-2 py-1 rounded-sm cursor-pointer ${window.location.pathname === '/' ? 'satoshi-bold' : ''}`}><Link to="/">Home</Link></li>
                            <li className={`hover:bg-green-100 px-2 py-1 rounded-sm cursor-pointer ${window.location.pathname === '/about' ? 'satoshi-bold' : ''}`}><Link to="/about">About</Link></li>
                            <li className={`hover:bg-green-100 px-2 py-1 rounded-sm cursor-pointer ${window.location.pathname === '/services' ? 'satoshi-bold' : ''}`}><Link to="/services">Services</Link></li>
                        </ul>

                        <OutlinedButton
                            text="Contact Us"
                            onClick={() => navigate('/contactus')}
                        />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderNav;