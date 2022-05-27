/**
 * author: ღ
 * date: 2022/5/27
 */
import React, { PureComponent, Fragment } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import './index.scss'
import withRouter from '../../components/withRouter'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import FillCotainer from '../../assets/images/FillCotainer.png'

class Mint extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return <Fragment>
            <Headers { ...this.props } />
            <main id={ 'Mint' }>
                <div className={ 'mint-content' }>
                    <div className={'goBack'} onClick={ () => this.props.navigate(-1) }>
                        <LeftOutlined className={ 'goBackIc' } />
                        <div className={ 'goBackText' }>Go Back</div>
                    </div>
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
                            <div className={ 'mint-button mint-button1' }>MINT</div>
                            {/*<div className={ 'mint-button mint-button2' }>SOLD OUT</div>*/}
                        </div>
                    </div>
                </div>
            </main>
            <Footers />
        </Fragment>
    }
}

export default withRouter(Mint)
