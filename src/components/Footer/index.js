import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './styles.css';

const Footer = () =>
{
    return(
        <footer className="bg-dark page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="text-center py-3">
                        <h4 className="text-uppercase">¡Contactanos!</h4>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">E-mail</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:mosaicosnava1934@hotmail.com">mosaicosnava1934@hotmail.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Teléfonos</h5>
                        <ul className="list-unstyled">
                            <li><a href="tel:5523602813">55-23-60-28-13</a></li>
                            <li><a href="tel:5632751571">56-32-75-15-71</a></li>
                            <li><a href="tel:5620707795">56-20-70-77-95</a></li>
                            <li>Local: <a href="tel:5557380550">55-57-38-05-50</a></li>
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Redes sociales</h5>
                        <ul className="list-unstyled">
                            <li>
                                <SocialIcon 
                                    url="https://m.facebook.com/Mosaicos-Nava-667860946949741/" 
                                    network="facebook"
                                    bgColor="#ffffff"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;