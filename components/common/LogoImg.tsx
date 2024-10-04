import React from 'react';
import Image from 'next/image';

export default function LogoImg() {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/logos/last.png"
                alt="Logo"
                width={60}
                height={60}
            />
        </div>
    );
}
