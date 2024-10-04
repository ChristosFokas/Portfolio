'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
    text: string;
}

export const HeaderText = ({ text }: Props): JSX.Element => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const letterAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 },
        }),
    };

    return (
        <div className="flex items-center justify-center pt-40 pb-32 px-4 md:px-10  ">
            <motion.h1
                className="text-4xl border p-4 animate-spotlight rounded-full  sm:text-4xl font-thin md:text-6xl font-extrabold italic tracking-wide uppercase text-center text-white  shadow-redGlassBottom"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {text.split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterAnimation}
                        className="inline-block transform-gpu transition-transform hover:scale-110"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};
