/**
 * author: ღ
 * date: 2022/5/29
 */

import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import metadata from './_metadata.json'

export const iconStyle = {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)'
}


let filterList = [
    {
        key: '1',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Background',
        filterGroup: [
            { title: 'Shining Gold', active: false },
            { title: 'Shining Red', active: false },
            { title: 'Shining Silver', active: false }
        ]
    },
    {
        key: '2',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Body',
        filterGroup: [
            { title: 'NINJA', active: false },
            { title: 'SUPER', active: false },
            { title: 'Leopard', active: false },
            { title: 'Rainbow', active: false }
        ]
    },
    {
        key: '3',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Ear',
        filterGroup: [
            { title: 'Lemon', active: false },
            { title: 'Yellow', active: false },
            { title: 'Cherry', active: false }
        ]
    },
    {
        key: '4',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Decorate',
        filterGroup: [
            { title: 'Sport', active: false },
            { title: 'Digital', active: false }
        ]
    },
    {
        key: '5',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Eye',
        filterGroup: [
            { title: 'Saturn', active: false },
            { title: 'Mars', active: false },
            { title: 'Earth', active: false }
        ]
    },
    {
        key: '6',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Teeth',
        filterGroup: [
            { title: 'Gold', active: false },
            { title: 'Silver', active: false }
        ]
    },
    {
        key: '7',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Tongue',
        filterGroup: [
            { title: 'Candy', active: false },
            { title: 'Jelly', active: false }
        ]
    },
    {
        key: '8',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Nose',
        filterGroup: [
            { title: 'Pink', active: false },
            { title: 'Gold', active: false },
            { title: 'Cherry', active: false }
        ]
    }
]

let arr = []
for (let i = 0; i < metadata[0].attributes.length; i++) {
    let obj = {
        key: '1',
        icon: <PlusOutlined style={ iconStyle } />,
        title: 'Background',
        filterGroup: [
            // { title: 'Shining Gold', active: false },
            // { title: 'Shining Red', active: false },
            // { title: 'Shining Silver', active: false }
        ]
    }
    obj.key = i + 1
    obj.title = metadata[0].attributes[i].trait_type
    for (let j = 0; j < 10; j++) {
        obj.filterGroup.push(
            { title: 'B' + (j + 1), active: false }
        )
    }
    arr.push(obj)
}
filterList = arr

export const FilterList = filterList
// 1 Background: Shining Gold, Shining Red, Shining Silver...
// 2 Body: NINJA, SUPER, Leopard, Rainbow...
// 3 Ear: Lemon Yellow, Cherry...
// 4 Decorate: Sport, Digital...
// 5 Eye: Saturn, Mars, Earth...
// 6 Teeth: Gold, Silver...
// 7 Tongue: Candy, Jelly...
// 8 Nose: Pink, Gold, Cherry...
