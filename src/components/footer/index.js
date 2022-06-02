/**
 * author: ღ
 * date: 2022/5/26
 */
import React, { Fragment} from 'react'
import './index.scss'
import Twitter from "../../assets/images/twitter.png";
import Discord from "../../assets/images/discord.png";

const Footers = function () {
    return(
        <Fragment>
            <footer id={ 'footer' }>
                <div className={ 'con-r-ic' }>
                    <div className={'con-r-icz'}>
                        <img className={ 'con-r-ic' } src={ Twitter } alt="" />
                    </div>
                    <div className={'con-r-icz'}>
                        <img className={ 'con-r-ic' } src={ Discord } alt=""/>
                    </div>
                </div>
                <section className={ 'view-footer' }>
                    ©2022 HyperDog In Space. All rights reserved.
                </section>
            </footer>
        </Fragment>
    )
}

export default Footers
