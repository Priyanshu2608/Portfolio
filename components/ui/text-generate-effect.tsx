"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0, // seconds
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ").filter(Boolean);
  const staggerInterval = 0.2; // seconds, keep in sync with animate call

  useEffect(() => {
    // clear any previous scope animations when words change
    let timer: ReturnType<typeof setTimeout> | null = null;

    // start animation after `delay` seconds
    timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 0.5,
          delay: stagger(staggerInterval),
        }
      );
    }, Math.max(0, delay * 1000));

    return () => {
      if (timer) clearTimeout(timer);
      // reset spans to initial state so re-runs animate correctly
      // (optional: we'll set inline styles via className so they start hidden)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, duration, filter, delay, scope.current]);

  const renderWords = () => (
    <motion.div ref={scope} aria-hidden={false}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + "-" + idx}
          className={cn("opacity-0", "dark:text-white text-black")}
          style={{
            filter: filter ? "blur(10px)" : "none",
            whiteSpace: "pre-wrap",
          }}
        >
          {word}
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );

  return <div className={cn("font-bold", className)}>{renderWords()}</div>;
};
