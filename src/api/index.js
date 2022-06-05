/**
 * author: ღ
 * date: 2022/6/5
 */

import axios from 'axios'

// export const galleryUrl = 'http://47.88.14.148/hyperdog/json/_metadata.json'
export const galleryUrl = '/hyperdog/json/_metadata.json'
export const galleryImgUrl = 'http://47.88.14.148/hyperdog/images/'

export const fetchGet =  async (url, params) => await axios.get(url, { params })
