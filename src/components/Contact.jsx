import React from 'react'

export const Contact = () => {
    return (
        <div name="contact" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto'>
                <div className='pb-8'>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contacts</p>
                    <p className="py-6">Feel free to visit my Github, or Socials, Email me, and Listen to my Music Tastes</p>
                    <div>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500' href="mailto:cstyer2552@gmail.com">Email</button>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-500 to-gray-500' onClick={() => window.open('https://github.com/MacaroniKetchup', '_blank')}>Github</button>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fuchsia-800 to-pink-800' onClick={() => window.open('https://www.instagram.com/styles_styer/', '_blank')}>Instagram</button>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-800 to-green-800' onClick={() => window.open('https://open.spotify.com/user/macaroniketchup', '_blank')}>Spotify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
