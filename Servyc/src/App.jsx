import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
// import { useEffect } from 'react'

const App = () => {

  const [user,setUser] = useState(null)

  // useEffect(() => {
  //   getLocalStorage()
  // })
  
    return (
      <>
      <Login />
      {/* <EmployeeDashboard />  */}
      {/* <AdminDashboard/> */}

    </>
  )
}

export default App
