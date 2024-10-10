'use client'
import React, { useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

type CookiesBannerProps = {
    message: string;
};

const CookiesBanner: React.FC<CookiesBannerProps> = ({ message }) => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookies = parseCookies();
        if (!cookies.cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setCookie(null, 'cookiesAccepted', 'true', {
            maxAge: 7 * 24 * 60 * 60,
            path: '/',
        });
        setShowBanner(false);
    };

    const handleDecline = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex flex-col md:flex-row md:justify-between items-center z-50">
            <div className="mb-4 md:mb-0">
                <p className="text-lg font-semibold">We are using 🍪</p>
                <p className="text-sm">{message}</p>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                    I understand
                </button>
                <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookiesBanner;

// Usage Example
// <CookiesBanner message="We use cookies for security and analytical purposes, by browsing this webpage you agree to the cookies policy." />