"use client";

import { cn } from "@/lib/utils";
import { GradientBackground } from "./gradient-background";
import GlobeCanvas from "./GlobeCanvas";

// Globe arc data for connections between cities
const globeArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: "#06b6d4",
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: "#3b82f6",
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: "#6366f1",
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: "#06b6d4",
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: "#3b82f6",
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: "#6366f1",
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: "#06b6d4",
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: "#3b82f6",
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: "#6366f1",
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: "#06b6d4",
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: "#3b82f6",
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: "#6366f1",
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: "#06b6d4",
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: "#3b82f6",
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: "#6366f1",
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: "#06b6d4",
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: "#3b82f6",
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: "#6366f1",
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: "#06b6d4",
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: "#3b82f6",
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: "#6366f1",
  },
 
];

export const BentoGrid = ({ className, children }: any) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
}: any) => {
  const idStyles: Record<number, string> = {
    1: "relative overflow-hidden",
    2: "relative overflow-hidden",
    3: "bg-gradient-to-br from-[#0c003b] to-[#1a0060]",
    4: "bg-gradient-to-br from-[#0f003b] to-[#3a044f]",
    5: "bg-gradient-to-br from-[#0a003b] to-[#220048]",
    6: "bg-gradient-to-br from-[#0c003b] to-[#3a0066] flex items-center justify-center",
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl border transition hover:shadow-xl dark:border-white/20 dark:bg-black",
        idStyles[id],
        className
      )}
    >
      {/* ⭐ ID 1 → Animated Gradient Background */}
      {id === 1 && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <GradientBackground size="200%" />
        </div>
      )}

      {/* ⭐ ID 2 → Rotating Globe Background with Arcs */}
      {id === 2 && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl scale-125   w-full bottom-5 bg-gradient-to-br from-[#0a003b] to-[#220048]">
          <GlobeCanvas
            config={{
              globeColor: "#062056",
              atmosphereColor: "#FFFFFF",
              showAtmosphere: true,
              emissive: "#062056",
              emissiveIntensity: 0.8,
              pointSize: 4,
              shininess: 0.9,
              polygonColor: "rgba(255,255,255,0.7)",
              ambientLight: "#38bdf8",
              directionalLeftLight: "#ffffff",
              directionalTopLight: "#ffffff",
              pointLight: "#ffffff",
              arcTime: 5000,
              arcLength: 0.9,
              rings: 1,
              maxRings: 3,
              autoRotate: true,
              autoRotateSpeed: 0.5,
            }}
            data={globeArcs}
          />
        </div>
      )}

      {/* ⭐ Optional Image Layer */}
      {img && (
        <div className="absolute inset-0 z-10 opacity-40">
          <img
            src={img}
            alt=""
            className={cn("w-full h-full object-cover object-center", imgClassName)}
          />
        </div>
      )}

      {/* ⭐ Text Layer Always On Top */}
      <div className="relative z-20 transition duration-200 group-hover/bento:translate-x-2 p-4">
        <h3
          className={cn(
            "mt-2 mb-2 font-bold text-white font-[Bitcount_Prop_Single]",
            titleClassName
          )}
        >
          {title}
        </h3>

        <p className="text-xl text-white/80 font-[Bitcount_Prop_Single] font-semibold text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
