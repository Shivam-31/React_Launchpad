import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export default function About() {
  const { user } = useAuth();

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">DevCollab</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Where developers connect, collaborate, and create amazing projects together.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team Collaboration"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              Build Amazing Projects with the Right Team
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              DevCollab is a platform built for developers who want to turn their ideas into reality. 
              Whether you're a student looking for project partners, a freelancer seeking new opportunities, 
              or a team lead building a startup, DevCollab helps you find the right people.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to make collaboration seamless. Post your project, find talented developers, 
              and build something extraordinary together.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center bg-orange-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center bg-orange-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">200+</div>
                <div className="text-sm text-gray-500">Developers</div>
              </div>
              <div className="text-center bg-orange-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">4.8★</div>
                <div className="text-sm text-gray-500">Team Rating</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to={user ? '/projects' : '/register'}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200"
              >
                {user ? 'Explore Projects' : 'Join DevCollab Today'}
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why <span className="text-orange-600">DevCollab</span>?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🤝',
    title: 'Find Your Team',
    description: 'Connect with like-minded developers who share your passion and vision.'
  },
  {
    icon: '📋',
    title: 'Task Management',
    description: 'Organize your projects with built-in task boards and progress tracking.'
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Communicate instantly with your team members and stay on the same page.'
  }
];