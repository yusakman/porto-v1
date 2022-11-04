import logo from "../../assets/avatar.jpg";
import "./style.scss";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const { navList } = props;
  return (
    <div className="navbar" id="navbar">
      <motion.div whileHover={{rotate: 360}}>
        <img src={logo} className="navlogo" alt=""></img>
      </motion.div>

      <div className="navright">
        {navList.map((item) => (
          <a href={item.url} key={item.url}>{item.text}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
