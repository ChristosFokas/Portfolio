// components/common/Countdown.jsx

import flagAnimated from "@/public/animations/flagAnimated.json";
import Lottie from "lottie-react";


const AnimatedRacingFlag = ({ }) => {


    return (
        <div className={`max-w-32  bg-black z-50`}>
            <Lottie
                animationData={flagAnimated}
                loop={true}
                className="w-full h-full"
            />
        </div>
    );
};
export default AnimatedRacingFlag;
