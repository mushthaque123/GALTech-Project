import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../projecthead/page';
const face: React.FC = () => {
    return (
        <div>
        <Head>
          <title>Walk Well</title>
        </Head>
        <Header/>
        <hr  style={{color:' #ff5000'}}></hr>
        <main>
<section className="">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-9 vh-100">
  <div className="col-md-3 text-center">
        <nav className="navbar navbar-expand-lg">
        <div className="navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/lip">
                                            LIP
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/face">
                                            FACE
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/kits">
                                           KITS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </nav></div>
                             <div className="row">
                                          <div className="col partner-col text-center brand">
                                            <Image src="/Placement_Area2.webp" className="img-fluid" width={200} height={200} alt="PLUMPS FIX" />
                                            <h4>PLUMP FIX</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/istockphoto-687244776-612x612.jpg" className="img-fluid" width={200} height={200} alt="SOFT FACE" />
                                            <h4>SOFT SKIN</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/makeup-artist-applies-powder-blush-260nw-1805797540.webp" className="img-fluid" width={200} height={200} alt="NO FILTER" />
                                            <h4>NO FILTER</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/images.jpg" className="img-fluid" width={200} height={200} alt="SOFT SKIN" />
                                            <h4>SOFT FACE</h4>
                                          </div>
                                        </div>
      </div>
      <div className="col-lg-3 vh-100">
      <div className="vl"></div>
      <ul className="project-footer">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/lip">
                                         ABOUT PROJECT
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/face">
                                            CLINICALLY PROVEN
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">
                                        FAQS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">
                                        CONTACT US
                                        </a>
                                    </li>
                                </ul>
      </div>
    </div>
  </div>

</section>
      
            </main></div>
      
    );
};

export default face;
