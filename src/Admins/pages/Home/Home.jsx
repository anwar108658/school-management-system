import React from 'react'
import schoolBg from "../../../assets/schoolBg.png"

const Home = () => {
  return (
    <div
    className="h-full bg-cover bg-no-repeat relative"
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${schoolBg})`
      }}
    >Home</div>
  )
}

export default Home