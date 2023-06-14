import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            
            <p className='text-xl mt-20'>
            Greetings, and welcome to my Portfolio! To start, my name is Cory Styer. I started my coding journey when I started a Full-Stack Web Development Bootcamp 
            back in December of 2022! Ever since, I have loved the challenges and knowledge that I've gained from the bootcamp; and from it I have gained an appreciation for coding. 
            I've also discovered that I seem to grasp more of an understanding of back-end technologies involved in web development; although, I am willing to learn more as I continue 
            down the path of web development and face new challenges to overcome and expand my knowledge from learning something new every day! A couple of my interests include; 
            Art, Animation, Comics, Gaming, Cars, and Cosplay! You can see my Cosplays if you click the button to my Instagram in my Contact section below!

            </p>

            <br/>

            <p className='text-xl'>
            As I look towards the future and think of what I wish to accomplish with my life, I wish to be able to join a career that is willing to help me grow and continuously gain the knowledge I wish to learn. 
            Coding is something that is able to scratch that itch for me. Getting the opportunity to create something, but also learn something new from each and every project you work on, is something I find both 
            interesting and fulfilling. As I say, "If you learned something new by the end of the day, you had a good day."
            </p>

        </div>

    </div>
  )
}

export default About