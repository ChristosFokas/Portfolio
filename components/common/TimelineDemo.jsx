import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import AnimatedRacingFlag from "./AnimatedRacingFlag";

function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="pt-20">
          <motion.p
            className="text-white text-xs md:text-xl font-normal mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            2024 is here, and Christos is getting closer to his dream with every
            race. This year is all about turning hard work into results.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/timelinePhotos/2024/4.jpg",
              "/timelinePhotos/2024/5.jpg",
              "/timelinePhotos/2024/6.jpg",
              "/timelinePhotos/2024/7.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mb-8 pt-10 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              <div className="pb-10" key="2024">
                <AnimatedRacingFlag />
              </div>,
              "✅ Franciacorta Karting Track  WSK Super Master Series 18/02/2024",
              "✅ Franciacorta Karting Track  Rok Cup Italy 12/05/2024",
              "✅ Franciacorta Karting Track WSK Euro Series 07/2024",
              "✅ Franciacorta Karting Track WSK Super Cup 09/2024",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-xs md:text-xl  "
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="pt-20">
          <motion.p
            className="text-xs md:text-xl font-normal mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            2023 was just the start of it all – the year Christos hit the track
            and began chasing his racing dreams.
          </motion.p>
          <motion.p
            className="text-xs md:text-sm font-normal mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          ></motion.p>
          <div className="grid grid-cols-2 gap-4 ">
            {[
              "/timelinePhotos/2023/1.jpg",
              "/timelinePhotos/2023/2.jpg",
              "/timelinePhotos/2023/3.jpg",
              "/timelinePhotos/2023/4.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="pt-10 pb-20 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              <div className="pb-10" key="2024">
                <AnimatedRacingFlag />
              </div>,
              "✅Franciacorta Karting Track - EasyKart Italia 16/04/2023",
              "✅Ala Karting Circuit - EasyKart Italia 01/07/2023",
              "✅South Garda Karting - EasyKart Italia 22/07/2023",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-xs md:text-xl  "
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row pt-20 text-white bg-cover bg-center overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/backgrounds/timeline.jpg')] bg-cover bg-center bg-no-repeat opacity-5 text-white"></div>
      <div className="relative w-full " id="history">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default TimelineDemo;
