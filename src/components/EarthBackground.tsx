import { motion, useScroll, useTransform } from "framer-motion";
import world from "./world.webp";

export const EarthBackground = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [0.9, 1.5]);
  const opacity = useTransform(scrollY, [0, 200, 800], [1, 1, 0]);

  return (
    <motion.div  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 120,
    ease: "linear"
  }}
      style={{ scale, opacity }} 
      className="fixed top-4/5 md:top-3/5 left-1/2 -translate-x-1/2 w-[600px] md:w-full z-10 pointer-events-none "
    >
      <img src={world} className="w-full h-full object-cover rounded-full opacity-60" />
    </motion.div>
  );
};
