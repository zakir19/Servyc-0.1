import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
import {AuthContext} from './context/AuthProvider'

const App = () => {

  const [user,setUser] = useState(null)
  const authData = useContext(AuthContext)
  


  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log(user)
      
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employees')
      console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }
  }


  
    return (
      <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {/* {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} */}
      {/* <EmployeeDashboard />  */}
      {/* <AdminDashboard/> */}

    </>
  )
}

export default App
