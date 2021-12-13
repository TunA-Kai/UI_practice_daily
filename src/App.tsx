import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SingleComponent from './pages/SingleComponent'

function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    // console.log(location)
    if (location.pathname !== '/') window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />

      <main className='px-6 bg-hero-pattern'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='components/:id' element={<SingleComponent />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
