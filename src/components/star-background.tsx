"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {

    // creates ref for canvas DOM element
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // runs after component mounts to browser
    useEffect(() => {

        // get canvas element from ref
        // drawing surface
        const canvas = canvasRef.current!;

        // drawing engine for the canvas
        // drawing tools
        const ctx = canvas.getContext("2d")!;

        // canvas fits screen dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // no. of stars on screen at once
        const starCount = 120;
        
        // generate an array of star objects
        const stars = Array.from({ length: starCount }).map(() => ({
            
            // star properties 
            //
            // random horizontal position
            x: Math.random() * canvas.width,
            //
            // random vertical position
            y: Math.random() * canvas.height,
            //
            // star size
            radius: Math.random() * 1.2,
            //
            // star brightness
            opacity: Math.random() * 0.5 + 0.2,
            //
            // how fast stars twinkle
            twinkleSpeed: Math.random() * 0.03 + 0.01
        }));

        // animation loop
        function draw() {

            // clear previous frame
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // paint midnight blue background
            ctx.fillStyle = '#0b1120'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // animate stars
            // loop through every star
            stars.forEach((star) => {

                // twinkle - randomly increase or decrease brightness
                star.opacity += (Math.random() - 0.5) * star.twinkleSpeed * 2

                // prevents stars from being too bright or too dark
                star.opacity = Math.max(0.15, Math.min(0.7, star.opacity))

                // starts drawing star
                ctx.beginPath()

                // draw a circle - represents star
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)

                // white star with variable brightness
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`

                // paint star
                ctx.fill()
            });

            // loop animation
            requestAnimationFrame(draw)
        }

        // start animation
        draw()

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        })


    }, [])



    return (
        <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
    )
}