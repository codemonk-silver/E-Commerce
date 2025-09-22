import React from 'react';
import './feature.css';
import featureimg from '../../asset/featureimg.png';
import truckicon from '../../asset/truckicon.png';
import clockicon from '../../asset/clockicon.png';
import cureicon from '../../asset/cureicon.png';
import Zapierlogo from '../../asset/Zapierlogo.png';
import ChaseBank from '../../asset/CIBBank.png';
import CIBBank from '../../asset/CIBBank.png';
import mozlogo from '../../asset/mozlogo.png';
import PandaDoc from '../../asset/PandaDoc.png';
import Pipedrive from '../../asset/Pipedrive.svg';

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
         <div className='companyLogo'>
                <img src={Zapierlogo} alt='' />
                <img src={Pipedrive} alt='' />
                <img src={CIBBank} alt='' />
                <img src={ChaseBank} alt='' />
                <img src={mozlogo} alt='' />
                <img src={PandaDoc} alt='' />
            </div>
    </div>
  )
}

export default Feature