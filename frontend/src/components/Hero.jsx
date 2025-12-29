import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = ({ onRSVPClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Twinkling stars
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random(),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Wireframe lines
    const lines = [];
    for (let i = 0; i < 30; i++) {
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        speed: Math.random() * 0.3,
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${star.opacity})`;
        ctx.fill();

        star.opacity += star.speed * star.direction;
        if (star.opacity >= 1 || star.opacity <= 0) {
          star.direction *= -1;
        }
      });

      // Draw wireframe lines
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = 'rgba(255, 191, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        line.y1 += line.speed;
        line.y2 += line.speed;

        if (line.y1 > canvas.height) line.y1 = 0;
        if (line.y2 > canvas.height) line.y2 = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-30 z-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        backgroundSize: '200px 200px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
              FORGEX
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          TALK EVENT
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-8 font-light"
        >
          Get ready to <span className="text-amber-400 font-semibold">forge into the future</span>
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Join IEDC community for an immersive experience into the world of innovation, technology, and entrepreneurship.
        </motion.p>

        {/* Event Details */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="text-amber-500" size={20} />
            <span>January 15, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="text-amber-500" size={20} />
            <span>10:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="text-amber-500" size={20} />
            <span>Tech Innovation Hub</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.button
            onClick={onRSVPClick}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black text-lg font-bold rounded-lg overflow-hidden group shadow-lg shadow-amber-500/30"
          >
            <span className="relative z-10">RSVP NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  );
};

export default Hero;