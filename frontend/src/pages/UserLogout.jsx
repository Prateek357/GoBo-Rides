import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleLogout = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setError('No active session found')
            return
        }

        try {
            setLoading(true)
            setError(null)
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate('/login')
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Logout failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="logout-container">
      <h2>Are you sure you want to logout?</h2>
      {error && <div className="error-message">{error}</div>}
      <button 
        onClick={handleLogout} 
        disabled={loading}
        className="logout-button"
      >
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  )

}

export default UserLogout
