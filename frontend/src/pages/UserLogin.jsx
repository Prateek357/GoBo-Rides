import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user,setUser}=React.useContext(UserDataContext);

  const submitHandler =async (e) => {
    e.preventDefault();
    
    setUserData();

    const loginUser={ email:email, password:password };
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, loginUser);

    if(response.status===200){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  }
  return (
        <div className='h-screen p-7 flex flex-col justify-between'>
            <div>
                <img className='mt-9 ml-1 w-16 mb-14' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>

        <input required value={email} onChange={e => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter password</h3>

        <input required value={password} onChange={e => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
      </form>
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div >
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
