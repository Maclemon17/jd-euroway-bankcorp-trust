import React from 'react';
import playstore from '../assets/svg/playstore.svg';
import appstore from '../assets/svg/appstore.svg';

const Download = () => {
  return (
    <section id="download">
        <div className="container d-sm-flex-reverse">
            <div className="text">
                <h1>Download</h1>
            </div>
            <div className="buttons">
                <img src={playstore} alt="" className='px-5'/>
                <img src={appstore} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Download