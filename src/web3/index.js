/**
 * author: ღ
 * date: 2022/6/4
 */
import Web3 from 'web3/dist/web3.min.js'
import Web3Modal from "web3modal/dist/index.js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

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

const web3Modal = new Web3Modal({
    network: "ropsten", // optional
    cacheProvider: false, // optional
    providerOptions // required
})

const WalletConnect = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const provider = await web3Modal.connect();
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

export default {
    web3Info,
    WalletConnect,
    DisConnect,
    getWeb3Info
}
