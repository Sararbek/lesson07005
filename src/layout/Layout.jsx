import React, { lazy } from 'react'
import { Outlet } from 'react-router-dom'
const Header = lazy(() => import("@/components/header/Header"))
const Footer = lazy(() => import("@/components/footer/Footer"))

const Layout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout