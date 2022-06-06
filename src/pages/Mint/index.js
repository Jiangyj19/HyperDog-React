/**
 * author: ღ
 * date: 2022/5/27
 */
import React, { PureComponent, Fragment } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import './index.scss'
import './h5_index.scss'
import withRouter from '../../components/withRouter'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import FillCotainer from '../../assets/images/FillCotainer.png'
import web3Method from './../../web3/index'
import { Spin, message } from 'antd'
import Web3 from 'web3/dist/web3.min.js'

class Mint extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        console.log(this.props)
        // if (window.ethereum) {
        //     try {
        //         window.ethereum.on("accountsChanged", (accounts) => {
        //             const web3 = new Web3(window.ethereum)
        //             window._FE_provider = window.ethereum
        //             window._FE_web3 = web3
        //             if (accounts) {
        //                 let s = accounts[0].slice(0, 5)
        //                 let e = accounts[0].substring(accounts[0].length - 4, accounts[0].length)
        //                 web3Method.web3Obj.chainID = web3Method.hex2int(window.ethereum.chainId)
        //                 web3Method.web3Obj.accounts = accounts
        //                 web3Method.web3Obj.isLogin = true
        //                 web3Method.web3Obj.viewAccounts = s + '...' + e
        //                 window.localStorage.setItem(web3Method.web3Info, JSON.stringify(web3Method.web3Obj))
        //                 // console.log(web3Method.getWeb3Info())
        //             }
        //         })
        //     } catch (e) {
        //         web3Method.DisConnect()
        //     }
        // }
    }

    mint = () => {
        if (!web3Method.getWeb3Info().isLogin) {
            message.warn('Please Connect Wallet~')
            return
        }
        this.setState({
            loading: true
        })
        const hide = message.loading('Mint...', 0) // Dismiss manually and asynchronously
        setTimeout(hide, 2500)
      web3Method.Mint().then(res => {
          console.log(res)
          message.success('transactionHash: ' + res.transactionHash, 3)
          this.setState({
              loading: false
          })
      }).catch(err => {
          console.log(err)
          this.setState({
              loading: false
          })
          if (err.code && err.message) {
              message.error(err.code + err.message, 3)
          } else {
              message.error('error')
          }
      })
    }

    render() {
        return <Fragment>
            <Headers { ...this.props } via={ web3Method.web3Obj.viewAccounts } />
            <main id={ 'Mint' }>
                <div className={ 'mint-content' }>
                    <div className={'goBack'} onClick={ () => this.props.navigate(-1) }>
                        <LeftOutlined className={ 'goBackIc' } />
                        <div className={ 'goBackText' }>Go Back</div>
                    </div>
                    {/*<Spin spinning={ this.state.loading }>*/}
                        <div className={ 'mint-box' }>
                            <div className={ 'FillCotainer' }>
                                <img className={ 'FillCotainernft' } src={ FillCotainer } alt="" />
                            </div>
                            <div className={ 'FillCotainer FillCotainer1' }>
                                <div className={ 'r-title' }>Pre-Sale</div>
                                {/*<div className={ 'r-title' }>Dutch Auction</div>*/}
                                {/*<div className={ 'r-title' }>Public sale</div>*/}
                                <div className={ 'r-subtitle' }>Open to white list users</div>
                                <ul className={ 'fillCotainer-ul' }>
                                    <li className={ 'fillCotainer-ul-li' }>
                                        <span className={ 'li-label' }>In Progress</span>
                                        <span className={ 'li-value' }>900 / <span className={ 'li-value1' }>4000</span></span>
                                    </li>
                                    <li className={ 'fillCotainer-ul-li' }>
                                        <span className={ 'li-label' }>In Progress</span>
                                        <span className={ 'li-value' }>0.2ETH</span>
                                    </li>
                                    <li className={ 'fillCotainer-ul-li' }>
                                        <span className={ 'li-label' }>Quantity</span>
                                        <span className={ 'li-value' }>1</span>
                                    </li>
                                    {/*<li className={ 'fillCotainer-ul-li' }>*/}
                                    {/*    <span className={ 'li-label' }>The price will drop in</span>*/}
                                    {/*    <span className={ 'li-value' }>16 minutes</span>*/}
                                    {/*</li>*/}
                                </ul>
                                <div className={ 'will-pay-box' }>
                                    <span className={ 'li-label' }>You will pay</span>
                                    <span className={ 'li-value' }>0.2 ETH</span>
                                </div>
                                {
                                    this.state.loading ?
                                        <div className={ 'mint-button mint-button1' }>MINT...</div>
                                        :
                                        <div className={ 'mint-button mint-button1' } onClick={ () => this.mint() }>MINT</div>
                                }
                                {/*<div className={ 'mint-button mint-button2' }>SOLD OUT</div>*/}
                            </div>
                        </div>
                    {/*</Spin>*/}
                </div>
            </main>
            <Footers />
        </Fragment>
    }
}

export default withRouter(Mint)
