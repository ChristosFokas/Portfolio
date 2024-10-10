import React from 'react';

type YouTubeEmbedProps = {
    videoId: string;
    title: string;
    description?: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, description }) => {
    return (
        <div className="youtube-embed-container max-w-4xl mx-auto my-12 text-center font-sans">
            <h2 className="mt-6 text-2xl font-bold text-white pb-10">{title}</h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
            </div>

            {description && <p className="mt-4 text-lg text-white leading-relaxed">{description}</p>}
        </div>
    );
};

export default YouTubeEmbed;

// Usage Example
