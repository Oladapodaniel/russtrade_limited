import React from "react";
import { Button } from "../ui/button";

interface FilledButtonProps {
    text: string;
    className?: string;
}

interface OutlinedButtonProps {
    text: string
    onClick: () => void;
}

export const FilledButton = ({ className, text }: FilledButtonProps) => {
    return (
        <Button className={`satoshi-bold text-white bg-gradient-to-r from-primary via-green-600 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2 cursor-pointer ${className}`}>{text}</Button>
    );
}

export const OutlinedButton = ({ onClick, text }: OutlinedButtonProps) => {
    return (
        <Button onClick={onClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primary via-green-600 to-green-500  group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative satoshi-bold px-5 py-2 transition-all ease-in duration-75 bg-primary-foreground dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                {text}
            </span>
        </Button>
    )
}


{/* <Button className="mt-10 satoshi-bold text-white bg-gradient-to-br from-blue-400 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</Button> */ }
{/* <Button className="mt-10 satoshi-bold text-white bg-gradient-to-br from-primary to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</Button> */ }
{/* <Button className="mt-10 satoshi-bold text-white bg-gradient-to-br from-primary to-header-text hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</Button> */ }