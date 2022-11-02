import Navbar from "../../components/Navbar";
import Portofolio from "../../components/Portofolio";
import ShapeDivider from "../../components/ShapeDivider";
import Wrapper from "../../components/Wrapper";
import Language from "../../components/Language";
import Chain from "../../components/Chain";
import staticData from "../../const/static";

const Home = () => {
  const props = {
    navList: staticData.navList,
    portoList: staticData.portoList,
    languageList: staticData.languageList,
    chainList: staticData.chainList
  };

  return (
    <div>
      <Navbar {...props}></Navbar>
      <Wrapper></Wrapper>
      <ShapeDivider></ShapeDivider>
      <Portofolio {...props}></Portofolio>
      <Language {...props}></Language>
      <Chain {...props}></Chain>
    </div>
  );
};

export default Home;
