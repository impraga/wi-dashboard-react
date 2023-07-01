"use client"
import Login from './[locale]/login/page'
import { useState } from 'react'


const Home = () => {
  const [userDetails, setUserDetails] = useState({})
  return (
    // <LoginContext.Provider value={{userDetails , setUserDetails}}>
      <Login></Login>
    // </LoginContext.Provider>
  )
}

export default Home
