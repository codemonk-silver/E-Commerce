import React from 'react';
import './feature.css';
import featureimg from '../../asset/featureimg.png';
import truckicon from '../../asset/truckicon.png';
import clockicon from '../../asset/clockicon.png';
import cureicon from '../../asset/cureicon.png';

const Feature = () => {
  return (
    <div className='featureContainer'>
        <div className='featureContent'>
            <div className='featureCard'>
                <img src={featureimg} alt='' />
                <span className='cardDes'>
                    <h5>Discount</h5>
                    <p>Every Week New Sales.</p>
                </span>
            </div>
            <div className='featureCard'>
                <img src={truckicon} alt='' />
                <span className='cardDes'>
                    <h5>Discount</h5>
                    <p>Every Week New Sales.</p>
                </span>
            </div>
            <div className='featureCard'>
                <img src={clockicon} alt='' />
                <span className='cardDes'>
                    <h5>Discount</h5>
                    <p>Every Week New Sales.</p>
                </span>
            </div>
            <div className='featureCard'>
                <img src={cureicon} alt='' />
                <span className='cardDes'>
                    <h5>Discount</h5>
                    <p>Every Week New Sales.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Feature