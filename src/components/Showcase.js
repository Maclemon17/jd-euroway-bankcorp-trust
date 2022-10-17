import React from 'react';
import showcaseImg from '../assets/png/hero2.png';

const Showcase = () => {
    return (
        <section id="showcase" >
            <div className="container-">
                <div className="showcase_text">
                    <div className="showcase_text1 container">
                        <div className="text_group grp1">
                            <div className='text'>
                                <h4>Increase Your Business</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur, adipisicing
                                    elit. Culpa consequatur</p>
                            </div>
                        </div>
                        <div className="text_group grp1">
                            <div className='text'>
                                <h4>Increase Your Business</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur, adipisicing
                                    elit. Culpa consequatur</p>
                            </div>
                        </div>
                    </div>

                    <div className="showcase_text2">
                        <div className="container">
                            <div className="text_group grp2">
                                <div className="text">
                                    <h4>Increase Your Business</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur, adipisicing
                                        elit. Culpa consequatur</p>
                                </div>
                            </div>
                            <div className="text_group grp2">
                                <div className="text">
                                    <h4>Increase Your Business</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur, adipisicing
                                        elit. Culpa consequatur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase_image">
                    <img src={showcaseImg} alt="showcase app screenshot" height='100%'/>
                </div>
            </div>
        </section>
    )
}

export default Showcase