import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterApp from './Router';
import About from './About';
import Catalog from './Catalog';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Trabajos from './Trabajos';
import PageNotFount from './PageNotFound';
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
                    <Route path="catalogo" element={ <Catalog /> } />
                    <Route path="contacto" element={ <Contact /> } />
                    <Route path="trabajos" element={ <Trabajos /> } />
                </Route>
                <Route path="*" element={ <PageNotFount /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;