import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
const Header: React.FC = () => {
    return (
        <header className="bg-light py-3">
            <div className="container">
                <div className="row align-items-center">


                    <div className="col-md-5 text-center">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/product">
                                            SHOP
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">
                                            ABOUT
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">
                                           LEARN
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                    <div className="col-md-4">
                        <h2 style={{color:' #ff5000'}}>PROJECT</h2>
                        </div>
                    <div className="col-md-3 text-end">
                        <form className="d-flex">
                            <button className="btn btn-outline-danger" type="submit">
                                Search
                            </button>
                            <a href="/cart" className="ms-3 text-end" >
                                <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem' }}></i>{' '}
                            </a>
                        </form>

                    </div>
                </div>
            </div>
        </header>
      
      
    );
};

export default Header;
