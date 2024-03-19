import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isFormValid, setIsFormValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const nav = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  };



  const validateForm = () => {
    // Reset form validation
    setIsFormValid(true);
    setEmailError('');

    if (!validator.isEmail(email)) {
      setIsFormValid(false);
      setEmailError('Invalid email address');
    }

    if (validator.isEmpty(password)) {
      setIsFormValid(false);
    }

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (isFormValid) {
      // If all validations pass, navigate to userdash
      nav('/userdash');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0 20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Sign in to your account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              required
              value={email}
              onChange={handleEmailChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && emailError && <p style={{ color: 'red', fontSize: '0.875rem' }}>{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && <p style={{ color: 'red', fontSize: '0.875rem' }}>Password cannot be empty</p>}
          </div>

          <div>
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '4px',  color: '#fff', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
              className="bg-primary-300 relative"

            >
              Login
            </button>
          </div>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem', color: '#666' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ fontWeight: 'bold', cursor: 'pointer', border: 'none', background: 'none' }}  className="text-primary-300 relative">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;