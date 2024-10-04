
import animatedContact from "@/public/animations/contact.json";
import Lottie from "lottie-react";


const AnimatedContact = ({ }) => {


    return (
        <div className={`max-w-16 text-2xl`}>

            <Lottie
                animationData={animatedContact}
                loop={false}
                className="w-full h-full"
            />
        </div>
    );
};
export default AnimatedContact;
