import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
    const {captain,setCaptain}=React.useContext(CaptainDataContext);
  const submitHandler =async (e) => {
    e.preventDefault();
    
    const logincaptain={ email:email, password:password };
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, logincaptain);

    if(response.status===200){
      const data=response.data;
      setCaptain(data.user);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
                <div>
                    <img className='mt-6 w-18 mb-4' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={(e) => submitHandler(e)}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    
            <input required value={email} onChange={e => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
    
            <h3 className='text-lg font-medium mb-2'>Enter password</h3>
    
            <input required value={password} onChange={e => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
          </form>
          <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
          </div>
      <div >
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
