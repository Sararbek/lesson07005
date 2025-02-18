import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Layout = lazy(() => import("@/layout/Layout"))
const Admin = lazy(() => import("@/pages/dashboard/admin/Admin"))
const Home = lazy(() => import("@/pages/home/Home"))
const Cars = lazy(() => import("@/pages/dashboard/cars/Cars"))
const CreateCar = lazy(() => import("@/pages/dashboard/createCar/CreateCar"))
const Architecture = lazy(() => import("@/pages/dashboard/architecture/Architecture"))
const CarTypes = lazy(() => import("@/pages/dashboard/carTypes/Index"))
const Companies = lazy(() => import("@/pages/dashboard/companies/Companies"))
const Countries = lazy(() => import("@/pages/dashboard/countries/Countries"))
const Engines = lazy(() => import("@/pages/dashboard/engines/Engines"))
const History = lazy(() => import("@/pages/dashboard/history/History"))
const Others = lazy(() => import("@/pages/dashboard/others/Others"))
const Ranking = lazy(() => import("@/pages/dashboard/ranking/Ranking"))
const CreatedCars = lazy(() => import("@/pages/dashboard/cars/createdCars/CreatedCars"))
const ArchivedCars = lazy(() => import("@/pages/dashboard/cars/archivedCars/ArchivedCars"))

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route path='/' element={<Home/>} />
            </Route>
            <Route path='admin' element={<Admin/>} >
              <Route path='cars' element={<Cars/>} >
                  <Route path='' element={<CreatedCars/>} />
                  <Route path='archivedcars' element={<ArchivedCars/>} />
              </Route>
              <Route path='addcar' element={<CreateCar/>} />
              <Route path='cartypes' element={<CarTypes/>} />
              <Route path='compnies' element={<Companies/>} />
              <Route path='ranking' element={<Ranking/>} />
              <Route path='countries' element={<Countries/>} />
              <Route path='history' element={<History/>} />
              <Route path='arcitecture' element={<Architecture/>} />
              <Route path='engines' element={<Engines/>} />
              <Route path='others' element={<Others/>} />
            </Route>
        </Routes>
    </>
  )
}

export default Router