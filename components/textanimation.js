import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextAnimator({
  value,
  size = 20,
  color,
  waight = 500,
}) {
  return (
    <div
      className="flex justify-center items-center h-10 bg-white bg-opacity-30"
      style={{
        fontSize: `${size}px`,
        color: `${color}`,
        fontWeight: `${waight}`,
      }}
    >
      <AnimatePresence>
        {Array.from(value).map((charcter, index) => {
          return (
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              key={index}
            >
              {charcter}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
