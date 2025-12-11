"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

export const ButtonsCard = ({
  children = "Click to Know More",
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <a href="#about">
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, delay: 4.5 }}
        onClick={onClick}
        className={cn("p-[1px] relative overflow-hidden group cursor-pointer", className)}
      >
        {/* Gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg" />

        {/* Light sweep effect */}
        <span className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden">
          <span
            className="
              absolute left-[-100%] top-0 h-full w-[50%]
              bg-gradient-to-r from-transparent via-white/90 to-transparent
              opacity-0 group-hover:opacity-100
              transition-all duration-500 ease-out
              group-hover:left-[120%]
            "
          />
        </span>

        {/* Inner Button */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#010030] rounded-[6px] font-[Bitcount_Prop_Single] text-lg font-bold relative text-white transition duration-200 group-hover:bg-[#000050]">
          {children}

          {/* Animated Down Arrow */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconChevronDown size={16} stroke={5} className="text-white opacity-80" />
          </motion.div>

        </div>
      </motion.button>
    </a>
  );
};
