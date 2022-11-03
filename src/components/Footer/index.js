import "./style.scss";

const Footer = (props) => {
  const { iconList, navList } = props;

  return (
    <div className="footer">
      <div className="left-section">
        <p className="footer-title">Follow my social media</p>
        <div className="icon-list">
          {iconList.map((item) => (
            <img src={item.imgUrl} alt=""></img>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="nav-list">
          {navList.map((item) => (
            <p>{item.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
