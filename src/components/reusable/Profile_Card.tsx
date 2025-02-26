import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { card_img, quote } from "@/constants/image";

interface ProfileCardProps {
    name: string;
    image: string;
    country: string;
    content: string;
}

    
    const ProfileCard = ({ name, image, country, content}: ProfileCardProps) => {
        return (
       
            <Card className='card-shadow border-none p-7'>
                <CardContent className="p-0">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <img src={card_img} />
                            <div>
                                <div className="satoshi-medium text-header-text">{name}</div>
                                <div className="satoshi-light text-header-text-foreground">{country}</div>
                            </div>
                        </div>
                        <img src={quote} />
                    </div>
                    <p className="mt-3 text-header-text-foreground leading-7">{content}</p>
                </CardContent>
            </Card>
    )
    }

export default ProfileCard;