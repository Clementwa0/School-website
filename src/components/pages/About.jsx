import React from 'react';
import { ChevronRight } from 'lucide-react';
import { programs, resources } from '../../constants';

const About = () => {
 

  return (
    <section id="about" className="p-2 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-16 w-20 h-20  rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Programs Section */}
        <div className="mb-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-1">
              Empowering <span className="italic font-mono text-blue-900">Young</span> Minds
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive programs are designed to nurture your child's potential and unlock their creative abilities
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-blue-950 p-5 rounded-3xl ">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.title}
                  className={`${program.bgColor} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/10`}
                >
                  <div className="flex mb-6">
                    <div className={`p-2 ${program.iconColor} bg-white rounded-xl shadow-xs`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 max-w-2/3 mb-6">
                    {program.description}
                  </p>
                  
                  <a
                    href="#"
                    className={`inline-flex items-center px-5 py-2.5 ${program.buttonColor} text-blue-600 animate-pulse rounded-lg transition-all group-hover:shadow-md`}
                  >
                    Explore program
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resources Section */}
        <div className="text-center">
          <span className="inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Learning Materials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide engaging materials to develop confidence and sharpen young minds
          </p>

          {/* Resources Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-gray-900">{resource.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-primary">
                      View collection
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              Browse all resources
              <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;