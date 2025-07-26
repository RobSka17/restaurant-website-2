import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home/home'
import { AboutUs } from './about-us/about-us'
import { WhereAreWe } from './where-are-we/where-are-we'
import { MakeAReservation } from './make-a-reservation/make-a-reservation'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'about-us'} element={<AboutUs />} />
          <Route path={'where-are-we'} element={<WhereAreWe />} />
          <Route path={'make-a-reservation'} element={<MakeAReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
