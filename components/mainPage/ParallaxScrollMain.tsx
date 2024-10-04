"use client";
import { HeaderText } from "../common/HeaderText";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function ParallaxScrollMain() {
    return (
        <div className="overflow-x-hidden " id="photos">
            <HeaderText text="Gallery" />
            <ParallaxScroll images={imagesWithDescriptions} />
        </div>
    );
}

// Updated images array with descriptions
const imagesWithDescriptions = [
    { src: '/randomPhotos/1.jpg', description: '' },
    { src: '/randomPhotos/2.jpg', description: '' },
    { src: '/randomPhotos/3.jpg', description: '' },
    { src: '/randomPhotos/4.jpg', description: '' },
    { src: '/randomPhotos/5.jpg', description: '' },
    { src: '/randomPhotos/6.jpg', description: '' },
    { src: '/randomPhotos/7.jpg', description: '' },
    { src: '/randomPhotos/8.jpg', description: '' },
    { src: '/randomPhotos/9.jpg', description: '' },
];
