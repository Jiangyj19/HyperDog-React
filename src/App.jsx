import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './style/global.css'
import './style/media.scss'
import Router from './router/index'

const App = () => {
  return(
    <Fragment>
        <Router />
    </Fragment>
  )
}

export default App
