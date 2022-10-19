import React from 'react';
import heroImg from '../assets/png/hero.png';
const Hero = () => {
    return (
        <section id="hero" className='mt-3'>
            {/* <div className="container">
                <div className="hero_image col-6">
                    <img src={heroImg} alt="hero image/ app splash screen" />
                </div>
                <div className="hero_text text col-6">
                    <h1>Powerful Text Driven </h1>
                    <h2>By Your Business</h2>
                </div>
            </div> */}


            {/* <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-s-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 text-sm-center ">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="hero image/ app splash screen" width="" height="" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Powerful Text Driven</h1>
                        <p className="lead">By Your Business</p>
                    </div>
                </div>
            </div> */}


            <div className="container col-xl-10 col-xxl-8 px-4 py-5 clear-fix">
                <div className="row flex-lg-row-reverse align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-white text-lg-start">
                        <div className="hero_heading" id='hero_heading'>
                            <h1 className='text'>Text</h1>
                            <h1 className="lh-1 my-3 power">Powerful Text Driven</h1>
                            <h1 className="business">By Your Business</h1>
                        </div>

                        <p className="hero_note">
                            Bacon ipsum dolor amet fatback meatball bacon beef pork belly, chicken
                            sirloin turkey ribeye biltong picanha chuck brisket pancetta.
                        </p>

                        <div className="app_stats">
                            <div className="stats">
                                <div className="row text-center">
                                    <div className="col">
                                        <h3>Installs</h3>
                                    </div>
                                    <div className="col">
                                        <h3>Likes</h3>
                                    </div>
                                    <div className="col">
                                        <h3>User Pro</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="stats_figure">
                                <div className="row text-center">
                                    <div className="col">
                                        <h3>49k</h3>
                                    </div>
                                    <div className="col">
                                        <h3>49k</h3>
                                    </div>
                                    <div className="col">
                                        <h3>49k</h3>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="para my-5">
                            <p>Bacon ipsum dolor amet fatback meatball bacon beef pork belly,
                                chicken sirloin turkey ribeye  biltong picanha chuck brisket pancetta.
                                apicola picanha hamburger,Bacon ipsum dolor amet fatback meatball bacon beef pork belly,
                                chicken sirloin turkey ribeye biltong picanha chuck brisket pancetta. Capicola picanha hamburger.</p>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 hero_image d-flex justify-content-center">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="app splash screen" width="" height="385px" loading="lazy" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero