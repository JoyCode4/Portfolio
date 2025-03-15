
import { useState, useEffect } from 'react';
import { Play, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  images: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase = ({ project }: ProjectShowcaseProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation delay to make it look nice
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [project.id]);
  
  return (
    <div className={`w-full transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {/* Left column - Project info - Full width on mobile, 4 cols on desktop */}
        <div className="col-span-12 lg:col-span-4 flex flex-col mb-8 lg:mb-0">
          <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-4">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-mono bg-white/10 text-white px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-white/80 mb-4 md:mb-6 font-light">{project.description}</p>
          
          <p className="text-white/60 mb-6 md:mb-8 text-sm">{project.longDescription}</p>
          
          {/* GitHub and Live links */}
          <div className="flex gap-4 mt-auto">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Right column - Images gallery - Full width on mobile, 8 cols on desktop */}
        <div className="col-span-12 lg:col-span-8 relative">
          <div className="grid grid-cols-12 gap-2 md:gap-4 relative h-full">
            {/* Main large image - Stack vertically on mobile */}
            <div className="col-span-12 md:col-span-8 md:col-start-1 md:row-span-2 relative rounded-2xl overflow-hidden group h-48 md:h-auto">
              <img 
                src={project.images[0]} 
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute bottom-4 right-4">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                  <Play size={20} className="text-black ml-1" />
                </div>
              </div>
            </div>
            
            {/* Second image - Stack vertically on mobile */}
            {project.images[1] && (
              <div className="col-span-6 md:col-span-4 md:col-start-9 relative rounded-2xl overflow-hidden group h-32 md:h-auto">
                <img 
                  src={project.images[1]} 
                  alt={`${project.title} screenshot 2`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                    <Play size={16} className="text-black ml-0.5" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Third image - Stack vertically on mobile */}
            {project.images[2] && (
              <div className="col-span-6 md:col-span-4 md:col-start-9 md:row-start-2 relative rounded-2xl overflow-hidden group h-32 md:h-auto">
                <img 
                  src={project.images[2]} 
                  alt={`${project.title} screenshot 3`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                    <Play size={16} className="text-black ml-0.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Background circle decoration - Hide on mobile */}
          <div className="hidden md:block absolute -bottom-40 -right-40 w-96 h-96 border border-white/5 rounded-full"></div>
          <div className="hidden md:block absolute -bottom-60 -right-60 w-120 h-120 border border-white/3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
