"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // State untuk mencegah hydration mismatch di Next.js
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    // Update pertama kali
    setTimeLeft(calculateTimeLeft());

    // Update setiap 1 detik
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Jangan render apa-apa sebelum komponen di-mount di client (mencegah error Next.js)
  if (!isMounted) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
      {[
        { label: 'HARI', value: timeLeft.days },
        { label: 'JAM', value: timeLeft.hours },
        { label: 'MENIT', value: timeLeft.minutes },
        { label: 'DETIK', value: timeLeft.seconds },
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center bg-gray-900/80 border border-purple-500/30 rounded-2xl p-4 md:p-6 w-20 md:w-28 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-1">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-bold text-pink-500 tracking-widest uppercase">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
