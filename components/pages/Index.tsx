"use client"
import { ArrowRight, ArrowLeft, Github, Linkedin, Facebook, Instagram, MessageSquare, ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import { useEffect, useRef } from 'react';
import TypewriterText from '@/components/TypewriterText';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            text.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(text);
    
    return () => {
      if (text) observer.unobserve(text);
    };
  }, []);

  return (
    <PageTransition>
      <div className="page-container bg-dark-gray text-white">
        {/* Header Section with Title */}
        <section className="section-container pt-32 pb-16 relative">
          {/* Enhanced animated background gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-blue-500/10 via-purple-600/5 to-pink-500/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div ref={textRef} className="opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="mb-12 lg:mb-0 max-w-3xl">
                <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-bold relative inline-flex flex-col">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Full-stack</span>
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Developer</span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                </h1>
                
                <div className="mt-6 mb-8 h-2">
                  <TypewriterText 
                    texts={[
                      "Hello! I'm Jayesh",
                      "I build amazing websites",
                      "React & Node Expert",
                    ]}
                    typingSpeed={70}
                    delayBetweenTexts={2000}
                    className="text-xl md:text-2xl font-mono"
                    glowColor="#9b87f5"
                    glowIntensity="high"
                    cursorStyle="block"
                  />
                </div>
                
                <p className="text-light-gray text-lg max-w-xl mb-8 leading-relaxed">
                  My goal is to write maintainable, clean, and understandable code to make the development process enjoyable.
                </p>
                
                {/* Enhanced Social Media Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/JoyCode4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 transform hover:translate-y-[-2px]"
                  >
                    <Github size={18} className="text-purple-300" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 transform hover:translate-y-[-2px]"
                  >
                    <Linkedin size={18} className="text-blue-300" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-green-500/50 shadow-lg hover:shadow-green-500/20 transform hover:translate-y-[-2px]"
                  >
                    <MessageSquare size={18} className="text-green-300" />
                    <span>Message</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 transform hover:translate-y-[-2px]"
                  >
                    <Facebook size={18} className="text-blue-300" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/20 transform hover:translate-y-[-2px]"
                  >
                    <Instagram size={18} className="text-pink-300" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              
              {/* Enhanced Projects CTA */}
              <div className="relative">
                <Link
                  href="/projects"
                  className="flex items-center justify-between px-6 py-3 w-60 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:brightness-110 transition-all duration-300 font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-600/40 transform hover:translate-y-[-2px]"
                >
                  <span>Projects</span>
                  <div className="bg-white text-purple-700 rounded-full h-8 w-8 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Projects Carousel Preview */}
        <section className="section-container py-12 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-gradient-to-r from-purple-600/10 via-blue-600/5 to-pink-500/10 blur-[100px] -z-10 animate-pulse" style={{animationDuration: '8s'}}></div>
          
          <h2 className="text-2xl font-mono mb-8 font-semibold text-center relative">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
          </h2>
          
          <div className="relative flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            <ProjectPreview 
              title="The simplest example is golang" 
              image="/placeholder.svg"
              direction="left"
            />
            <ProjectPreview 
              title="The simplest example is Kafka + golang" 
              image="/placeholder.svg"
              direction="down"
            />
            <ProjectPreview 
              title="The simplest example is Kafka + golang" 
              image="/placeholder.svg"
              direction="right"
            />
            <ProjectPreview 
              title="The simplest example is Kafka + golang" 
              image="/placeholder.svg"
              direction="up"
            />
          </div>
        </section>
        
        {/* About Section with enhanced styling */}
        <section className="section-container py-16 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-500/5 blur-[100px] -z-10 animate-pulse" style={{animationDuration: '10s'}}></div>
          
          <h2 className="text-3xl font-mono mb-10 font-semibold text-center relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About me</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl mb-4">Hello! I'm Jayesh, I'm a <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">full-stack developer</span>.</h3>
              <p className="text-light-gray">More than 1 year experience.</p>
              
              {/* Enhanced Skills Cards */}
              <div className="mt-12 space-y-6">
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="mb-4 text-purple-300">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "CSS", "Redux Toolkit", "Next.js", "HTML", "Express", "Angular","JavaScript"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:text-purple-200">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="mb-4 text-blue-300">Styles</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SCSS", "CSS", "TailwindCSS",  "Bootstrap"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:text-blue-200">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:border-green-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="mb-4 text-green-300">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "PostgreSQL", "MySQL", "MongoDB", "Node", "Typescript", "API", "PostMan","Java"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:text-green-200">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="mb-4 text-orange-300">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Docker","AWS EC2", "Bash","Git","Github"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:text-orange-200">/ {skill} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              {/* Replace the placeholder image with interactive profile circle */}
              <div className="relative flex items-center justify-center mb-10">
                <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-gradient-to-l from-purple-600/20 to-blue-600/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Interactive ring around avatar */}
                <div className="relative w-60 h-60 flex items-center justify-center">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border border-blue-400/40 rounded-full"></div>
                  
                  {/* Dots around the circle */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg shadow-purple-500/40"
                      style={{ 
                        transform: `rotate(${degree}deg) translateY(-120px)`,
                        opacity: 0.8
                      }}
                    ></div>
                  ))}
                  
                  {/* Skill bubbles */}
                  <div className="absolute -top-4 -left-4 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/20">React</div>
                  <div className="absolute top-1/4 -right-8 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/20">Node.js</div>
                  <div className="absolute -bottom-2 -right-6 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-green-300 border border-green-500/30 shadow-lg shadow-green-500/20">Java</div>
                  <div className="absolute bottom-1/4 -left-12 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-pink-300 border border-pink-500/30 shadow-lg shadow-pink-500/20">TypeScript</div>
                  
                  {/* Central avatar */}
                  <Avatar className="w-48 h-48 border-4 border-white/10 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
                    <AvatarImage src="/profile.gif" alt="Jayesh Profile" className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-700 to-blue-700 text-white text-3xl">JW</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Enhanced Work Experience Section */}
              <div className="mt-4">
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work</h2>
                
                <div className="space-y-px backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <WorkExperience 
                    period="2024 - Present"
                    duration="6 months"
                    company="Yardi"
                    position="Software Engineer"
                    technologies="Angular & C#"
                  />
                  <WorkExperience 
                    period="2023 - 2024"
                    duration="6 months internship"
                    company="Coding Ninjas"
                    position="Mentor-Full Stack Developer"
                    technologies="React, Node, ExpressJs, & MERN stack"
                  />
                </div>
                
                <div className="mt-4 text-right">
                  <p className="text-light-gray">Work experience</p>
                  <p className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1 year 1 month</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

