import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log("email is ",email);
        console.log("password is ",password);
        setEmail("")
        setPassword("") 

    }
  return (  
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
             className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                 required className=' outline-none border-2 bg-transparent border-emerald-600 py-4 px-5 rounded-full placeholder:text-grey-400 ' type="email" placeholder='Enter your email address'/>
                <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required className=' outline-none border-2 bg-transparent border-emerald-600 py-4 px-5 rounded-full mt-3 placeholder:text-grey-400 ' type="password" placeholder='Enter your password'/>
                <button className='mt-5 text-white outline-none  bg-emerald-600 bg-transparenttext-xl py-4 px-5 rounded-full placeholder:text-white 'type='submit'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
