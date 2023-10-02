import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home_Temp from '../component/Home_Temp/Home_Temp'
import Rings from '../component/Categories_page/Rings'
import Bracelate from '../component/Categories_page/Bracelate'
import Earring from '../component/Categories_page/Earring'
import Necklace from '../component/Categories_page/Necklace'
import Auth from '../Auth/Auth'
import Navigation from '../component/Header/Navigation'
import Footer_com from '../component/Footer_com/Footer_com'
import Log_in from '../component/Categories_page/Log_in'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

export default function Router() {
  return (
    <>
      <BrowserRouter>

        <Auth>

          <Navigation />

          <Routes>

            <Route path="/" element={<Home_Temp />} />
            <Route path="/Ring" element={<ProtectedRoute component={<Rings />} />} />
            <Route path="/Bracelate" element={<ProtectedRoute component={<Bracelate />} />} />
            <Route path="/Earring" element={<ProtectedRoute component={<Earring />} />} />
            <Route path="/Necklace" element={<ProtectedRoute component={<Necklace />} />} />
            <Route path="/login" element={<Log_in />} />

          </Routes>

          <Footer_com />

        </Auth>

      </BrowserRouter>

    </>
  )
}
