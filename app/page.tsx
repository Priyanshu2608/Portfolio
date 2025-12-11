import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Contact",
      link: "#contact",
    },
   
  ];
  
  return (
   
     <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="mx-w-7xl w-full ">
        <FloatingNav 
        navItems={navItems}
        className="bg-[#000319] font-[Bitcount_Prop_Single] font-bold text-lg"
        />
        <Hero/>
        <Grid/>
      </div>
     </main>
  );
}
