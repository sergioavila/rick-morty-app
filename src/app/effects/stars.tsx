"use client";

import { useEffect } from 'react';

function random(min: number, max: number): number {
    return min + Math.random() * (max + 1 - min);
}

export default function ParallaxPixelStars() {
    useEffect(() => {
        const canvasSize = document.body.offsetWidth * document.body.offsetHeight;
        const starsFraction = canvasSize / 3000;
        const stars: HTMLDivElement[] = [];

        for (let i = 0; i < starsFraction; i++) {
            // Set up random elements
            const xPos = random(0, 100);
            const yPos = random(0, 100);
            const alpha = random(0.5, 1);
            const size = random(1, 2);
            const colour = '#ffffff';

            // Create star element
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.left = xPos + '%';
            star.style.top = yPos + '%';
            star.style.opacity = alpha.toString();
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.backgroundColor = colour;
            document.body.appendChild(star);
            stars.push(star);
        }

        console.log('stars added');

        // Cleanup function to remove stars when component unmounts
        return () => {
            stars.forEach(star => {
                document.body.removeChild(star);
            });
        };
    }, []); // Empty dependency array means this runs once on mount

    return null; // This component doesn't render anything itself
}