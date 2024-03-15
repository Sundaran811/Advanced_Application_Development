// import React, { useState } from 'react';
// import './Signup.css';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleInputChange = (field, value) => {
//     switch (field) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <div className='form'>
//       <form className='container' onSubmit={handleSubmit}>
//         <h3 className='heading'>Sign up page</h3>
//         <label htmlFor='name' className='txt'>Name</label>
//         <input
//           type='text'
//           name='username'
//           onChange={(e) => handleInputChange('name', e.target.value)}
//         /><br />
//         <label className='txt'>Email</label>
//         <input
//           type='email'
//           name='email' className='txt-area'
//           onChange={(e) => handleInputChange('email', e.target.value)}
//         /><br />
//         <label className='txt'>Password</label>
//         <input
//           type='password'
//           name='password'
//           onChange={(e) => handleInputChange('password', e.target.value)}
//         /><br /><br/>
//         <button type='submit' className='btn'>Submit</button><br /><br/>
//         <p >Already have an account?<Link to="/login">Login</Link></p>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phno: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validator.isEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validator.isMobilePhone(formData.phno, 'any', { strictMode: false })) {
      newErrors.phno = 'Invalid phone number';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        username: '',
        email: '',
        phno: '',
        password: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0 20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor:'#fff', padding: '40px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Sign up to your account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="username" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Full name</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="current-username"
              required
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phno" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Phone Number</label>
            <input
              id="phno"
              name="phno"
              type="text"
              autoComplete="current-no"
              required
              value={formData.phno}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.phno && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.phno}</p>}
          </div>
          <div>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.password}</p>}
          </div>
          <div>
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#4F46E5', color: '#fff', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            >
              Sign up
            </button>
          </div>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem', color: '#666' }}>
          Already a member?{' '}
         <Link to={'/login'}>  <button style={{ fontWeight: 'bold', color: '#4F46E5', cursor: 'pointer', border: 'none', background: 'none' }}>
            Sign in
          </button></Link>
        </p>
      </div>
    </div>
  );
}