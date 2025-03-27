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
                                        <a className="nav-link" href="/lip">
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
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                            <a href="/cart" className="ms-3 text-end" >
                                <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem' }}></i>{' '}
                            </a>
                        </form>

                    </div>
                </div>
            </div>
            <main>
              <div className="row">
                             <Image src="/Group 831.webp" alt="Slide 3" width={800} height={200} />
                                          <div className="project-imgc">
                                            <h1 style={{color:' #ff5000'}}><strong className="fw-bold">BIG LIPS,</strong></h1>
                                            <h2 style={{color:' #ff5000'}}><strong className="fw-bold">BIGER ENERGY</strong></h2>
                                            <h6>Our foumous lips lines,fills and plumbs then you can cheat</h6>
                                            <h6>your way to an instant lip fit</h6>
                                            <button className="btn btn-outline-danger" type="submit">
                               SHOP PLUMP & FILL
                            </button>
                                          </div>
                                          </div>
                                          <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <a
                    href="/lip"
                    className="featured-img"
                    style={{ backgroundImage: `url('Placement_Area1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></a>
                  
                </div>
              </div>

              <div className="col-sm-4 text-center">
                <div className="featured">
                  <a
                    href="/face"
                    className="featured-img"
                    style={{ backgroundImage: `url('/Placement_Area2.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></a>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <a
                    href="/kits"
                    className="featured-img"
                    style={{ backgroundImage: `url('/Placement_Area_2a5a1a48-51cc-4dd2-a552-a28c0f88da9f.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
            <div className='letter-paragraph'>
              <p style={{color:' #ff5000'}}>CLINICALLY PROVEN TO PUMB &nbsp;&nbsp; 100 % NATURAL &nbsp;&nbsp; VAGAN &nbsp;&nbsp; CRUELTY-FREE</p> 
            </div>
        </div>
                                          </main> 
        </header>
      
      
    );
};

export default Header;
