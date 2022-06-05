import React from 'react'
import "./Home.css";
import Developer from '../Components/DeveloperComponent/Developer';
function Home() {
  return (
    <div className='home'>
       <h1 className='home__heading'> Hire Top Developers</h1> 
       <Developer/>
    </div>
  )
}

export default Home