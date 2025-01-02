import React from 'react';
import { motion } from 'framer-motion';

const Square = ({ position, containerHeight }) => {
  return (
    <motion.div
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
      initial={{ y: 0 }}
      animate={{ y: containerHeight }}
      transition={{
        duration: Math.random() * 3 +1,
        ease: 'linear',
      }}
    />
  );
};

export default Square;
