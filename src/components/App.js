import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterApp from './Router';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './trustedPolicy';

const About = lazy(() => import('./About'));
const Lavadero = lazy(() => import('./Lavadero'));
const Contact = lazy(() => import('./Contact'));
const Mosaico = lazy(() => import('./Mosaico'));
const PageNotFound = lazy(() => import('./PageNotFound'));
const Terrazo = lazy(() => import('./Terrazo'));


const App = () =>
{
    return(
        <Router>
            <Header />
            <Routes>
                <Route path={ process.env.REACT_APP_PATH } element={ <RouterApp /> }>
                    <Route index element={ <Landing /> } />
                    <Route path="nosotros" element={ 
                        <Suspense fallback={ <Loading /> }>
                            <About />
                        </Suspense> } 
                    />
                    <Route path="lavaderos" element={ 
                        <Suspense fallback={ <Loading /> }>
                            <Lavadero />
                        </Suspense> } 
                    />
                    <Route path="mosaicos" element={ 
                        <Suspense fallback={ <Loading /> }>
                            <Mosaico />
                        </Suspense> } 
                    />
                    <Route path="terrazos" element={ 
                        <Suspense fallback={ <Loading /> }>
                            <Terrazo />
                        </Suspense> } 
                    />
                    <Route path="ubicacion" element={ 
                        <Suspense fallback={ <Loading /> }>
                            <Contact />
                        </Suspense> } 
                    />
                </Route>
                <Route path="*" element={ 
                    <Suspense fallback={ <Loading /> }>
                        <PageNotFound />
                    </Suspense> } 
                />
            </Routes>
            <Suspense fallback={ <Loading /> }>
                <Footer />
            </Suspense>
        </Router>
    );
}

export default App;