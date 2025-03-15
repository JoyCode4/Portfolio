
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-medium-gray/10 backdrop-blur-sm border-t border-white/5 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-mono text-xl text-off-white mb-2">Jayesh Wadhonkar</h3>
            <p className="text-light-gray text-sm">Software Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/JoyCode4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-gray hover:text-off-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-gray hover:text-off-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:joywadhonkar4@gmail.com" 
              className="text-light-gray hover:text-off-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919067921783" 
              className="text-light-gray hover:text-off-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/5 flex justify-center md:justify-between items-center">
          <p className="text-sm text-light-gray">
            &copy; {currentYear} Jayesh Wadhonkar. All rights reserved.
          </p>
          <p className="hidden md:block text-sm text-light-gray">
            Designed & Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
