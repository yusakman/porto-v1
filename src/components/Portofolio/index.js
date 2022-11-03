import "./style.scss";
import Card from "../Card";
import PortoBackground from "../PortoBackground";
import { motion } from "framer-motion";

const Portofolio = (props) => {
  return (
    <div className="portofolio" id="portofolio">
      <motion.div whileHover={{rotate: 360}}>
        <h2 className="porto-title">Portofolio</h2>
      </motion.div>

      <Card {...props}></Card>
      <PortoBackground></PortoBackground>
    </div>
  );
};

export default Portofolio;
