"use client";
import { motion } from "framer-motion";
interface Props {
    txtTop: string
    txtBot: string
}

export default function F1StyleText({ txtTop, txtBot }: Props) {
    return (
        <div className="flex flex-col bg-transparent items-center justify-center   text-white">
            {/* Main F1 Style Header */}
            <motion.h1
                className="text-5xl font-bold uppercase tracking-tight italic text-foreground"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 1 }}
            >
                {txtTop}          </motion.h1>

            {/* Subtext in F1 style */}
            <motion.h2
                className="text-2xl  text-gray-300 uppercase tracking-wider italic mt-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {txtBot}            </motion.h2>
        </div>
    );
}
