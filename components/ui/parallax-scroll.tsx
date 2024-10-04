"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery

interface ImageItem {
  src: string;
  description: string;
}

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: ImageItem[];
  className?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Use media query to detect if the screen width is less than 768px (mobile screens)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Function to handle image click
  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  // Function to close the expanded image
  const handleClose = () => {
    setSelectedImage(null);
  };

  // Variants for the animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={cn("items-start overflow-y-auto scrollbar-hide w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-9xl mx-auto gap-10 py-20 px-4 sm:px-10">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              key={"grid-1" + idx}
              onClick={() => handleImageClick(el)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={idx}
              variants={itemVariants}
            >
              <Image
                src={el.src}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:shadow-lg cursor-pointer"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={"grid-2" + idx}
              onClick={() => handleImageClick(el)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={idx}
              variants={itemVariants}
            >
              <Image
                src={el.src}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:shadow-lg cursor-pointer"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={"grid-3" + idx}
              onClick={() => handleImageClick(el)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={idx}
              variants={itemVariants}
            >
              <Image
                src={el.src}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:shadow-lg cursor-pointer"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal with Description */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative max-w-2xl p-4 bg-white rounded-lg shadow-lg text-black"
              initial={{ scale: 0.8 }}
              animate={{ scale: isMobile ? 1 : 1.2 }} // Smaller scale for mobile
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage.src}
                className="rounded-lg"
                width={800}
                height={800}
                alt="expanded-thumbnail"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="mt-4 text-center">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
