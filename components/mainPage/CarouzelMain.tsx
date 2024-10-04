'use client'
import Autoplay from 'embla-carousel-autoplay'
import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import F1StyleText from '../common/F1Text';

export function CarouzelMain() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, })
    );

    const rooms = ['/carouzelIntroImages/6.jpg', '/carouzelIntroImages/fokasDriveCarouzel3.jpg'];

    return (
        <div className='relative cursor-pointer' id='home'>
            {/* Carousel Section */}
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-screen border-transparent"
            >
                <CarouselContent className="h-screen ">
                    {rooms.map((room, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <div className="h-full">
                                <Card className="h-full w-full">
                                    <CardContent className="flex items-center justify-center w-full h-full relative">
                                        <Image
                                            src={room}
                                            alt={`Image ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100}
                                            className="scale-100 md:scale-100 sm:scale-90" // Scale down on mobile
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* F1StyleText Component - Centered */}
            <div className="absolute inset-0 flex items-center pt-[600px] justify-center z-10">
                <F1StyleText txtTop='Christos Fokas' txtBot='' />
            </div>

        </div>
    );
}
