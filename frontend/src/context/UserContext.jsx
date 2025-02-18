import React,{ createContext, useState } from 'react'
export const UserDataContext = createContext() 
const UserContext = ({children}) => {
    const [user, setUser] = useState({
        fullname:{firstname: '',lastname: ''},
        email: '',
      }),
      [isLoading, setIsLoading] = useState(false);

      const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
      };
  return (
    <div>
      <UserDataContext.Provider value={{user,setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
