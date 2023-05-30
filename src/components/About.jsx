import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic harum odit id laborum doloremque impedit 
                doloribus dolores iste illo beatae voluptatibus voluptate minima fugit alias quia aut architecto, rem molestias.
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nulla ex nobis debitis nisi libero et aut repellat inventore,
                reprehenderit, laboriosam ab itaque ducimus! Accusamus quibusdam atque qui tempora numquam?
            </p>

        </div>

    </div>
  )
}

export default About