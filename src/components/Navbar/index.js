import logo from "../../assets/y-logo.png";
import "./style.scss";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const { navList } = props;
  return (
    <div className="navbar">
      <motion.div whileHover={{rotate: 360}}>
        <img src={logo} className="navlogo"></img>
      </motion.div>

      <div className="navright">
        {navList.map((item) => (
          <a href="#">{item.text}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
