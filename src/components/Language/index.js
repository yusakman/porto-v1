import "./style.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Language = (props) => {
  const { languageList } = props;
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="language" id="tech-stacks">
      <motion.div whileHover={{ rotate: 360 }}>
        <h2 className="language-title">Tech Stacks</h2>
      </motion.div>
      <p className="language-text">
        These are the languages, frameworks, libraries, patterns, servers, software, and tools I'm currently using
      </p>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileHover={{ x: [0, -450] }}
          className="inner-carousel"
        >
          {languageList.map((item) => (
            <motion.div className="item">
              <img src={item.imgUrl} alt="" className="item-icon" ></img>
              <p className="item-name" key={item.name}>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Language;
