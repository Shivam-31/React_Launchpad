import React from 'react'
import Header from './component/header/header.jsx'
import Footer from './component/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout