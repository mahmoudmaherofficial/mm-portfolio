import type { ReactNode } from "react";
import { motion } from "framer-motion";

const SectionDescription = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
      {children}
    </motion.p>
  );
};

export default SectionDescription;
