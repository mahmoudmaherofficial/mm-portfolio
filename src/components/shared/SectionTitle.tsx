import type { ReactNode } from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center text-5xl font-extrabold">
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
