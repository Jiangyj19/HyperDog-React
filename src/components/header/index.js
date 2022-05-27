/**
 * author: ღ
 * date: 2022/5/25
 */
import React, { Fragment, useState, useEffect } from 'react'
import './index.scss'
import Logo from './../../assets/images/LOGO.png'
import Arrow from './../../assets/images/Arrow.png'
import Twitter from './../../assets/images/twitter.png'
import Twitter1 from './../../assets/images/twitter1.png'
import Discord from './../../assets/images/discord.png'
import Discord1 from './../../assets/images/discord1.png'
import loading from './../../assets/images/home/loading.png'

const Headers = function (props) {
    const [ isLogin, setIsLogin ] = useState(false)
    const [ tabsToggle, setTabsToggle ] = useState('')
    const [ networkLoading, setNetworkLoading ] = useState(false)

    function handleNavigate(path, state = {}) {
        props.navigate(path, {
            state
        })
    }

    function handleReload() {
        window.location.reload()
    }

    useEffect(() => {
        setTabsToggle(props.location.pathname)
    }, [props.location.pathname])

    return(
        <Fragment>
            <header id={ 'header' }>
                <section className={ 'container' }>
                    <div className={ 'con-l con-gap' }>
                        <img onClick={ () => handleNavigate('/') } className={ 'logo' } src={ Logo } alt="" title="HYPER DOG" />
                        <div className={ 'con-l-tabs con-gap' }>
                            <div className={ `tab tab-hover ${ tabsToggle === '/' && 'tab-active' }` } onClick={ () => handleNavigate('/') }>HOME</div>
                            <div className={ `tab tab-hover ${tabsToggle === '/gallery' && 'tab-active'}` } onClick={ () => handleNavigate('/gallery') }>GALLERY</div>
                            <div className={ 'tab tab-hover tabBuy' }>BUY
                                <img className={ 'Arrow' } src={ Arrow } alt="" />
                                <div className={ 'tabMore-box' }>
                                    <div className={ 'tabMore' }>
                                        <div className={ 'moreSel' } onClick={ () => window.open('https://opensea.io/') }>OpenSea</div>
                                        <div className={ 'moreSel' } onClick={ () => window.open('https://looksrare.org/') }>LooksRare</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ 'con-r' }>
                        <div className={ 'con-r-icons' }>
                            <div className={'con-r-icz-1'}>
                                <img className={ 'con-r-ic con-r-ic11' } src={ Twitter } alt="" />
                                <img className={ 'con-r-ic con-r-ic12' } src={ Twitter1 } alt="" />
                            </div>
                            <div className={'con-r-icz-2'}>
                                <img className={ 'con-r-ic con-r-ic21' } src={ Discord } alt=""/>
                                <img className={ 'con-r-ic con-r-ic22' } src={ Discord1 } alt=""/>
                            </div>
                        </div>
                        <div className={ 'con-r-mint' } onClick={ () => handleNavigate('/mint') }>MINT</div>
                        { !isLogin && <div className={ 'con-r-connect' } onClick={ () => setIsLogin(true) }>CONNECT WALLET</div> }
                        { isLogin &&
                            <Fragment>
                                <div className={ 'logged-logout' }>
                                    <div className={ 'con-r-connect con-r-connect-logged' }>0x18D...724F</div>
                                    <div className={ 'con-r-connect con-r-connect-logout' } onClick={ () => setIsLogin(false) }>Sign Out</div>
                                </div>
                            </Fragment>
                        }
                    </div>
                </section>

            {/*   Switch network  */}
                { networkLoading && <section class={ 'switchNetwork' }>
                    <div class={ 'swnet-Box' }>
                        <div class={ 'sw-load-box' }>
                            <img className={ 'sw-loading-img' } src={ loading } alt=""/>
                        </div>
                        <div class={ 'sw-title' }>Wrong network</div>
                        <div className={ 'sw-subtitle' }>Looks like you connected to unsupported network. Change network to Mainnet</div>
                        <div className={ 'sw-btn' }>Switch network</div>
                    </div>
                </section> }

            </header>
        </Fragment>
    )
}

export default Headers
