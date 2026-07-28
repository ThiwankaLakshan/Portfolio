import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const stars = [];
        const numStars = 140;
        const warpSpeed = 3.5;
        const starScale = 140;

        let mouse = { x: null, y: null };
        let originX = 0;
        let originY = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize stars with random X, Y, Z depth values and stable colors
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: (Math.random() - 0.5) * canvas.width * 1.5,
                y: (Math.random() - 0.5) * canvas.height * 1.5,
                z: Math.random() * canvas.width,
                prevZ: 0,
                colorType: Math.random() > 0.5 ? 'cyan' : 'blue'
            });
            stars[i].prevZ = stars[i].z;
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;

            // Interpolate origin to mouse position for organic steering effect
            const targetX = mouse.x !== null ? mouse.x - centerX : 0;
            const targetY = mouse.y !== null ? mouse.y - centerY : 0;
            originX += (targetX - originX) * 0.06;
            originY += (targetY - originY) * 0.06;

            stars.forEach((star) => {
                star.prevZ = star.z;
                star.z -= warpSpeed;

                // Reset star when it flies past the camera viewport
                if (star.z <= 0) {
                    star.z = width;
                    star.x = (Math.random() - 0.5) * width * 1.5;
                    star.y = (Math.random() - 0.5) * height * 1.5;
                    star.prevZ = star.z;
                    star.colorType = Math.random() > 0.5 ? 'cyan' : 'blue';
                }

                // Project 3D coordinate to 2D screen coordinate
                const px = (star.x - originX) * (starScale / star.z) + centerX;
                const py = (star.y - originY) * (starScale / star.z) + centerY;

                // Previous projected coordinate for star streak line segment
                const prevPx = (star.x - originX) * (starScale / star.prevZ) + centerX;
                const prevPy = (star.y - originY) * (starScale / star.prevZ) + centerY;

                // Stars fade in as they approach the screen (original max alpha of 0.45)
                const alpha = Math.min((1 - star.z / width) * 1.2, 0.45);
                const strokeColor = star.colorType === 'cyan'
                    ? `rgba(6, 182, 212, ${alpha})` // Cyan
                    : `rgba(59, 130, 246, ${alpha})`; // Blue

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = Math.min((1 - star.z / width) * 2.2 + 0.5, 2.5);
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
        />
    );
};

export default Starfield;
