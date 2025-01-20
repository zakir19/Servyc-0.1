import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
          {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
