"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


const makingFriends = {
    text: `One of Christos' greatest gifts is his ability to form genuine connections wherever he goes. At every race, he doesn’t just participate—he builds friendships, creating bonds that last beyond the finish line.`,
    img1: '/training/2.jpg',

}

const training = {
    text: (
        <div>
            <p>Exercise is not just about achieving a healthy body. It is a powerful tool that improves every aspect of life. From boosting mental clarity to enhancing emotional well-being, regular physical activity unlocks numerous benefits. Whether it’s a morning jog, a session at the gym, or a yoga practice, exercise helps reduce stress, elevate mood, and increase productivity. It sharpens focus, builds resilience, and even helps foster stronger relationships by promoting self-confidence and energy. Exercise is truly the foundation for a balanced, fulfilling, and empowered life.</p>

            <br /><br />

            <p>In my personal training program, I’ve combined weight training, bodyweight training, boxing, and running. This combination has been incredibly fulfilling. Bodyweight and weight training allow me to build strength and muscle so I can drive a kart without any difficulty. Boxing improves my reflexes, concentration, and confidence level, while running enhances my stamina and helps me stay calm and relaxed with a lower heart rate under pressure. Most importantly, I enjoy every moment of my training.</p>
            <br /><br />
        </div>
    ),
    img1: '/training/trainingTwo.jpg'
}

const karting = {
    text: (
        <div>
            <p>Karting is not just a sport. It’s an exhilarating pursuit that ignites a deep sense of passion and thrill. For those who crave speed, precision, and the rush of competition, karting offers the perfect adrenaline-filled outlet. The joy of racing down the track, expertly handling sharp corners, and accelerating with precision is unmatched. Every lap is a test of reflexes, control, and determination, pushing you to be faster, sharper, and more focused.</p>

            <br /><br />

        </div>
    ),
    img1: '/training/karting.jpg'
}




export function CarouzelTraining() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
                More about Christos
            </h2>
            <Carousel items={cards} />
        </div>
    );
}
interface Props {
    info: string;
    more: React.ReactNode;
    src1: string;
}

const DummyContent = ({ info = 'a', more = 'b', src1 = '', }: Props) => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                {info}
                            </span>{" "}
                            {more}
                        </p>
                        <Image
                            src={src1}
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className=" md:w-2/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />

                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Meeting new friends",
        title: "Before race",
        src: "/training/1.jpg",
        content: <DummyContent info="Making friends" more={makingFriends.text} src1={makingFriends.img1} />,
    },
    {
        category: "Training Route",
        title: "The Exercise is the Key to Everything",
        src: "/training/trainingOne.jpg",
        content: <DummyContent info="Train Hard" more={training.text} src1={training.img1} />,
    },
    {
        category: "About",
        title: "The Passion for Karting",
        src: "/training/f1.jpg",
        content: <DummyContent info="" more={karting.text} src1={karting.img1} />,
    },


];
