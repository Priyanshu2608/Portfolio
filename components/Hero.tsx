"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ButtonsCard } from "./ui/ButtonMain";

const Hero = () => {
  const first = "Hello There!";
  const second = "Welcome to My Portfolio";
  const third= "My name is Priyanshu Vasudev";

  // keep in sync with component's staggerInterval and durations (in seconds)
  const staggerInterval = 0.2;

  const firstDuration = 1.5;   // same as used for first TextGenerateEffect
  const secondDuration = 1.5;  // same as used for second
  const thirdDuration = 0;  // same as used for third

  const firstWordsCount = first.split(" ").filter(Boolean).length;
  // total time = duration + staggerInterval * (n-1)
  const firstTotalTime = firstDuration + staggerInterval * Math.max(0, firstWordsCount - 1);

  return (
    <div className="pb-10 pt-34 min-h-full">
      <div>
        <Spotlight />
        <Spotlight />
      </div>

      <div className="relative flex h-[40rem] w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#808080_2px,transparent_2px)]",
            "dark:[background-image:radial-gradient(#808080_0.2px,transparent_0.5px)]"
          )}
        />

        <div className="flex justify-center">
          <div className="max-w-[109vw] md:max-w-2xl lg:max-w-[100vw] flex flex-col items-center justify-center">
            <div className="pb-20 text-center">
              <h1 className="uppercase tracking-widest text-7xl font-[Bitcount_Prop_Single] text-white">
                <TextGenerateEffect words={first} duration={firstDuration} delay={0} />
              </h1>

              <h1 className="uppercase tracking-widest text-7xl font-[Bitcount_Prop_Single] text-white mt-10">
                {/* start after first finishes */}
                <TextGenerateEffect
                  words={second}
                  duration={secondDuration}
                  delay={firstTotalTime}
                />
              </h1>
              <h2 className="uppercase tracking-widest text-5xl font-[Bitcount_Prop_Single] text-white mt-10">
                {/* start after first finishes */}
                <TextGenerateEffect
                  words={third}
                  duration={thirdDuration}
                  delay={firstTotalTime + secondDuration + staggerInterval * (second.split(" ").filter(Boolean).length - 1)}
                />
              </h2>

            </div>
            <ButtonsCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
