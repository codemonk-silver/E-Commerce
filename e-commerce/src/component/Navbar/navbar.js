import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='topnav'>
            <div className='topnavleft'>
                <a href=''><input type="checkbox" id="myCheckbox" checked />Free Shipping On All Orders Over $50</a>
            </div>
            <div className='topnavright'>
                <select>
                        <option value="Eng">Eng</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                </select>
                <a href=''>Faqs</a>
                <a href=''>Need Help</a>
            </div>
        </div>
        <div className='middlenav'>
            <div className='middlenavleft'>
                <h1 className='logo'>Comforty</h1>
            </div>
            <div className='search-container'>
                 <input type="text" placeholder="Search..." class="search-input" />
                 <i class="fas fa-search search-icon"></i>
            </div>
            <div className='middlenavright'>
                <button className='cartbtn'>
                    <i class="fas fa-shopping-cart"></i>Cart
                </button>
                <button>
                <i class="far fa-heart"></i>
                </button>
                <button>
                <i class="fas fa-user"></i>
                </button>
            </div>
        </div>
        <div className='navlink'>
            <div className='leftlink'>
                <div className='navdropdown'>
                     <input type="checkbox" id="services-dropdown" className="dropdown-toggle" />
                    <label for="services-dropdown" className="dropdown-label">
                        <i class="fas fa-bars"></i>  All Categories 
                    </label>
                    <div className="dropdown-content">
                        <a href="#web-design">Web Design
                        </a>
                        <a href="#seo">SEO Optimization
                        </a>
                        <a href="#marketing">Digital Marketing
                        </a>
                        <a href="#consulting">Consulting
                        </a>
                    </div>
                </div>
                <a href=''>Home</a>
                <a href=''>Shop</a>
                <a href=''>Product</a>
                <a href=''>Pages</a>
                <a href=''>About</a>
            </div>
            <div className='rightlink'>
                <button><i class="fas fa-phone"></i>
    <span> <a href="tel:+15551234567">(555) 123-4567</a></span></button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar