import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiApplepay } from "react-icons/si";

const Footer = () => {
  return (
    <section className='linebreak'>
        <hr />
        <div className='footerContainer'>
            <div className='footerWrapper'>
                <div className='footerInfo'>
                    <h1>Comforty</h1>
                    <p>
                      lorem hbhejk shvjgvcj shvjhcvvsghchsvgsvhjvsjvhjvsgvgs 
                      gvgjsvgvsjvsgxjvxhsv.
                    </p>
                    
                    {/* Social Links */}
                    <div className='socialLinks'>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="socialIcon" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="socialIcon" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="socialIcon" />
                      </a>
                      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <FaPinterestP className="socialIcon" />
                      </a>
                    </div>
                </div>

                <div className='footerCategory'>
                    <h1>CATEGORY</h1>
                    <div className='footerCategoryLinks'>
                        <a href=''>Sofa</a>
                        <a href=''>Armchair</a>
                        <a href=''>Wing Chair</a>
                        <a href=''>Desk Chair</a>
                        <a href=''>Wooden Chair</a>
                        <a href=''>Park Bench</a>
                    </div>
                </div>

                <div className='footerSupport'>
                    <h1>SUPPORT</h1>
                    <div className='footerSupportLinks'>
                        <a href=''>Help & Support</a>
                        <a href=''>Terms & Condition</a>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Help</a>
                    </div>
                </div>

                <div className='footerNewsletter'>
                    <h1>NEWSLETTER</h1>
                    <div className='footerForm'>
                        <input type='email' placeholder='email' />
                        <button className='footerBtn'>Submit</button>
                    </div>
                    <p>
                      lorem sjjhhschj shgdvkhsvhjcvdjgc dchdkcjdbhkdvj dchdvh.
                    </p>
                </div>
            </div>
        </div>

        <hr />
        <div className='footerClosure'>
            <div className='footerClosureWrapper'>
                <p>2021 - Blogy Designed and Developed By Eniola O.</p>
                <div className='footerRightClosure'>
                  <SiVisa className="paymentIcon" />
                  <SiMastercard className="paymentIcon" />
                  <SiPaypal className="paymentIcon" />
                  <SiApplepay className="paymentIcon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;
