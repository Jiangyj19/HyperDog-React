/**
 * author: ღ
 * date: 2022/5/26
 */
import React, { Fragment } from 'react'
import './index.scss'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import withRouter from '../../components/withRouter'

const Gallery = (props) => {
    return <Fragment>
        <Headers { ...props } />

        <main id='Gallery'>
        </main>

        <Footers />
    </Fragment>
}

export default withRouter(Gallery)
