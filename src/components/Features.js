import React from 'react';
import dashboard from '../assets/png/dashboard.png';
import rocket from '../assets/svg/rocket.svg';
import touch from '../assets/svg/carbon_touch.svg';
import phone from '../assets/svg/phone.svg';
import refresh from '../assets/svg/refresh.svg';

const Features = () => {
    return (
        <section id="features">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-cente text-lg-start">
                        <div className="headin text-sm-center">
                            <h3 className='fw-bold pb-3'>There is no Limit</h3>
                        </div>

                        <div className="features_list">
                            <div className="row">
                                <div className="row pb-lg-5">
                                    <div className="col-6">
                                        <img src={rocket} alt="rocket icon" />
                                        <h6>Super Speed</h6>
                                        <p>Lorem, ipsum dolor sit amet
                                            consectetur, adipisicing</p>
                                    </div>
                                    <div className="col-6">
                                        <img src={touch} alt="touch icon" />
                                        <h6>User Friendly</h6>
                                        <p>Lorem, ipsum dolor sit amet
                                            consectetur, adipisicing</p>
                                    </div>
                                </div>
                                <div className='row pt-lg-5'>
                                    <div className="col-6">
                                        <img src={phone} alt="phone icon" />
                                        <h6>Modern</h6>
                                        <p>Lorem, ipsum dolor sit amet
                                            consectetur, adipisicing</p>
                                    </div>
                                    <div className="col-6">
                                        <img src={refresh} alt="refresh icon" />
                                        <h6>Stable</h6>
                                        <p>Lorem, ipsum dolor sit amet
                                            consectetur, adipisicing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="features_para">
                            <h4 className='pb-5'>Text</h4>

                            <p>
                                Bacon ipsum dolor amet fatback meatball bacon beef pork belly,
                                chicken sirloin turkey ribeye biltong picanha chuck brisket
                                pancetta. Capicola picanha hamburger,
                            </p>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 hero_image d-flex justify-content-center">
                        <img src={dashboard} className="d-block mx-lg-auto img-fluid" alt="dashboard screen" loading="lazy" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features