import { cn } from "@/lib/utils";
import { GradientBackground } from "./gradient-background";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
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
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {

  // Normal styles for other IDs
  const idStyles: Record<number, string> = {
    1: "relative overflow-hidden",  // required for gradient to be background
    2: "bg-gradient-to-br from-[#11003b] to-[#350067]",
    3: "bg-gradient-to-br from-[#0c003b] to-[#1a0060]",
    4: "bg-gradient-to-br from-[#0f003b] to-[#3a044f]",
    5: "bg-gradient-to-br from-[#0a003b] to-[#220048]",
    6: "bg-gradient-to-br from-[#0c003b] to-[#3a0066] flex items-center justify-center",
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition hover:shadow-xl dark:border-white/20 dark:bg-black",
        idStyles[id],
        className
      )}
    >

      {/* ⭐ THE FIX → Animated gradient as a TRUE BACKGROUND only for ID 1 */}
      {id === 1 && (
        <GradientBackground size="150%" />
      )}

      {/* ⭐ Image (above gradient, but below text) */}
      {img && (
        <div className="absolute inset-0 -z-10 opacity-50">
          <img
            src={img}
            alt=""
            className={cn(
              imgClassName,
              "w-full h-full object-cover object-center"
            )}
          />
        </div>
      )}

      {/* ⭐ Text (always on top, readable on gradient) */}
      <div className="relative z-20 transition duration-200 group-hover/bento:translate-x-2">
        <h3
          className={cn(
            "mt-2 mb-2 font-bold text-white font-[Bitcount_Prop_Single]",
            titleClassName
          )}
        >
          {title}
        </h3>

        <p className=" text-xl text-white/80 font-[Bitcount_Prop_Single] font-semibold text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
