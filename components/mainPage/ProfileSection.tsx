// components/ProfileSection.jsx

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ProfileSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section
            id='profile'
            ref={ref}
            className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center italic"
            style={{ backgroundImage: "url('/backgrounds/racing.png')" }} // Background image
        >
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 md:py-10 relative z-20">
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-start"
                    initial={{ x: '-150%', opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ type: 'just', stiffness: 80, damping: 20 }}
                >
                    <Image
                        src="/ProfileSectionImages/14.png"
                        alt="Profile"
                        width={400}
                        height={600}
                        className="opacity-100"
                        objectFit="contain"
                        priority={true}
                    />
                </motion.div>

                <div className="md:w-1/2 text-left mt-4 md:mt-0 bg-black bg-opacity-60 p-6 md:p-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Christos Fokas</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-white mt-4">
                        Meet a young and passionate karting driver, with a dream of participating in Formula 1
                    </h2>
                    <p className="text-lg md:text-xl text-white mt-4 md:mt-6 leading-relaxed">
                        From a young age, he found his home behind the wheel and karting quickly became more than just a hobby, it became his way of life.
                        Within each lap, he experiences an adrenaline rush that fuels his competitive spirit.
                        His love for speed and precision has taken him to numerous international karting competitions.
                    </p>
                    <p className="text-lg md:text-xl text-white mt-4 md:mt-6 leading-relaxed">
                        Each race is a new adventure, a challenge that he eagerly embraces with fierce determination.
                        Traveling throughout the Italian country, he gained valuable experience racing on different tracks and in different environments.
                        More than just a driver, he is a true competitor.
                    </p>
                    <p className="text-lg md:text-xl text-white mt-4 md:mt-6 leading-relaxed">
                        Each race sharpens his focus and makes him hungrier for victory.
                        The rush of speeding through sharp corners, the roar of the engine, and the thrill of overtaking his competitors are what makes him feel alive.
                    </p>
                    <p className="text-lg md:text-xl text-white mt-4 md:mt-6 leading-relaxed">
                        Karting isn’t just a sport for him, it’s where he belongs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
