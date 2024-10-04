'use client'
import Countdown from '@/components/common/Countdown';
import { Footer } from '@/components/common/Footer';
import TimelineDemo from '@/components/common/TimelineDemo';
import { CarouzelMain } from '@/components/mainPage/CarouzelMain';
import { CarouzelTraining } from '@/components/mainPage/CarouzelTraining';
import ChristosTeam from '@/components/mainPage/ChristosTeam';
import Drifting from '@/components/mainPage/Drifting';
import { ParallaxScrollMain } from '@/components/mainPage/ParallaxScrollMain';
import ProfileSection from '@/components/mainPage/ProfileSection';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(true);
  const handleCountdownComplete = () => {
    setShowCountdown(false);
  };

  return (
    <>
      {showCountdown && <Countdown onComplete={handleCountdownComplete} />}
      {!showCountdown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="italic">
            <CarouzelMain />
            <ProfileSection />
            <Drifting />
            <TimelineDemo />
            <ChristosTeam />
            <CarouzelTraining />
            <ParallaxScrollMain />

            <Footer />

          </div>
        </motion.div>
      )}
    </>
  );
}