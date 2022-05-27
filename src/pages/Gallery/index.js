/**
 * author: ღ
 * date: 2022/5/26
 */
import React, { Fragment, useState } from 'react'
import './index.scss'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import withRouter from '../../components/withRouter'
import searchicon from '../../assets/images/search.png'
// import { SettingOutlined } from '@ant-design/icons'
// import { Collapse, Select } from 'antd'

// const { Panel } = Collapse
// const { Option } = Select
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const Gallery = (props) => {
    const title = 'Gallery'
    // const [expandIconPosition, setExpandIconPosition] = useState('left')
    // const onPositionChange = (newExpandIconPosition) => {
    //     setExpandIconPosition(newExpandIconPosition)
    // }
    //
    // const onChange = (key) => {
    //     console.log(key)
    // }
    // const genExtra = () => (
    //     <SettingOutlined
    //         onClick={(event) => {
    //             // If you don't want click extra trigger collapse, you can prevent this:
    //             event.stopPropagation();
    //         }}
    //     />
    // )
    return <Fragment>
        <Headers { ...props } />
        <main id='Gallery'>
            <div className={ 'gallery-title' }>{ title }</div>
            <div>
                <div className={ 'filter-menu' }>
                    <div className={'search'}>
                        <img src={ searchicon } alt="" />
                        <input className={ 'enterInput' } type="text" placeholder='By ID' />
                    </div>
                    {/*<div>*/}
                    {/*    <Collapse*/}
                    {/*        defaultActiveKey={['1']}*/}
                    {/*        onChange={onChange}*/}
                    {/*        expandIconPosition={expandIconPosition}*/}
                    {/*    >*/}
                    {/*        <Panel header="This is panel header 1" key="1" extra={genExtra()}>*/}
                    {/*            <div>{text}</div>*/}
                    {/*        </Panel>*/}
                    {/*        <Panel header="This is panel header 2" key="2" extra={genExtra()}>*/}
                    {/*            <div>{text}</div>*/}
                    {/*        </Panel>*/}
                    {/*        <Panel header="This is panel header 3" key="3" extra={genExtra()}>*/}
                    {/*            <div>{text}</div>*/}
                    {/*        </Panel>*/}
                    {/*    </Collapse>*/}
                    {/*    <br />*/}
                    {/*    <span>Expand Icon Position: </span>*/}
                    {/*    <Select*/}
                    {/*        value={expandIconPosition}*/}
                    {/*        style={{*/}
                    {/*            margin: '0 8px',*/}
                    {/*        }}*/}
                    {/*        onChange={onPositionChange}*/}
                    {/*    >*/}
                    {/*        <Option value="left">left</Option>*/}
                    {/*        <Option value="right">right</Option>*/}
                    {/*    </Select>*/}
                    {/*</div>*/}
                </div>
            </div>
        </main>

        <Footers />
    </Fragment>
}

export default withRouter(Gallery)
