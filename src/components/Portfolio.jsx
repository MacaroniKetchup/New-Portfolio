import React from 'react'
import battleBinder from '../assets/portfolio/battleBinder.png'
import jobSearch from '../assets/portfolio/jobSearch.png'
import underDevelopment from '../assets/portfolio/underDevelopment.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: battleBinder,
            demoLink: "https://arcane-falls-03228.herokuapp.com/",
            repoLink: "https://github.com/colekasa/Battle-Binder"
        },
        {
            id: 2,
            src: jobSearch,
            demoLink: "https://macaroniketchup.github.io/Webdev-Remote-Job-Search-App/",
            repoLink: "https://github.com/MacaroniKetchup/Webdev-Remote-Job-Search-App"
        },
        {
            id: 3,
            src: underDevelopment
        },
        {
            id: 4,
            src: underDevelopment
        },
        {
            id: 5,
            src: underDevelopment
        },
        {
            id: 6,
            src: underDevelopment
        },
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white">
            <div className='max-w-screen-lg p-4 mx-auto'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className="py-6">Browse some of my work!</p>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({ id, src, demoLink, repoLink }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className="flex items-center justify-center">
                            <button
                                className='w-1/2 px-6 py-3 m-4 duration-200'
                                onClick={() => window.open(demoLink, "_blank")}
                            >
                                Demo
                            </button>
                            <button
                                className='w-1/2 px-6 py-3 m-4 duration-200'
                                onClick={() => window.open(repoLink, "_blank")}
                            >
                                Repo
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
