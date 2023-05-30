import React from 'react'
import HeroImage from '../assets/heroImage.png'

const Home = () => {
  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center min-h-full">

          <h2 className="text-4xl sm:text-3xl font-bold text-white">I am a Full-Stack Developer with a preference in Back-End Development!</h2>
          <p className="text-gray-500 py-4 max-w-mid">
            Currently Enrolled in a 6 month Full-Stack Web Developer Bootcamp.
            During my time in the Bootcamp I discovered a love for coding back-end web applications,
            and have experience in working with React, Node, Esxpress.js, MongoDB, MySql, and Sequelize.
          </p>

          <div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Home;