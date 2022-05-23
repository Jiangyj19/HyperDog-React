import React , {useState}from "react";
import { 
  Tabs,
} from 'antd';

import "./Home.css";

import {
  TwitterOutlined
} from '@ant-design/icons'


import WOW from 'wow.js'
import Web3 from 'web3/dist/web3.min.js'
import Web3Modal from "web3modal/dist/index.js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import Img from '../../assets/images/0.png'
import Unnamed from '../../assets/images/unnamed.jpeg'
import wallet from '../../assets/images/wallet.svg'
import wallets from '../../assets/images/wallets.svg'
import wechat from '../../assets/images/wechat.jpeg'
import sm from '../../assets/images/sm.avif'
import discord from '../../assets/images/discord.svg'
import jeffk from '../../assets/images/jeffk.png'
import Boredfish from '../../assets/images/Boredfish.png'
import KafkaCoo from '../../assets/images/KafkaCoo.png'
import NorrisC from '../../assets/images/NorrisC.png'

const { TabPane } = Tabs;
const Home = () => {
  const providerOptions = {
    /* See Provider Options Section */
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "84e02827a94446f38cb4b655cc275363" // required
        }
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "My Awesome App", // Required
          infuraId: "84e02827a94446f38cb4b655cc275363", // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 3, // Optional. It defaults to 1 if not provided
          darkMode: false // Optional. Use dark theme, defaults to false
        }
      }
     
  };
const web3Modal = new Web3Modal({
  network: "ropsten", // optional
  cacheProvider: false, // optional
  providerOptions // required
})
  new WOW().init()
  const [provider, setProvider] = useState();
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [buyShow,setBuyshow] = useState(false)
  const [nftContract,setNftContract] = useState('')
  const [introduce,setIntroduce] = useState([
  { 
    name:'JEFFK',
    img:jeffk,
    introduction:'VC, continuous entrepreneurs, early blockchain participants, extreme sports enthusiasts. Invested and participated in more than 20 start-ups. Cornell MBA'
  },
  { 
    name:'NorrisC',
    img:NorrisC,
    introduction:'Norris C, a Hong Kong based designer, artist, economist. Norris past designing for powerful businessman, now he devoted himself to create a new era of meta-universe space.'
  },
  { 
    name:'Boredfish',
    img:Boredfish,
    introduction:'A serial entrepreneurs and block-chain builder since 2015. Specialized in community operation, branding and research.'
  },
  { 
    name:'KafkaCoo',
    img:KafkaCoo,
    introduction:'Core Team of FoundationDAO,by the people to bulid the ark of human civilization through web3. Also is a holder of blue chip NFT(BAYC,CryptoPunks,Moonbirds,Doodles,CloneX,etc..)'
  }
    
  ])



  const Mint = async() => {
    const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
    const nftContractAddress = '0x338F57FC318a755D970FF1A59b4Eb8cf4Dc23926'
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const nftContract = new web3.eth.Contract(abi,nftContractAddress)
    setNftContract(nftContract);
    await nftContract.methods.mint(accounts[0],1).send({from:accounts[0],value:100000000000000})
  }
  const refreshState = () => {
    setAccount();
    setChainId();
  };

  const WalletConnect = async() => {
  const provider = await web3Modal.connect();
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts()
  const chainID = await web3.eth.getChainId();
  setProvider(provider);
  setWeb3(web3);
  setChainId(chainID);
  if (accounts) {
    setAccount(accounts[0]);
    document.getElementById("address").innerHTML = accounts[0];
  }
}
async function DisConnect() {
  const clear = await web3Modal.clearCachedProvider();
  document.getElementById("address").innerHTML = "Connect";
  refreshState();
}


  return (
      <>
        <header className="header">
          <div className="headerCon jcsb">
            <div className="headerTitle">
              <div className="headerImg" >hyperdog</div>
              <div className="headerImg">gallery</div>
              <div className="headerImg" onClick={()=>setBuyshow(!buyShow)}>
                <div >Buy</div>
                {
                  buyShow ? (
                    <div className="contentText" onMouseLeave={()=>setBuyshow(false)}>
                      <div onClick={()=>window.open('https://www.baidu.com','_blank')}>OpenSea</div>
                      <div>LooksRare</div>
                    </div>
                  ):''
                }
              </div>
              
            </div>
         
            <div className="aic">
              <div className="headerIcon">
                {/* <div className="icon" > */}
                  <img style={{height:'30px',width:'30px'}} src={discord}/>
                {/* </div> */}
                <div className='icon'>
                  <TwitterOutlined  style={{color:'#fff',fontSize:'24px'}}/>
                </div>
              </div>
              <div className="headerConnect" onClick={()=>Mint()}>
                mint
              </div>
              <div id="address" className="headerConnect" onClick={()=>{
                WalletConnect()
              }}>
                Connect
              </div>
              <div className="headerConnect" onClick={()=>{
                DisConnect()
              }}>
                Disconnect
              </div>
            
            </div>
          </div>
        </header>
        
        {/* 中间 */}
        <div  className="center">
          <div className="introduction">
            <div className="info">HyperDog</div>
            <div className="info">Born in the Web3 world, HyperDog is a collection of 10,000 unusually super-excited avatars with richly diverse rarity-backed features.</div>
            <div className="info">Holding a vision of driving the universe HYPER, HyperDog is created for builders, artists, and pioneers of a decentralized future. Like dopamine, HYPER is spiritual energy generated by each of HyperDog to deliver optimism, passion, and creativity. </div>
            <div className="info">Let’s go HYPER together! Let’s build together!</div>
          </div>
          <img className="ufo" src={Img}/> 
        </div>
        
        {/* 动画 */}
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.5s">
                    <p>Roadmap 1.0 of Hyperdog</p>
                    <h2>Pre-mint</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Create a great community, launching Discord and Twitter;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Launch website and whitelist giveaways;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                10K NFTs are ready;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Exclusive pre-sale discount for whitelisted members only;
                                Post-mint
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Launch secondary market listing;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Open the shop, in which we create products with our own NFTs;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Continuous meet-up events across the world with our NFT holders;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Explore Hyperdog Metaverse with your own decentralized identity;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Airdrop a new collection or token to our hyper frens;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                List token and launch charity;
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        {/* 脚步介绍 */}
        <div className="footer">
            <div className="footerFir">YOUR FRENS THROUGH THE METAVERSE</div>
            <div className="footerSec">The Doodles Founders</div>
            <div className="footerThi">
              {/* <div className="footerBox">
                <img src="https://doodles.app/images/doodle_poopie.png"/>
                <div className="footerUrl">@evankeast</div>
                <div className="footerName">JEFFK</div>
                <div className="footerContent">VC, continuous entrepreneurs, early blockchain participants, extreme sports enthusiasts. Invested and participated in more than 20 start-ups. Cornell MBA</div>
              </div> */}
              {
                introduce.map(item=>{
                  return (
                    <div className="footerBox" key={item.name}> 
                      <img src={item.img}/>
                      <div className="footerName">{item.name}</div>
                      <div className="footerContent">{item.introduction}</div>
                    </div>
                  )
                })
              }
              
            </div>
            <div className="footerLast">
            Created by the Doodles Founders with special ♥ to our developer partners, West Coast NFT, our moderators, alfie, disclosure, and the support from the community, our friends, families, and loved ones.
            For all press inquiries, please contact press@doodles.app
            </div>
        </div>
       
      </>
  )
}

export default Home