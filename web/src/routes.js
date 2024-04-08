import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/cadastrar'
import NavbarApp from './components/layouts/Navbarr'
import Message from './components/layouts/Message'
import Footer from './components/layouts/Footer'

const RoutesApp = () => {
    return (
        <Router>
            <NavbarApp />
            <Message />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar' element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )

}

export default RoutesApp