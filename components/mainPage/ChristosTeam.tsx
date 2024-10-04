// components/ChristosTeam.jsx

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ChristosTeam() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div id='team'
            ref={ref}
            className="relative w-full min-h-screen flex flex-col md:flex-row pt-20 text-white bg-[url('/backgrounds/paok.png')] bg-cover bg-center overflow-x-hidden"
        >
            <motion.div
                className="w-full md:w-1/2 h-full flex items-start justify-start p-6 md:p-8 md:pt-24"
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                style={{ overflowX: 'visible' }}
            >
                <div className=' bg-black p-20 bg-opacity-60 rounded-xl'>
                    <div className="space-y-10 md:space-y-10 w-full md:w-5/6">

                        <p className="text-sm md:text-base ">
                            As a PAOK fan, you definitely feel pride and loyalty! There have been many unique moments in PAOK&apos;S history, including titles, great victories, and epic upsets. Every match can create a new unforgettable memory.
                        </p>
                        <p className="text-sm md:text-base">
                            PAOK fans are truly one-of-a-kind, passionate in the best way possible! The energy they bring to the stands is incredible, and their support is unwavering. They are ready to back the team in every battle, making PAOK even more special. This passion is what makes the experience so extraordinary!
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 h-full flex items-center justify-center relative p-6 md:p-8"
                initial={{ x: '100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                    delay: 0.2,
                }}
                style={{ overflowX: 'visible' }}
            >
                <Image
                    src="/paok/cfpaok.jpg"
                    alt="Team Photo"
                    width={900}
                    height={400}
                    className="object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                    delay: 0.4,
                }}
                style={{ overflowX: 'visible' }}
            >
                <Image
                    src="/paok/paok.png"
                    alt="Team Logo"
                    width={200}
                    height={200}
                    className="object-contain opacity-10 md:opacity-100"
                />
            </motion.div>
        </div>
    );
}
