import "./style.scss";
import { motion } from "framer-motion";

const Chain = (props) => {
  const { chainList } = props;

  return (
    <div className="chain">
      <h2 className="chain-title">EVM Chains I'm farmiliar with</h2>
      <p className="chain-text">
        There are more than 80 EVM Chains where you can develop your blockchain
        applications. Let me help you build your blockchain applications.
      </p>
      <div className="chain-list">
        {chainList.map((item) => (
          <motion.div className="item" whileHover={{ y: [0, -5, 5, 0] }}>
            <img src={item.imgUrl} alt="" className="item-icon"></img>
            <p className="item-name">{item.name}</p>
          </motion.div>
        ))}
      </div>
      <h4>
        And 80+ more EVM Chains. Non-EVM are also welcome, let me know which chain do you want to develop
        with.
      </h4>
    </div>
  );
};

export default Chain;
