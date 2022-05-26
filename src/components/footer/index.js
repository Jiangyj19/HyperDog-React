/**
 * author: ღ
 * date: 2022/5/26
 */
import React, { Fragment} from 'react'
import './index.scss'

const Footers = function () {
    return(
        <Fragment>
            <footer id={ 'footer' }>
                <section className={ 'view-footer' }>
                    ©2021 Apes In Space. All rights reserved.
                </section>
            </footer>
        </Fragment>
    )
}

export default Footers
