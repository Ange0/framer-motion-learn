"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [sizeButton, setSizeButton] = useState("50%")

  return (
    <div 
      className="flex justify-center items-center h-screen bg-stone-100 ">
      <motion.div className="bg-white p-4 w-1/2"
      onMouseEnter={() => setSizeButton("100%")}
      onMouseLeave={() => setSizeButton("50%")}
      >
        <motion.button
        animate={{width: sizeButton }}
        transition={{ duration: 0.2 }}
        initial={false}
          className="bg-black text-white py-2 px-4 text-xs rounded-full"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </div>
  );
}
