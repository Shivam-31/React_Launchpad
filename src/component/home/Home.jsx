import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {user ? (
                  <>
                    Welcome Back,{' '}
                    <span className="text-orange-600">{user.name}!</span>
                    <span className="block text-3xl md:text-4xl text-gray-600 mt-2">
                      Find Your Next Project Team 🚀
                    </span>
                  </>
                ) : (
                  <>
                    Find Your Dream
                    <span className="block text-orange-600 mt-2">
                      Development Team
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                {user
                  ? 'Explore projects, connect with developers, and build amazing things together.'
                  : 'Join DevCollab and connect with talented developers to build amazing projects together.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {user ? (
                <>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Browse Projects
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    to="/create-project"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
                  >
                    + New Project
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started Free
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.8★</div>
                <div className="text-gray-600">Team Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team Collaboration"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Why Choose DevCollab
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            {user ? 'Ready to Build Something Amazing?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {user
              ? 'Create or join a project and start collaborating today!'
              : 'Join thousands of developers and build amazing projects together.'}
          </p>
          <Link
            to={user ? '/create-project' : '/register'}
            className="inline-flex items-center px-10 py-5 text-xl font-bold text-orange-600 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-2xl"
          >
            {user ? 'Create Project 🚀' : 'Get Started Free'}
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🤝',
    title: 'Find Your Team',
    description: 'Connect with like-minded developers and build amazing projects together.'
  },
  {
    icon: '🚀',
    title: 'Launch Fast',
    description: 'Start collaborating immediately with built-in task management and chat.'
  },
  {
    icon: '⭐',
    title: 'Build Your Portfolio',
    description: 'Showcase your work and earn recognition from the developer community.'
  }
];