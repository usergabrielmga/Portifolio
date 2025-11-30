import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingProps {
  text: string;
  speed?: number;
}

export default function Typing({ text, speed = 60 }: TypingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="md:text-[30px] text-[22px] font-bold flex md:justify-start justify-center">
      {displayed}

      {/* cursor piscando */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 text-white"
      >
        |
      </motion.span>
    </h1>
  );
}
