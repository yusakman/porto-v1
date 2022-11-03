import Navbar from "../../components/Navbar";
import Portofolio from "../../components/Portofolio";
import ShapeDivider from "../../components/ShapeDivider";
import Wrapper from "../../components/Wrapper";
import Language from "../../components/Language";
import Chain from "../../components/Chain";
import staticData from "../../const/static";
import ContactMe from "../../components/ContactMe"; 
import Footer from "../../components/Footer";

const Home = () => {
  const props = {
    navList: staticData.navList,
    portoList: staticData.portoList,
    languageList: staticData.languageList,
    chainList: staticData.chainList,
    iconList: staticData.iconList,
  };

  return (
    <div>
      <Navbar {...props}></Navbar>
      <Wrapper></Wrapper>
      <ShapeDivider></ShapeDivider>
      <Portofolio {...props}></Portofolio>
      <Language {...props}></Language>
      <Chain {...props}></Chain>
      <ContactMe></ContactMe>
      <Footer {...props}></Footer>
    </div>
  );
};

export default Home;
