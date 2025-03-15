"use client"
import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import ProjectShowcase from '@/components/ProjectShowcase';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TypewriterText from '@/components/TypewriterText';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'GisLab',
      description: 'Creating map managment based application integrated with the KML application and improved with modern technologies.',
      longDescription: 'The project supports different file extensions, map rendering, markers, and polygons.',
      tags: ['TypeScript', 'RESTAPI', 'React'],
      year: '2022',
      images: [
        '/placeholder.svg',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Kana Master',
      description: 'An iOS application designed for learning Japanese and hiragana. It includes an unique system for storing, testing and practicing Japanese every day.',
      longDescription: 'The app also offers audio tuning for correct pronunciation, achievements, and personalized learning progress that gets remembered.',
      tags: ['TypeScript', 'React-Native', 'Redux-Toolkit', 'CSS'],
      year: '2023',
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Anime Sentry',
      description: 'My anime bot! Notifies when your favorite anime episodes are released to your feed and notifications on your specific release!',
      longDescription: 'Key features:\n- Stay on top of your anime list\n- Get notified on new episodes\n- Save your favorite shows\n- Our Discord bot notifies for new airing using a feed schedule',
      tags: ['MongoDB', 'ExpressJS', 'TypeScript'],
      year: '2023',
      images: [
        '/placeholder.svg',
        'https://images.unsplash.com/photo-1578632292335-df3abbb0d586',
        'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    }
  ];

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageTransition>
      <div className="page-container bg-dark-gray text-white">
        {/* Enhanced animated background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-blue-500/10 via-purple-600/5 to-pink-500/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <main className="min-h-screen">
          <section id="projects" className="section-container pt-32">
            <h2 className="font-mono text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Projects</h2>
            
            <div className="mt-4 mb-12">
              <TypewriterText 
                texts={[
                  "Check out my work",
                  "Projects & Applications",
                  "Web & Mobile Development"
                ]}
                typingSpeed={70}
                delayBetweenTexts={2000}
                className="text-xl md:text-2xl font-mono"
                glowColor="#9b87f5"
                glowIntensity="high"
                cursorStyle="block"
              />
            </div>
            
            {/* Project Showcase */}
            <div className="relative w-full overflow-hidden mt-8">
              <ProjectShowcase 
                key={projects[currentProject].id}
                project={projects[currentProject]}
              />
              
              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
                <button 
                  onClick={handlePrevProject}
                  className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 hover:border-purple-500/30 shadow-lg hover:shadow-purple-500/20"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
                <button 
                  onClick={handleNextProject}
                  className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 hover:border-purple-500/30 shadow-lg hover:shadow-purple-500/20"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
              
              {/* Project Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {projects.map((project, index) => (
                  <button 
                    key={project.id}
                    onClick={() => setCurrentProject(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentProject === index
                        ? "w-8 bg-gradient-to-r from-purple-600 to-blue-600" 
                        : "w-2 bg-white/40"
                    }`}
                    aria-label={`View project ${project.title}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Articles Section */}
            <div className="mt-32 mb-24">
              <h2 className="font-mono text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index} 
                    className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/30 transform hover:translate-y-[-2px]"
                  >
                    <h3 className="text-xl font-mono mb-4">The simplest example is Kafka + golang</h3>
                    <p className="text-light-gray text-sm mb-6">
                      This article presents a simple way to implement event streaming architecture using Kafka, Golang, and Docker.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-1 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors">
                        Read more
                      </button>
                      <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <ChevronRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default Projects;
