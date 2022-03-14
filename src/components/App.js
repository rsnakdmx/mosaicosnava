import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterApp from './Router';
import About from './About';
import Lavadero from './Lavadero';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Mosaico from './Mosaico';
import PageNotFount from './PageNotFound';
import Terrazo from './Terrazo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const App = () =>
{
    return(
        <Router>
            <Header />
            <Routes>
                <Route path={ process.env.REACT_APP_PATH } element={ <RouterApp /> }>
                    <Route index element={ <Landing /> } />
                    <Route path="nosotros" element={ <About /> } />
                    <Route path="lavaderos" element={ <Lavadero /> } />
                    <Route path="mosaicos" element={ <Mosaico /> } />
                    <Route path="terrazos" element={ <Terrazo /> } />
                    <Route path="contacto" element={ <Contact /> } />
                </Route>
                <Route path="*" element={ <PageNotFount /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;