import image1 from "../assets/images-porto/img-porto-1.jpg";
import image2 from "../assets/images-porto/img-porto-2.jpg";
import image3 from "../assets/images-porto/img-porto-3.jpg";
import image4 from "../assets/images-porto/img-porto-4.jpg";
import image5 from "../assets/images-porto/img-porto-5.jpg";
import imageL1 from "../assets/images-language/js-icon.svg";
import imageL2 from "../assets/images-language/typescript-icon.svg";
import imageL3 from "../assets/images-language/css3-icon.svg";
import imageL4 from "../assets/images-language/html-icon.svg";
import imageL5 from "../assets/images-language/solidity-icon.svg";
import imageL6 from "../assets/images-language/react-icon.svg";
import imageL7 from "../assets/images-language/bootstrap-icon.svg";
import imageL8 from "../assets/images-language/web3js-icon.svg";
import imageL9 from "../assets/images-language/angular-icon.svg";
import imageL10 from "../assets/images-language/gatsby-js-icon.svg";

import imgChain1 from "../assets/images-chain/ethereum-icon.svg"
import imgChain2 from "../assets/images-chain/binance-icon.png"
import imgChain3 from "../assets/images-chain/polygon-icon.svg"
import imgChain4 from "../assets/images-chain/fantom-icon.png"
import imgChain5 from "../assets/images-chain/avax-icon.svg"

import imgIcon1 from "../assets/social-imgs/github-icon.svg"
import imgIcon2 from "../assets/social-imgs/twitter-icon.svg"
import imgIcon3 from "../assets/social-imgs/instagram-icon.svg"
import imgIcon4 from "../assets/social-imgs/facebook-icon.svg"


const staticData = {
  navList: [
    {
      text: "Portofolio",
      url: "http://localhost:3000/#portofolio",
    },
    {
      text: "Tech",
      url:"http://localhost:3000/#tech-stacks"
    },
    {
      text: "Contact",
      url:"http://localhost:3000/#contact"
    },
  ],
  portoList: [
    {
      name: "Ergo DEX",
      desc: "Ergo is a simple DEX Aggregator",
      imgUrl: image1,
    },
    {
      name: "ReStaking",
      desc: "ReStaking is an app for staking LP tokens",
      imgUrl: image2,
    },
    {
      name: "Mesopotamia",
      desc: "Mesopotamia is a DEX with Order Book features.",
      imgUrl: image3,
    },
    {
      name: "Indo Car Rental",
      desc: "Car Rental platform for Indonesian users.",
      imgUrl: image4,
    },
    {
      name: "DeFi ID",
      desc: "Simple DeFi information web app",
      imgUrl: image5,
    },
  ],
  languageList: [
    {
      name: "Javascript",
      imgUrl: imageL1,
    },
    {
      name: "Typescript",
      imgUrl: imageL2,
    },
    {
      name: "Solidity",
      imgUrl: imageL5,
    },
    {
      name: "HTML",
      imgUrl: imageL4,
    },
    {
      name: "CSS",
      imgUrl: imageL3,
    },
    {
      name: "React",
      imgUrl: imageL6,
    },
    {
      name: "Bootstrap",
      imgUrl: imageL7,
    },
    {
      name: "Web3.js",
      imgUrl: imageL8,
    },
    {
      name: "Angular",
      imgUrl: imageL9,
    },
    {
      name: "Gatsby",
      imgUrl: imageL10,
    }
  ],
  chainList: [
    {
      name: 'Ethereum',
      imgUrl: imgChain1
    },
    {
      name: "BSC",
      imgUrl: imgChain2,
    },
    {
      name: "Polygon",
      imgUrl: imgChain3,
    },
    {
      name: "Fantom",
      imgUrl: imgChain4,
    },
    {
      name: "Avalanche",
      imgUrl: imgChain5,
    },
  ],
  iconList: [
    {
      name: "Github",
      imgUrl: imgIcon1,
      url:"https://github.com/yusakman",
    },
    {
      name: "Twitter",
      imgUrl: imgIcon2,
      url: "https://twitter.com/yusak_man",
    },
    {
      name: "Instagram",
      imgUrl: imgIcon3,
      url: "https://www.instagram.com/yusak_man/",
    },
    {
      name: "Facebook",
      imgUrl: imgIcon4,
      url: "https://www.facebook.com/yusak.manullang.50",
    },
  ]
};

export default staticData;
