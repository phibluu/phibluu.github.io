'use client'

import { useEffect, useRef, useState } from "react";

export default function Background(props) {

    const canvasRef = useRef(null);
    const [ count, setCount ] = useState(250);
    const starsRef = useRef([]);

    let stars = starsRef.current;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        context.canvas.width = width;
        context.canvas.height = height;

        window.addEventListener("resize", function(event) {
            width = this.window.innerWidth;
            height = this.window.innerHeight;
            context.canvas.width = width;
            context.canvas.height = height;
        });
        
        for(let i = 0; i < count; i++) {
            stars.push({
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height),
                size: 1,
                speed: (Math.random() / 2) + 0.2
            });
        }

        let animationID;

        function draw() {
            context.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.y += star.speed;

                if(star.y > height) {
                    star.y = 0;
                }

                context.beginPath();
                context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                context.fillStyle = "white";
                context.fill();
            });

            animationID = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationID);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return(
        <canvas ref={canvasRef} className="absolute min-h-screen min-w-screen z-0">
            {props.children}
        </canvas>
    )
}