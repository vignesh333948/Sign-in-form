import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const [action, setAction] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  return (
    <div id="signin" className={action}> {/* Dynamically add the 'active' class */}
      <div className={`form-box login ${action === '' ? 'visible' : 'hidden'}`}>
        <form action="">
          <h1 className='lo'>Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUser className='icons' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icons'/>
          </div>
          <div className='remember-forget'>
            <label><input type='checkbox'/>Remember Me</label>
            <a href="password"> Forget Password? </a>
          </div>
          <button type='submit'>Login</button>
          <div className='register-link'>
            <p>Don't have an account? <a href='register' onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${action === 'active' ? 'visible' : 'hidden'}`}>
        <form action="">
          <h1 className='lo'>Registration</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUser className='icons' />
          </div>
          <div className='input-box'>
            <input type="email" placeholder='Email'required />
            <FaEnvelope className='icons' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icons'/>
          </div>
          <div className='remember-forget'>
            <label><input type='checkbox'/>I agree to the terms and conditions</label>
          </div>
          <button type='submit'>Register</button>
          <div className='register-link'>
            <p>Already have an account? <a href='login' onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
