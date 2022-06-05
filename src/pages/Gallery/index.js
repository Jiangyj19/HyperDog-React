/**
 * author: ღ
 * date: 2022/5/26
 */

import React, { Fragment, useState, useEffect, useCallback, Component } from 'react'
import './index.scss'
import './h5_index.scss'
import Headers from './../../components/header/index.js'
import Footers from './../../components/footer/index.js'
import withRouter from '../../components/withRouter'
import searchicon from '../../assets/images/search.png'
import filter from '../../assets/images/h5/filter.png'
import Close from '../../assets/images/h5/Close.png'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Collapse, Skeleton, Divider, Spin } from 'antd'
import _ from 'lodash'
import { FilterList, iconStyle } from './FilterList'
import Checkbox1 from '../../assets/images/checkbox1.png'
import Checkbox2 from '../../assets/images/checkbox2.png'
import GalleryData from './GalleryData'
import InfiniteScroll from 'react-infinite-scroll-component'
import { galleryUrl, galleryImgUrl, fetchGet } from '../../api'
import metadata from './_metadata.json'

const { Panel } = Collapse

let timer = null
function debounce(fn, wait){
    if(timer !== null) {
        clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
}
const title = 'Gallery'
let json = JSON.stringify(metadata)

class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        expandList: [], // 展开项
        panelList: FilterList, // 过滤条件数组
        panelList1: [], // 监测 重置、筛选项
        page: {
            pageSize: 50, // 每页多少条数据
            currentPage: 0, //第几页
            total: metadata.length //总共有多少条数据
        },
        search: '',
        h5Menu: false,
        viewData: [],
        filterData: { listTitles: [], groupTitles: [] },
        metadata1: [],
        loading: false,
        reset: true
    }

    onChange = (key) => {
        let panelList = this.state.panelList
        panelList.forEach(i => {
            if (key.includes(i.key)) {
                i.icon = <MinusOutlined style={ iconStyle } />
            } else {
                i.icon = <PlusOutlined style={ iconStyle } />
            }
        })
        this.setState({
            expandList: [...key],
            panelList: [...panelList]
        })
    }

   handleChoose = (i, index, j, index1) => {
        j.active = !j.active
       let panelList = [...this.state.panelList]
       this.setState({
           panelList: [...panelList],
           panelList1: [...panelList]
       })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.search !== this.state.search
            ||
            nextState.panelList1 !== this.state.panelList1) {
            let arr = []
            nextState.panelList1.forEach((i, index) =>  {
                let filterGroupArr = []
                if (i.filterGroup.filter(j => j.active).length) {
                    filterGroupArr = [ ...filterGroupArr, ...i.filterGroup.filter(j => j.active) ]
                    arr.push({
                        title: i.title,
                        index,
                        filterList: [...filterGroupArr]
                    })
                }
            })
            this.setState({
                loading: true,
                filterData: {
                    listTitles: arr.map(i => {
                        return {
                            index: i.index,
                            title: i.title,
                            filterList: i.filterList
                        }
                    }),
                    groupTitles: Array.from(new Set(arr.map(i => i.filterList.map(j => j.title)).flat(Infinity))) }
            }, () => {
                debounce(this.funcFilter, 1e3)
            })
        }
        return true
    }

   handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

   handleResetFilters = () => { // 重置
       this.onChange([])
        if (this.state.reset) {
            let arr = this.state.panelList.map(i => { i.filterGroup = i.filterGroup.map(j => { j.active = false; return j }); return i })
            this.setState({
                panelList: [...arr],
                panelList1: [...arr],
                expandList: [],
                search: ''
            }, () => {
            })
            this.setState({
                reset: false
            })
        }
   }

    funcFilter = () => {
        let arr = JSON.parse(json)
        let arrView = []
        let fd = this.state.filterData.listTitles
        // console.log('ListTitles GroupTitles', this.state.filterData)
        if (!!this.state.search) { // 搜索
            this.setState({
                reset: true
            })
            let search = this.state.search.toLowerCase()
            let i = 0
            while (i < arr.length) {
                let len = arr[i].attributes.length
                let seArr = arr[i].attributes
                for (let j = 0; j < len; j++) {
                    if (search.indexOf(seArr[j].value.toLowerCase()) !== -1
                        &&
                        search.length <= seArr[j].value.toLowerCase().length) {
                        arrView.push(arr[i])
                        break
                    }
                }
                i++
            }
            this.setState({
                viewData: [],
                metadata1: [...arrView]
            }, () => {
                this.setState({
                    page: {
                        pageSize: 50,
                        currentPage: 1,
                        total: arrView.length
                    }
                }, () => {
                    this.loadMoreData()
                })
            })
            // console.log(arrView)
        } else if (!!fd.length) { // 过滤
            this.setState({
                reset: true
            })
            let i = 0
            while (i < arr.length) {
                fd.forEach(j => {
                    let title = j.filterList.map(k => k.title)
                    if (title.includes(arr[i].attributes[j.index].value)) {
                        arrView.push(arr[i])
                    }
                })
                i++
            }
            this.setState({
                viewData: [],
                metadata1: [...arrView]
            }, () => {
                this.setState({
                    page: {
                        pageSize: 50,
                        currentPage: 1,
                        total: arrView.length
                    }
                }, () => {
                    this.loadMoreData()
                })
            })
            // console.log(arrView)
        } else { // all 全部
            this.setState({
                reset: false
            })
            this.setAllData()
        }
    }


    setAllData = () => { // all 全部
        this.setState({
            viewData: [],
            metadata1: [...JSON.parse(json)],
            page: {
                pageSize: 50,
                currentPage: 1,
                total: JSON.parse(json).length
            }
        }, () => {
            this.loadMoreData()
        })
    }


    dataPhilosophical = () => { // 拆分展数据
        let data = this.state.metadata1.slice(
            (this.state.page.currentPage - 1) * this.state.page.pageSize,
            this.state.page.pageSize + ((this.state.page.currentPage - 1) * this.state.page.pageSize))
        // console.log(this.state.page)
        this.setState({
            viewData: [...this.state.viewData, ...data]
        }, () => {
            // console.log(this.state.viewData)
            this.setState({
                loading: false
            })
        })
    }

    loadMoreData = () => { // 获取数据
        this.dataPhilosophical()
    }

    loadMoreData1 = () => { // 获取数据 分页
        let cpeg = this.state.page.currentPage + 1
        this.setState({
            page: {
                pageSize: 50,
                currentPage: cpeg,
                total: this.state.metadata1.length
            }
        }, () => {
            this.loadMoreData()
        })
    }

    componentDidMount() {
        this.handleResetFilters()
    }

    render() {
        return <Fragment>
            <Headers { ...this.props } />
            <main id='Gallery'>
                <div className={ 'gallery-title' }>
                    { title }
                    <div className={ 'h5-filter' } onClick={ () => this.setState({ h5Menu: true }) }>
                        <img className={ 'filter-icon' } src={ filter } alt="" />
                        <p className={ 'filter-text' }>Filters</p>
                    </div>
                </div>
                <div className={ 'gallery-view' }>
                    <div className={ `filter-menu ${ this.state.h5Menu ? 'filter-menu1' : '' }` }>
                        <div className={ 'h5_close' }>
                            <p className={ 'filter-text' }>Filters</p>
                            <img onClick={ () => this.setState({ h5Menu: false }) } className={ 'filter-icon' } src={ Close } alt="" />
                        </div>
                        <div className={'search'}>
                            <img src={ searchicon } alt="" />
                            <input onInput={ this.handleSearch } value={ this.state.search } className={ 'enterInput' } type="text" placeholder='By ID' />
                        </div>
                        <div className={ 'filter-menu-collapse' }>
                            <Collapse
                                defaultActiveKey={ this.state.expandList }
                                onChange={ this.onChange }
                                expandIconPosition={ 'right' }
                                ghost={ true }
                                activeKey={ this.state.expandList }
                            >
                                {
                                    this.state.panelList.map((i, index) => (
                                        <Panel showArrow={ false }
                                               header={ i.title }
                                               key={ i.key } extra={ i.icon } >
                                            {
                                                <ul className={ 'filter-panel-ul' }>
                                                    {
                                                        i.filterGroup.map((j, index1) => <Fragment key={ index1 }>
                                                            <li className={ 'filter-panel-li' } key={ index1 }>
                                                                <div className={ 'filter-panel-li-box' } onClick={ () => this.handleChoose(i, index, j, index1) }>
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
                        <div className={ 'gallery-filters-btn' } onClick={ () => this.handleResetFilters() }>Reset Filters</div>
                    </div>
                    <div className={ 'gallery-list-nft-view' } id={ 'scrollableDiv' }>
                        <Spin spinning={this.state.loading}>
                            <InfiniteScroll
                                dataLength={ this.state.viewData.length }
                                next={ this.loadMoreData1 }
                                hasMore={ this.state.viewData.length < this.state.page.total }
                                endMessage={ <div className={ 'no-more' }>no more</div> }
                                scrollableTarget="scrollableDiv"
                            >
                                <ul className={ 'gallery-list-nft-ul' }>
                                    {
                                        this.state.viewData.length && this.state.viewData.map((i, index) => <Fragment key={ index }>
                                            <li key={ index } className={ 'gallery-list-nft' }>
                                                <div style={ { background: '#fff' } }><img className={ 'g-nft' } src={ i.image } alt="" /></div>
                                                <div><p className={ 'g-nft-name' }>{ i.name }</p></div>
                                            </li>
                                        </Fragment>)
                                    }
                                </ul>
                            </InfiniteScroll>
                        </Spin>
                    </div>
                </div>
            </main>

            <Footers />
        </Fragment>
    }
}

export default withRouter(Gallery)
