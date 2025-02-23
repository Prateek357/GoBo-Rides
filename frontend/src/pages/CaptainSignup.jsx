import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');

    const {captain,setCaptain}=React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    const submitHandler =async (e) => {
      e.preventDefault();
      
      const captainData = { 
        fullname: {firstname: firstname, lastname: lastname}, 
        email: email, 
        password: password,
        vehicle: {
          color: vehicleColor,
          vehicleType: vehicleType,
          capacity: vehicleCapacity,
          plate: vehiclePlate
        }
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
      setVehicleColor('');
      setVehicleType('');
      setVehicleCapacity('');
      setVehiclePlate('');

  
    }
    return (
          <div className='h-screen p-7 flex flex-col justify-between'>
              <div>
              <img className='w-18 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
              <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-lg font-medium'>What's our Captain's name</h3>  
        <div className='flex gap-4'> 
        <input required value={firstname} onChange={e => setFirstname(e.target.value)}  className='mb-1 bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='first name'/>
        <input required value={lastname} onChange={e => setLastname(e.target.value)} className='mb-1 bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='last name'/>
        </div>
  
          <h3 className='text-lg font-medium'>What's our Captain's email</h3>
  
          <input required value={email} onChange={e => setEmail(e.target.value)} className='mb-1 bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
  
          <h3 className='text-lg font-medium'>Enter password</h3>
  
          <input required value={password} onChange={e => setPassword(e.target.value)} className='mb-1 bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' type="password" placeholder='password'/>

          <h3 className='text-lg font-medium'>Vehicle Details</h3>
          <div className='flex gap-4'>
            <input required value={vehicleColor} onChange={e => setVehicleColor(e.target.value)} className='mb-1 bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='Vehicle Color'/>
            <select required value={vehicleType} onChange={e => setVehicleType(e.target.value)} className='mb-1 bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'>
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <div className='flex gap-4'>
            <input required value={vehicleCapacity} onChange={e => setVehicleCapacity(e.target.value)} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="number" placeholder='Vehicle Capacity'/>
            <input required value={vehiclePlate} onChange={e => setVehiclePlate(e.target.value)} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='Vehicle Plate'/>
          </div>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base mt-3'>Create Account</button>

        </form>
        <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login</Link></p>
        </div>
        <div >
          <p className='text-xs leading-tight'>The site is protected by reCAPTCHA and <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> Google's Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    )
  }

export default CaptainSignup
