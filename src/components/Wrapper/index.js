import "./style.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = () => {

  return (
    <div className="wrapper">
      <div className="wrapper-text">
        <h2>
          <motion.div whileHover={{ scale: 1.09 }}>
            Hello, I'm a blockchain developer
          </motion.div>
        </h2>
        <p>
          <motion.div whileHover={{ scale: 1.18 }}>
            I help businesses build blockchain applications
          </motion.div>
        </p>
        <motion.div
          whileHover={{scale: 1.09}}
        >
          <button className="wrapper-btn">Learn More About Me</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Wrapper;
