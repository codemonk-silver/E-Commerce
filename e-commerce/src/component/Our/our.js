import React, { useRef, useState } from 'react';
import './our.css';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import sofachair from '../../asset/sofachair.jpg';

const Our = () => {
        const [liked, setLiked] = useState(false);

  return (
    <div className='ourContainer'>
        <h1 className='ourTitle'>
            Our Product
        </h1>
        <div className='ourNav'>
            <a href=''>All</a>
            <a href=''>NEWEST</a>
            <a href=''>TRENDING</a>
            <a href=''>BEST SELLERS</a>
            <a href=''>FEATURED</a>
            
        </div>
        <div className='ourCarousel'>
            <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <span className="badgeNew">NEW</span>
                                <FaHeart 
                                  className="heartIcon"
                                  style={{ color: liked ? "crimson" : "white" }}
                                  onClick={() => setLiked(!liked)}
                                />
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
             <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <span className="badgeNew">NEW</span>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
             <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
             <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
            <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
            <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
            <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
            <div className='ourCardWrapper'>
                <div className='ourCard1'>
                    <img src={sofachair} alt='' />
                    </div>
                    <div className='ourCardContent'>
                        <div className='ourCardDesc'>
                            <h5>Library Stool Chair</h5>
                            <p>$20</p>
                        </div>
                        <FaShoppingCart className="cartIcon" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Our