
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface IntroLoaderProps {
    onFinish: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onFinish }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';

        // Start fade out after 4 seconds
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 4000);

        // Call onFinish after fade out completes (e.g. 1s duration)
        // Total time: 5s
        const finishTimer = setTimeout(() => {
            onFinish();
            document.body.style.overflow = 'unset'; // Restore scrolling
        }, 5000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
            document.body.style.overflow = 'unset';
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="w-full h-full relative z-10">
                {/* 
           IMPORTANT: REPLACE THE URL BELOW WITH YOUR EXPORTED SPLINE SCENE.
           1. Go to your Spline scene: https://my.spline.design/animatedpaperboat-ucFmHfh70KR83liPukiHMapv/
           2. Click "Export" in the toolbar.
           3. Select "Code" on the left.
           4. Copy the URL ending in ".splinecode".
           5. Paste it below as the `scene` prop.
        */}
                <Spline
                    scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                    onLoad={() => console.log('Spline scene loaded')}
                />
            </div>
        </div>
    );
};
