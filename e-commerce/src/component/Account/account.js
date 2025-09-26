import React from 'react';
import './account.css';

const Account = () => {
  return (
    <section className='accountContainer'>
      <div className='accountWrapper'>
        <div className='accountNav'>
          <a href=''>
            <span>Home</span>
            <span className="arrow">{'>'}</span>
          </a>
          <a href=''>
            <span>Account</span>
            <span className="arrow">{'>'}</span>
          </a>
          <a href=''>Sign In</a>
        </div>

        <p>Sign In</p>
      </div>

      <div className='accountForm'>
            
      </div>
    </section>
  )
}

export default Account;
