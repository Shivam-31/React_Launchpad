import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // NOTE: Either use useLoaderData OR useState+fetch, not both!
    
    // OPTION 1: Using useLoaderData (Cleaner - RECOMMENDED)
    const loaderData = useLoaderData()
    
    // OPTION 2: Using useState + useEffect (if you want client-side fetching)
    // const [githubData, setGithubData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Shivam-31')
    //   .then(response => response.json())
    //   .then(data => {
    //       console.log(data);
    //       setGithubData(data)
    //   })
    // }, [])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">
                    GitHub Profile
                </h1>
                
                <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img 
                                src={loaderData.avatar_url} 
                                alt="GitHub Profile" 
                                className="w-48 h-48 rounded-full border-4 border-orange-500 shadow-lg"
                            />
                        </div>
                        
                        {/* Profile Info */}
                        <div className="flex-grow">
                            <h2 className="text-3xl font-bold mb-2">{loaderData.name || loaderData.login}</h2>
                            <p className="text-gray-400 mb-4">@{loaderData.login}</p>
                            <p className="text-gray-300 mb-6">{loaderData.bio || 'No bio available'}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-900 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-orange-500">{loaderData.public_repos}</div>
                                    <div className="text-gray-400">Repos</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-orange-500">{loaderData.followers}</div>
                                    <div className="text-gray-400">Followers</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-orange-500">{loaderData.following}</div>
                                    <div className="text-gray-400">Following</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-orange-500">{loaderData.public_gists}</div>
                                    <div className="text-gray-400">Gists</div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                {loaderData.location && (
                                    <div className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {loaderData.location}
                                    </div>
                                )}
                                
                                {loaderData.blog && (
                                    <div className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                        <a href={loaderData.blog} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">
                                            {loaderData.blog}
                                        </a>
                                    </div>
                                )}
                                
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    Joined {new Date(loaderData.created_at).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* GitHub Link */}
                    <div className="mt-8 text-center">
                        <a 
                            href={loaderData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shivam-31')
    return response.json()
}