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
            <p>Sign In</p>
            <div className='formDetails'>
                <input className='formUser' type='email' placeholder='Email' alt='email' />
                <input className='formUser' type='password' placeholder='Password' alt='password' />
                <div className='formCheck'>
                    <div className='formLeftCheck'>
                        <input type='checkbox' />
                        <p>Remember Me</p>
                    </div>
                    <a href=''>Forget Password</a>
                </div>
                <button>Sign In</button>
                <div className='formSignUp'>
                    <p>Dont have account?</p>
                    <a href=''>Sign Up</a>
                </div>
            </div>
      </div>
      
    </section>
  )
}

export default Account;
