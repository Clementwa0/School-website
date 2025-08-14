import React from 'react'
import { Contact, Zap } from 'lucide-react'
import { Contact2 } from 'lucide-react'
import { UserRound } from 'lucide-react'

export default function Home() {
    return (
        <section className="bg-purple-50 py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <h1 className="text-4xl flex items-center justify-center sm:text-5xl lg:text-6xl font-extrabold text-purple-900">
                    Better Future For Your Kids
                </h1>
                <div className="flex items-start justify-between gap-8">
                    {/* Left image */}
                    <img
                        src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=800&auto=format&fit=crop"
                        alt="Girl holding books"
                        className="rounded-full border-8 border-white shadow-lg object-cover w-72 h-72 self-start"
                    />

                    {/* Middle content */}
                    <div className="flex flex-col items-center text-center flex-1">

                        <p className="inline-block bg-white shadow px-4 py-2 rounded-full text-gray-600 text-sm mt-4">
                            Let the child be the director, and the actor in his own play
                        </p>

                        <div className="mt-6">
                            <button className="px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-lg hover:scale-105 transform transition">
                                Get Started
                            </button>
                        </div>

                        <p className="max-w-lg text-gray-600 mt-6">
                            We just don't give our students only lecture but real life experiment, workshops and field experience throughout the journey!
                        </p>

                        {/* Stats section with arrows */}
                        <div className="mt-12 flex items-start justify-center gap-20 relative">
                            {/* Active Students */}
                            <div className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-start text-center w-56">
                                <div className="flex items-start justify-start w-14 h-14 rounded-full">
                                    <Contact2 className="text-purple-600 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-purple-900">7.5k+</h3>
                                <p className="text-gray-600 text-sm">Active Students</p>
                            </div>

                            {/* Arrow down */}
                            <img
                                src="/src/assets/updown.png"
                                alt="arrowdown"
                                className="absolute left-1/2 -translate-x-1/2 top-16 w-10"
                            />

                            {/* Available Programs - slightly lower */}
                            <div className="backdrop-blur-sm p-8 rounded-3xl  border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-start text-center w-56 mt-10">
                                <div className="flex items-center  w-14 h-14 rounded-full">
                                    <Zap className="text-green-600 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-purple-900">50+</h3>
                                <p className="text-gray-600 text-sm">
                                    Available field programs and increasing
                                </p>
                            </div>

                            {/* Arrow up-down */}
                            <img
                                src="/src/assets/arrowdown.png"
                                alt="updown"
                                className="absolute right-1/2 translate-x-1/2 top-44 w-10 rotate-12"
                            />
                        </div>

                    </div>

                    {/* Right image */}
                    <div className='pt-20'>
                        <img
                            src='/src/assets/kids.png'
                            alt="Boy holding books"
                            className="h-full"/>
                    </div>
                </div>
            </div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>

            {/* Floating Space Icons */}
            <div className="absolute top-32 left-16 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <img
                src='/src/assets/alienship1.png'
                 className="text-primary/60 w-10 rotate-45 hover:text-primary transition-colors" />
            </div>

            {/* Rocket Ball - Sparkles */}
            <div className="absolute top-20 right-32 ">
                <img
                src='/src/assets/planet.png' className="text-accent/70 w-20 hover:text-accent transition-colors" />
            </div>

            {/* Astronaut Sketch */}
            <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                <img
                src='/src/assets/rocket.png' className="text-secondary/60 w-14 hover:text-secondary transition-colors" />
            </div>

            {/* Additional floating icons */}
            <div className="absolute top-64 left-1/3 " style={{ animationDelay: '3s' }}>
                <img
                src="/src/assets/earth.png" className="text-accent/50 w-10 -rotate-12 hover:text-accent transition-colors" />
            </div>

            <div className="absolute bottom-10 opacity-70 left-20 ">
                <img
                src="/src/assets/ball.png " className="text-primary/40 w-20 hover:text-primary transition-colors" />
            </div>

            <div className="absolute top-96 right-8 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <UserRound className="text-accent/60 w-6 h-6 hover:text-accent transition-colors" />
            </div>
        </section>
    )
}
