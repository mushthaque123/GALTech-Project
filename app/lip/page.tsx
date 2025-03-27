import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../projecthead/page';
const Lip: React.FC = () => {
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
                                            <Image src="/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png" className="img-fluid" width={200} height={200} alt="PLUMP JUICE" />
                                            <h4>PLUMP JUICE</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/Placement_Area_c1acb99c-eeac-4c52-9b62-a4b565a06160.png" className="img-fluid" width={200} height={200} alt="PLUMB & FILL" />
                                            <h4>PLUMB & FILL</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/Placement_Area1.png" className="img-fluid" width={200} height={200} alt="PLUMB KITS" />
                                            <h4>PLUMB KITS</h4>
                                          </div>
                                          <div className="col partner-col text-center">
                                            <Image src="/Group 831.webp" className="img-fluid" width={200} height={200} alt="SHOP ALL LIP" />
                                            <h4>SHOP ALL LIP</h4>
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

export default Lip;
