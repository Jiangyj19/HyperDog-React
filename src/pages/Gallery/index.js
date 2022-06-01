/**
 * author: ღ
 * date: 2022/5/26
 */

import React, { Fragment, useState, useEffect, useCallback } from 'react'
import './index.scss'
import './h5_index.scss'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import withRouter from '../../components/withRouter'
import searchicon from '../../assets/images/search.png'
import filter from '../../assets/images/h5/filter.png'
import Close from '../../assets/images/h5/Close.png'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Collapse, Skeleton, Divider } from 'antd'
import _ from 'lodash'
import { FilterList, iconStyle } from './FilterList'
import Checkbox1 from '../../assets/images/checkbox1.png'
import Checkbox2 from '../../assets/images/checkbox2.png'
import GalleryData from './GalleryData'
import InfiniteScroll from 'react-infinite-scroll-component'

const { Panel } = Collapse

let timer = null
function debounce(fn, wait){
    if(timer !== null) {
        clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
}

const Gallery = props => {
    const title = 'Gallery'

    const [ expandList, setExpandList ] =  useState([]) // 展开项
    const [ panelList, setPanelList ] =  useState(FilterList) // 过滤条件数组
    const [ panelList1, setPanelList1 ] =  useState([]) // 监测 重置、筛选项
    const [ page, setPage ] = useState({ page: 1 })
    const [ search, setSearch ] = useState('')
    const [ h5Menu, seth5Menu ] = useState(false)

    let filterData = { listTitles: [], groupTitles: [] }

    const onChange = (key) => {
        setExpandList(key)
        panelList.forEach(i => {
            if (key.includes(i.key)) {
                i.icon = <MinusOutlined style={ iconStyle } />
            } else {
                i.icon = <PlusOutlined style={ iconStyle } />
            }
        })
        setPanelList([...panelList])
    }

    function handleChoose(i, index, j, index1) {
        j.active = !j.active
        setPanelList([...panelList])
        setPanelList1([...panelList])
    }

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleResetFilters() { // 重置
        let arr = panelList.map(i => { i.filterGroup = i.filterGroup.map(j => { j.active = false; return j }); return i })
        setPanelList([...arr])
        setPanelList1([...arr])
        setExpandList([])
        onChange([])
        setSearch('')
    }
    useEffect(() => {
        handleResetFilters()
    }, [])

    function funcFilter() {
        console.log(page)
        console.log('ListTitles GroupTitles', filterData)
        console.log('search', search)
    }

    useEffect(() => {
        console.log(GalleryData)
        setPage({ page: 1 })
        let arr = []
        panelList1.forEach(i =>  {
            let filterGroupArr = []
            if (i.filterGroup.filter(j => j.active).length) {
                filterGroupArr = [ ...filterGroupArr, ...i.filterGroup.filter(j => j.active) ]
                arr.push({
                    title: i.title,
                    filterList: [...filterGroupArr]
                })
            }
        })
        filterData = { listTitles: arr.map(i => i.title), groupTitles: arr.map(i => i.filterList.map(j => j.title)).flat(Infinity) }
        debounce(funcFilter, 1e3)
    }, [panelList1, search])

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const loadMoreData = () => {
        if (loading) {
            return
        }

        setLoading(true);
        fetch('https://randomuser.me/api/?results=50&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
    };

    useEffect(() => {
        loadMoreData();
    }, [])

    return <Fragment>
        <Headers { ...props } />
        <main id='Gallery'>
            <div className={ 'gallery-title' }>
                { title }
                <div className={ 'h5-filter' } onClick={ () => seth5Menu(true) }>
                    <img className={ 'filter-icon' } src={ filter } alt="" />
                    <p className={ 'filter-text' }>Filters</p>
                </div>
            </div>
            <div className={ 'gallery-view' }>
                <div className={ `filter-menu ${ h5Menu ? 'filter-menu1' : '' }` }>
                    <div className={ 'h5_close' }>
                        <p className={ 'filter-text' }>Filters</p>
                        <img onClick={ () => seth5Menu(false) } className={ 'filter-icon' } src={ Close } alt="" />
                    </div>
                    <div className={'search'}>
                        <img src={ searchicon } alt="" />
                        <input onInput={ handleSearch } value={ search } className={ 'enterInput' } type="text" placeholder='By ID' />
                    </div>
                    <div className={ 'filter-menu-collapse' }>
                        <Collapse
                            defaultActiveKey={ expandList }
                            onChange={ onChange }
                            expandIconPosition={ 'right' }
                            ghost={ true }
                            activeKey={ expandList }
                        >
                            {
                                panelList.map((i, index) => (
                                    <Panel showArrow={ false }
                                           header={ i.title }
                                           key={ i.key } extra={ i.icon } >
                                        {
                                            <ul className={ 'filter-panel-ul' }>
                                                {
                                                    i.filterGroup.map((j, index1) => <Fragment key={ index1 }>
                                                            <li className={ 'filter-panel-li' } key={ index1 }>
                                                                <div className={ 'filter-panel-li-box' } onClick={ () => handleChoose(i, index, j, index1) }>
                                                                    <div>
                                                                        { !j.active ?
                                                                            <img className={ 'filter-panel-li-checkbox' } src={ Checkbox1 } alt="" /> :
                                                                            <img className={ 'filter-panel-li-checkbox' } src={ Checkbox2 } alt="" />
                                                                        }
                                                                    </div>
                                                                    <span className={ 'filter-panel-li-span' }>{ j.title }</span>
                                                                </div>
                                                            </li>
                                                    </Fragment>)
                                                }
                                            </ul>
                                        }
                                    </Panel>
                                ))
                            }
                        </Collapse>
                    </div>
                    <div className={ 'gallery-filters-btn' } onClick={ () => handleResetFilters() }>Reset Filters</div>
                </div>
                <div className={ 'gallery-list-nft-view' } id={ 'scrollableDiv' }>
                    <InfiniteScroll
                        dataLength={data.length}
                        next={loadMoreData}
                        hasMore={data.length < 50}
                        endMessage={ <div className={ 'no-more' }>no more</div> }
                        scrollableTarget="scrollableDiv"
                    >
                        <ul className={ 'gallery-list-nft-ul' }>
                            {
                                GalleryData.map((i, index) => <Fragment key={ index }>
                                    <li key={ index } className={ 'gallery-list-nft' }>
                                        <div><img className={ 'g-nft' } src={ i.img } alt="" /></div>
                                        <div><p className={ 'g-nft-name' }>{ i.name }</p></div>
                                    </li>
                                </Fragment>)
                            }
                        </ul>
                    </InfiniteScroll>
                </div>
            </div>
        </main>

        <Footers />
    </Fragment>
}

export default withRouter(Gallery)
