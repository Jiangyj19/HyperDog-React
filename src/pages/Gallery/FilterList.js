/**
 * author: ღ
 * date: 2022/5/29
 */

import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

export const iconStyle = {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)'
}

export const FilterList = [
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

// 1 Background: Shining Gold, Shining Red, Shining Silver...
// 2 Body: NINJA, SUPER, Leopard, Rainbow...
// 3 Ear: Lemon Yellow, Cherry...
// 4 Decorate: Sport, Digital...
// 5 Eye: Saturn, Mars, Earth...
// 6 Teeth: Gold, Silver...
// 7 Tongue: Candy, Jelly...
// 8 Nose: Pink, Gold, Cherry...
