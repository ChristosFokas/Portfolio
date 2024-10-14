"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "/coming-soon", icon: faInstagram, label: "Instagram" },
  { href: "/coming-soon", icon: faFacebook, label: "Facebook" },
  {
    href: "https://www.youtube.com/@ChrisFokas",
    icon: faYoutube,
    label: "YouTube",
  },
  { href: "/coming-soon", icon: faTiktok, label: "TikTok" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer id="followme" className="bg-black text-white py-10 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Follow Me</h2>
          <p className="text-gray-400">
            Stay connected on our social media platforms
          </p>
          {/* Added email below */}
          <p className="text-gray-400 mt-2">
            Email:{" "}
            <a
              href="mailto:christosfokas@gmail.com"
              className="text-white underline"
            >
              christosfokas@gmail.com
            </a>
          </p>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>

        <div className="text-center md:text-right text-sm text-gray-400 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
