/**
 * author: ღ
 * date: 2022/6/4
 */
import Web3 from 'web3/dist/web3.min.js'
import Web3Modal from "web3modal/dist/index.js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { message } from 'antd'

const web3Info = 'web3Info'

const web3Obj = {
    chainID: null,
    accounts: null,
    viewAccounts: null,
    isLogin: null
}

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

export const web3Modal = new Web3Modal({
    network: "ropsten", // optional
    cacheProvider: false, // optional
    providerOptions // required
})

const WalletConnect = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const provider = await web3Modal.connect();
            console.log(web3Modal)
            const web3 = new Web3(provider);
            window._FE_provider = provider
            window._FE_web3 = web3
            const accounts = await web3.eth.getAccounts()
            const chainID = await web3.eth.getChainId();
            if (accounts) {
                let s = accounts[0].slice(0, 5)
                let e = accounts[0].substring(accounts[0].length - 4, accounts[0].length)
                // console.log(s,e);
                web3Obj.chainID = chainID
                web3Obj.accounts = accounts
                web3Obj.isLogin = true
                web3Obj.viewAccounts = s + '...' + e
                window.localStorage.setItem(web3Info, JSON.stringify(web3Obj))
                resolve(web3Obj)
            }
        } catch (e) {
            reject(e)
        }
    })
}

async function DisConnect() {
    return new Promise(async (resolve, reject) => {
        try {
            const clear = await web3Modal.clearCachedProvider();
            // document.getElementById("address").innerHTML = "Connect";
            if (refreshState()) {
                resolve(clear)
            }
        } catch (e) {
            reject(e)
        }
    })
}

const refreshState = () => {
    Object.keys(web3Obj).forEach(i => {
        web3Obj[i] = null
    })
    window.localStorage.removeItem(web3Info)
    window._FE_provider = null
    window._FE_web3 = null
    return true
}

function getWeb3Info() {
    return {
        provider: window._FE_provider ? window._FE_provider : null,
        web3: window._FE_web3 ? window._FE_web3 : null,
        ...JSON.parse(window.localStorage.getItem(web3Info))
    }
}


const Mint = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const abi = [{"inputs":[{"internalType":"string","name":"_initUnRevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintOneTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleConfig","outputs":[{"internalType":"bool","name":"revealed","type":"bool"},{"internalType":"uint32","name":"freeMintCount","type":"uint32"},{"internalType":"uint64","name":"publicSalePriceWei","type":"uint64"},{"internalType":"uint256","name":"saleStartingTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_saleStartingTime","type":"uint256"}],"name":"setStartingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newUnRevealedURI","type":"string"}],"name":"setUnRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
            const nftContractAddress = '0xA3D53FD97c9081fe043d27EbE9381AAE0E6Cb628'
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const web3 = new Web3(window.ethereum)
            const nftContract = new web3.eth.Contract(abi, nftContractAddress)
            console.log(nftContract)
            const mintsend = await nftContract.methods.mint(accounts[0],1).send({from:accounts[0],value:100000000000000})
            // console.log(mintsend)
            resolve(mintsend)
        } catch (e) {
            // console.log(e)
            reject(e)
        }
    })
}

function hex2int(hexStr) {
    let twoStr = parseInt(hexStr,16).toString(2); // 将十六转十进制，再转2进制
    let bitNum = hexStr.length * 4; // 1个字节 = 8bit ，0xff 一个 "f"就是4位
    if(twoStr.length < bitNum){
        while(twoStr.length < bitNum){
            twoStr = "0" + twoStr;
        }
    }
    if(twoStr.substring(0,1) == "0"){
        // 正数
        twoStr = parseInt(twoStr,2); // 二进制转十进制
        return twoStr;
    }else{
        // 负数
        let twoStr_unsign = "";

        console.log("hex2int--->"+parseInt(twoStr,2));
        twoStr = parseInt(twoStr,2) - 1; // 补码：(负数)反码+1，符号位不变；相对十进制来说也是 +1，但这里是负数，+1就是绝对值数据-1
        console.log("hex2int--->"+twoStr);

        twoStr = twoStr.toString(2);
        twoStr_unsign = twoStr.substring(1,bitNum); // 舍弃首位(符号位)
        // 去除首字符，将0转为1，将1转为0   反码
        twoStr_unsign = twoStr_unsign.replace(/0/g, "z");
        twoStr_unsign = twoStr_unsign.replace(/1/g, "0");
        twoStr_unsign = twoStr_unsign.replace(/z/g, "1");

        console.log("hex2int--->"+twoStr_unsign);
        console.log("hex2int--->"+(-twoStr_unsign));
        twoStr = parseInt(-twoStr_unsign, 2);
        return twoStr;
    }
}

export default {
    web3Info,
    WalletConnect,
    DisConnect,
    getWeb3Info,
    web3Obj,
    web3Modal,
    Mint,
    hex2int
}
