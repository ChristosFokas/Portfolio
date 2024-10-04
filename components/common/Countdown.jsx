// components/common/Countdown.jsx

import countdownAnimation from "@/public/animations/animation2.json";
import Lottie from "lottie-react";
import { useEffect } from "react";

const Countdown = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50">
      <Lottie
        animationData={countdownAnimation}
        loop={false}
        className="w-full h-full"
      />
    </div>
  );
};

export default Countdown;
