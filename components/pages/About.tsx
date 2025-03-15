"use client"
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import PageTransition from '@/components/PageTransition';
import TypewriterText from '@/components/TypewriterText';

const About = () => {
  const skills = [
    'Java', 'OOPs', 'HTML', 'CSS', 'JavaScript', 'ReactJS'
  ];

  const education = [
    {
      degree: 'BE in Computer Science',
      institution: 'TSSM BSCOER',
      year: '2021-2024',
      score: 'CGPA: 9.04'
    },
    {
      degree: 'HSC',
      institution: 'N.M.V. Junior College Pune',
      year: '2020',
      score: '68.62%'
    },
    {
      degree: 'SSC',
      institution: 'Vidya Niketan English Medium School',
      year: '2018',
      score: '82.60%'
    }
  ];

  const experience=[
    {
      organization:"Yardi",
      position:"Software Engineer",
      tenure:"6 months",
    },
    {
      organization:"Coding Ninjas",
      position:"Mentor - Full Stack Developer",
      tenure:"6 months internship",
    }
  ]

  return (
    <PageTransition>
      <div className="page-container bg-dark-gray text-white">
        <main className="pt-20">
          {/* Enhanced animated background gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-blue-500/10 via-purple-600/5 to-pink-500/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <section id="about" className="section-container">
            <h2 className="font-mono text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">About me</h2>
            
            <div className="mt-4 mb-8">
              <TypewriterText 
                texts={[
                  "Get to know me better",
                  "Skills & Experience",
                  "Education & Background"
                ]}
                typingSpeed={70}
                delayBetweenTexts={2000}
                className="text-xl md:text-2xl font-mono"
                glowColor="#9b87f5"
                glowIntensity="high"
                cursorStyle="block"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6 animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-mono text-2xl font-semibold text-off-white">Hello! I'm Jayesh, a <span className="text-gradient">software engineer</span>.</h3>
                
                <p className="text-light-gray">
                  I specialize in building exceptional digital experiences that are both functional and visually appealing. 
                  Currently, I'm focused on developing accessible, responsive web applications.
                </p>
                
                <p className="text-light-gray">
                  With 6 months of experience at Yardi, I've honed my skills in creating efficient, scalable, and maintainable code.
                </p>

                <p className="text-light-gray">
                  I'm passionate about continuous learning and staying updated with the latest technologies and best practices in 
                  software development.
                </p>
                
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-between px-6 py-3 w-48 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:brightness-110 transition-all duration-300 font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-600/40 transform hover:translate-y-[-2px]"
                  >
                    <span>Get in touch</span>
                    <div className="bg-white text-purple-700 rounded-full h-8 w-8 flex items-center justify-center">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-8 animate-slide-left" style={{ animationDelay: '0.3s' }}>
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="font-mono text-lg font-medium text-off-white">Technical Skills</h4>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-block text-sm font-mono bg-black/40 text-off-white px-3 py-1 rounded-full border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h5 className="font-mono text-sm font-medium text-off-white mt-4">Languages</h5>
                  <p className="text-light-gray text-sm">English, Hindi, Marathi</p>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="font-mono text-lg font-medium text-off-white">Education</h4>
                  
                  <div className="space-y-6 mt-4">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-purple-500/30 pl-4 space-y-1">
                        <h5 className="text-off-white font-medium">{edu.degree}</h5>
                        <p className="text-light-gray text-sm">{edu.institution}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-light-gray">{edu.year}</span>
                          <span className="text-purple-300">{edu.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:border-green-500/30 transform hover:translate-y-[-2px]">
                  <h4 className="font-mono text-lg font-medium text-off-white">Experience</h4>
                  {experience.map((exp,index)=>(
                    <div key={index} className="border-l-2 border-green-500/30 pl-4 space-y-1 mt-4">
                      <h5 className="text-off-white font-medium">{exp.position}</h5>
                      <p className="text-light-gray text-sm">{exp.organization}</p>
                      <p className="text-xs text-green-300">{exp.tenure}</p>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default About;
