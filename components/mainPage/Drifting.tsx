"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ImageType {
    src: string;
    text: string;
}

export default function CustomLayout() {
    const images: ImageType[] = [
        { src: "/drifting/1.jpg", text: "" },
        { src: "/drifting/yo.jpg", text: "" },
        { src: "/drifting/5.jpg", text: "" },
        { src: "/drifting/4.jpg", text: "" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, rotateY: -30, scale: 0.9 },
        visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: { duration: 0.8 },
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className="relative min-h-screen w-full text-white font-sans py-40 px-6"
            style={{
                backgroundImage: "url('/backgrounds/bgVector.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>


            <div className="relative z-10">

                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <h1 className="text-xl md:text-2xl mb-4"></h1>
                    <h2 className="text-xl md:text-2xl mb-4 pb-10 max-w-6xl">
                        Drifting enhances racing skills such as weight transfer,
                        throttle finesse, grip sensitivity, oversteer, countersteer,
                        and overall car control. This driving style helps drivers progress in every motorsport level.
                        These skills are not exclusive to drifting; they are crucial for mastering car control.
                        An accomplished racing driver needs to be familiar with every driving style. Additionally, it can help you avoid accidents in your daily driving!
                    </h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        className="col-span-1 md:col-span-3 flex flex-col items-center pb-20"
                        style={{ perspective: "1000px" }}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={images[0].src}
                            alt="Image 1"
                            className="w-full h-auto max-w-[900px] object-cover rounded-lg shadow-lg "
                            style={{
                                transform: "rotateY(10deg)",
                                boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)",
                            }}
                        />
                        <p className="mt-2 text-gray-200 text-sm text-center whitespace-pre-line">
                            {images[0].text}
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="col-span-1 md:col-span-3 flex items-center justify-center text-center"
                        variants={cardVariants}
                        style={{ perspective: "1000px" }}
                    >
                        <h1 className="text-4xl md:text-3xl  tracking-wide p-10">

                            Drifting: It&apos;s Not Just a Passion, It&apos;s a Way of Life.
                        </h1>
                    </motion.div>


                    {images.slice(1).map((image, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={cardVariants}
                            className="flex flex-col items-center pb-30"
                            style={{ perspective: "1000px" }}
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src={image.src}
                                alt={`Image ${index + 2}`}
                                className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg "
                                style={{
                                    transform: "rotateY(10deg)",
                                    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)",
                                }}
                            />
                            <p className="mt-2 text-gray-200 text-sm text-center">
                                {image.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
