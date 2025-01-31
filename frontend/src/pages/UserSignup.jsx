import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    
    setUserData({ fullname:{firstname:firstname, lastname:lastname}, email:email, password:password });
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');

  }
  return (
        <div className='h-screen p-7 flex flex-col justify-between'>
            <div>
            <img className='mt-9 ml-1 w-16 mb-14' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form onSubmit={(e) => submitHandler(e)}>
      <h3 className='text-lg font-medium mb-2'>What's your name</h3>  
      <div className='flex gap-4 mb-6'> 
      <input required value={firstname} onChange={e => setFirstname(e.target.value)}  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='first name'/>
      <input required value={lastname} onChange={e => setLastname(e.target.value)} className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='last name'/>
      </div>

        <h3 className='text-lg font-medium mb-2'>What's your email</h3>

        <input required value={email} onChange={e => setEmail(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter password</h3>

        <input required value={password} onChange={e => setPassword(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
      </form>
      <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div >
      <p className='text-xs leading-tight'>The site is protected by reCAPTCHA and <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> Google's Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  )
}

export default UserSignup
