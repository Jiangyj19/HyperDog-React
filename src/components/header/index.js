/**
 * author: ღ
 * date: 2022/5/25
 */
import React, { Fragment, useState, useEffect } from 'react'
import './index.scss'
import './h5_index.scss'
import Logo from './../../assets/images/LOGO.png'
import Logoh5 from './../../assets/images/h5/LOGO.png'
import Breadcrumbs from './../../assets/images/h5/Breadcrumbs.png'
import Breadcrumbs1 from './../../assets/images/h5/Breadcrumbs1.png'
import arrow from './../../assets/images/h5/arrow.png'
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
    const [ h5buy, seth5buy ] = useState(false)
    const [ h5modal, seth5modal ] = useState(false)

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
            <header id={ 'h5_header' }>
                <div className={'logo-box'}>
                    <img className={ 'logo' } src={ Logoh5 } alt="" />
                </div>
                <div className={ 'h5_he_r' }>
                    { !isLogin && <div className={ 'btn' } onClick={ () => setIsLogin(true) }>CONNECT</div> }
                    { isLogin && <div className={ 'btn' }>0x18D...724F</div> }
                    <div onClick={ () => seth5modal(true) }>
                        <img className={ 'Breadcrumbs' } src={ Breadcrumbs } alt="" />
                    </div>
                </div>
                <div className={ `modal ${ h5modal? 'modal1' : ''}` }>
                    <div>
                        <div className={ 'modal-top' }>
                            <div className={'logo-box1'}>
                                <img className={ 'logo' } src={ Logoh5 } alt="" />
                            </div>
                            <div>
                                <img onClick={ () => seth5modal(false) } className={ 'Breadcrumbs1' } src={ Breadcrumbs1 } alt="" />
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li onClick={ () => handleNavigate('/') } className={ `tabs ${tabsToggle === '/' && 'tab-active'}` }>
                                    HOME
                                </li>
                                <li onClick={ () => handleNavigate('/gallery') } className={ `tabs ${tabsToggle === '/gallery' && 'tab-active'}` }>
                                    GALLERY
                                </li>

                                <li className={ `tabs tabs1` } onClick={ () => seth5buy(!h5buy) }>
                                    <span>BUY</span>
                                    <img className={ `gt ${ !h5buy && 'rot' }` } src={ arrow } alt="" />
                                </li>
                                {
                                    h5buy && <li className={ `tabs2` }>
                                        <div className={ 'olink' } onClick={ () => window.open('https://opensea.io/') }>OpenSea</div>
                                        <div className={ 'olink' } onClick={ () => window.open('https://looksrare.org/') }>LooksRare</div>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={ 'con-r-mint' } onClick={ () => handleNavigate('/mint') }>MINT</div>
                        <div className={ 'con-r-ic' }>
                            <div className={'con-r-icz'}>
                                <img className={ 'con-r-ic' } src={ Twitter } alt="" />
                            </div>
                            <div className={'con-r-icz'}>
                                <img className={ 'con-r-ic' } src={ Discord } alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

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
