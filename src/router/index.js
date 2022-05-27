import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index' // 主页
import Gallery from '../pages/Gallery' // gallery
import Mint from '../pages/Mint' // mint

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/mint" element={<Mint />} />
         <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}