// Project Preview Component with enhanced styling
const ProjectPreview = ({ title, image, direction }: { title: string, image: string, direction: 'left' | 'right' | 'none' | 'up' | 'down'}) => {
  return (
    <div className="flex-shrink-0 w-80 h-32 relative rounded-xl overflow-hidden group shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-[1.03] border border-white/5 hover:border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
        <p className="text-sm text-white group-hover:text-purple-200 transition-colors">{title}</p>
        <div className="flex justify-between items-center">
          <button className="text-xs text-white bg-purple-600/90 px-3 py-1 rounded-full hover:bg-purple-500 transition-colors shadow-md hover:shadow-purple-500/50">
            Read more
          </button>
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300 shadow-md">
            {direction === 'left' && <ArrowLeft size={12} className="text-purple-700" />}
            {direction === 'right' && <ArrowRight size={12} className="text-purple-700" />}
            {direction === 'up' && <ArrowUp size={12} className="text-purple-700" />}
            {direction === 'down' && <ArrowDown size={12} className="text-purple-700" />}
            {direction === 'none' && <ArrowRight size={12} className="text-purple-700" />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Work Experience Component with enhanced styling
const WorkExperience = ({ 
  period, 
  duration, 
  company, 
  position, 
  technologies 
}: { 
  period: string, 
  duration: string, 
  company: string, 
  position: string, 
  technologies: string 
}) => {
  return (
    <div className="flex py-4 px-6 border-t border-white/10 hover:bg-white/5 transition-colors">
      <div className="w-1/3 text-light-gray">
        <div>{period}</div>
        <div className="text-xs">{duration}</div>
      </div>
      <div className="w-1/3 font-medium text-blue-300">{company}</div>
      <div className="w-1/3 text-right">
        <div className="font-medium text-purple-300">{position}</div>
        <div className="text-light-gray">{technologies}</div>
      </div>
    </div>
  );
};

export default Index;
