import "./style.scss";

const Footer = (props) => {
  const { iconList, navList } = props;

  return (
    <div className="footer" id="footer">
      <div className="left-section">
        <p className="footer-title">Follow my social media</p>
        <div className="icon-list">
          {iconList.map((item) => (
            <a href={item.url}><img src={item.imgUrl} key={item.name} alt="" ></img></a>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="nav-list">
          {navList.map((item) => (
            <a href={item.url} key={item.text}>{item.text}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
