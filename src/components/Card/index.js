import "./style.scss";
import { motion } from "framer-motion";

const Card = (props) => {
  const { portoList } = props;
  return (
    <div className="cards-wrapper">
      {portoList.map((item) => (
        <div className="card">
          <div className="card-text">
            <motion.div whileHover={{ x: [0, 10, 0] }}>
              <h3 className="card-name">{item.name}</h3>
              <p className="card-desc">{item.desc}</p>
            </motion.div>
          </div>
          <img src={item.imgUrl} alt="" className="card-img"></img>
        </div>
      ))}
    </div>
  );
};

export default Card;
