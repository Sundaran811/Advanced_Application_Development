import React from 'react';
import { useState } from 'react';
import './User.css'
import img1 from '../../../assets/Citizen2.jpg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

const Useradmin = () => {
  
  const users = [
    {
        name : "Sundaran N",
        address:'Tuty',
        phone: '9087654321',
        email : 'sundaran@gmail.com',
        service : 'physiotherapy',
        description : 'None',
        charges : '5000',
        timing : '06 pm to 07 pm',
        booking : 'Completed',
        duration : '10 days',
    },
    {
      name : "Sundaran N",
      address:'Tuty',
      phone: '9087654321',
      email : 'sundaran@gmail.com',
      service : 'physiotherapy',
      description : 'None',
      charges : '5000',
      timing : '06 pm to 07 pm',
      booking : 'Rejected',
      duration : '10 days',
  },
  {
    name : "Sundaran N",
    address:'Tuty',
    phone: '9087654321',
    email : 'sundaran@gmail.com',
    service : 'physiotherapy',
    description : 'None',
    charges : '5000',
    timing : '06 pm to 07 pm',
    booking : 'Pending',
    duration : '10 days',
},
{
  name : "Sundaran N",
  address:'Tuty',
  phone: '9087654321',
  email : 'sundaran@gmail.com',
  service : 'physiotherapy',
  description : 'None',
  charges : '5000',
  timing : '06 pm to 07 pm',
  booking : 'Completed',
  duration : '10 days',
},
{
  name : "Sundaran N",
  address:'Tuty',
  phone: '9087654321',
  email : 'sundaran@gmail.com',
  service : 'physiotherapy',
  description : 'None',
  charges : '5000',
  timing : '06 pm to 07 pm',
  booking : 'Completed',
  duration : '10 days',
},
{
  name : "Sundaran N",
  address:'Tuty',
  phone: '9087654321',
  email : 'sundaran@gmail.com',
  service : 'physiotherapy',
  description : 'None',
  charges : '5000',
  timing : '06 pm to 07 pm',
  booking : 'Pending',
  duration : '10 days',
},
  ]
  const [data, setData] = useState(users)
  const [process, setProcess] = useState('');
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setProcess(selectedValue);
    
    if (selectedValue === "") {
      setData(users);
    } else {
      const filteredData = users.filter((item) => item.booking.toLowerCase().includes(selectedValue.toLowerCase()));
      setData(filteredData);
    }
    console.log(data)
    console.log(process)
  };
  
  return (
    <>
      <div className="user">
        <div className="addordel">
        <select className='filter'
        value={process}
        onChange={handleChange}
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
          <Link to={"/as"}><button  className='add'> Add user</button> </Link>
          <button  className='del'>Delete all users</button> 
        </div>
        

        <div className="product-container">
          {data.map((user, index) => (
            <div className="product-card" key={index}>
              <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-round-button-in-shades-of-green-and-gray-featuring-user-icon-vector-picture-image_9714626.png" alt={user.naem} className="product-image" />
              <h3 className="product-name">Name: {user.name}</h3>
              <p className="product-price">Address: {user.address}</p>
              <p className="product-price">Phone: {user.phone}</p>
              <p className="product-price">Email: {user.email}</p>
              <p className="product-price">Service: {user.service}</p>
              <p className="product-price">Description: {user.description}</p>
              <div className="product-price">Charges: {user.charges} Rupees</div>
              <div className="product-price">Timing: {user.timing}</div>
              <div className="product-price">Duration: {user.duration}</div>
              <div className="product-price">Booking: {user.booking}</div>
              <button
                className="ask-query-button"
                style={{marginTop: '10px'}}
              >
               user delete
              </button>

              <button style={{  marginTop: '-40px', marginLeft:'50%', marginBottom:'3%' }}>
              <Link to = "/up"><button className="ask-query-button">
                user edit
              </button></Link>
            </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Useradmin;
