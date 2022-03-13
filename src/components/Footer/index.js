import React from 'react';
import './styles.css';

const Footer = () =>
{
    return(
        <footer className="bg-dark page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Contenido de footer</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque eget urna vitae iaculis. 
                            Praesent leo lectus, faucibus vitae posuere nec, condimentum vel nibh. Fusce dictum, diam id blandit 
                            pellentesque, nisl ipsum tristique felis, ut tempor odio velit sit amet metus. Phasellus tincidunt, 
                            urna in ultrices ultricies, magna mi pharetra elit, quis facilisis diam tellus quis augue.
                        </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright</div>
        </footer>
    );
}

export default Footer;