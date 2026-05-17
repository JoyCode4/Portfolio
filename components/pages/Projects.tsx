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
      title: 'AI Document Q&A',
      description: 'An AI-powered application that lets users chat with their personal documents (PDF, TXT, DOCX, images) using natural language queries.',
      longDescription: 'Built with LangChain pipelines for document loading, text splitting, embedding and vector storage using FAISS. The retrieval-based system matches user queries to relevant document context and generates accurate, source-grounded responses through a responsive React frontend and FastAPI backend.',
      tags: ['React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'LangChain', 'FAISS'],
      year: '2025',
      images: [
        '/assets/AI3.png',
        '/assets/AI1.png',
        '/assets/AI2.png'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: 'https://aidocqa.vercel.app/'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application with secure JWT authentication, dynamic product filtering and a smooth shopping experience.',
      longDescription: 'Built as a single-page application using React.js and Redux Toolkit for efficient state management. RESTful APIs were designed with Next.js to enable seamless frontend-backend integration, with a focus on performance, scalability and a production-ready user experience.',
      tags: ['React.js', 'Redux Toolkit', 'Next.js', 'Tailwind CSS', 'JWT', 'REST APIs'],
      year: '2024',
      images: [
        '/assets/ECom1.png',
        '/assets/ECom2.png',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: 'https://ecommerce-jayesh-app.vercel.app/'
    },
    {
      id: 3,
      title: 'Budget Planner',
      description: 'A scalable budget management web application with secure user authentication and reliable financial data handling.',
      longDescription: 'Architected RESTful APIs with JWT-based access control and built a responsive, high-performance UI using Tailwind CSS. The modular frontend and backend design ensures cross-device consistency and long-term maintainability.',
      tags: ['React.js', 'Node.js', 'JWT', 'REST APIs', 'Tailwind CSS'],
      year: '2024',
      images: [
        '/assets/Budget2.png',
        '/assets/Budget3.png',
        '/assets/Budget1.png'
      ],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: 'https://budget-planner-frontend-app.vercel.app/'
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

            {/* Awards & Certificates Section */}
            <div className="mt-32 mb-24">
              <h2 className="font-mono text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Awards & Certificates</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                {[
                  {
                    title: 'Mentor at Coding Ninjas',
                    description: 'Guided learners through debugging, application development and coding best practices, helping them build production-ready projects.'
                  },
                  {
                    title: 'Full Stack Development Certification',
                    description: "Completed 'Full Stack Development with Advanced Frontend Technologies' certification from Coding Ninjas."
                  },
                  {
                    title: 'Volunteer at NGO Swa-roopwardhinee',
                    description: 'Supported underprivileged students in education and extracurricular activities through structured mentoring sessions.'
                  },
                  {
                    title: 'Academic Excellence',
                    description: 'Graduated with a CGPA of 9.04/10 in B.E. Computer Science from Savitribai Phule Pune University.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/30 transform hover:translate-y-[-2px]"
                  >
                    <h3 className="text-xl font-mono mb-4">{item.title}</h3>
                    <p className="text-light-gray text-sm mb-6">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="px-4 py-1 rounded-full border border-white/20 text-sm text-light-gray">
                        Achievement
                      </span>
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
