"use client"
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useToast } from "@/components/ui/use-toast";
import TypewriterText from '@/components/TypewriterText';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="page-container bg-dark-gray text-white">
        {/* Enhanced animated background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-blue-500/10 via-purple-600/5 to-pink-500/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <main className="pt-20">
          <section id="contact" className="section-container">
            <h2 className="font-mono text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Contact</h2>
            
            <div className="mt-4 mb-12">
              <TypewriterText 
                texts={[
                  "Get in touch with me",
                  "Let's work together",
                  "Have a project in mind?"
                ]}
                typingSpeed={70}
                delayBetweenTexts={2000}
                className="text-xl md:text-2xl font-mono"
                glowColor="#9b87f5"
                glowIntensity="high"
                cursorStyle="block"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-mono text-2xl font-semibold text-off-white mb-6">Ready to collaborate?</h3>
                
                <p className="text-light-gray mb-8">
                  Have a question or want to work together? Feel free to reach out to me.
                  I'm currently open to new opportunities and collaborations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                    <Mail className="text-purple-300 mr-4" size={20} />
                    <a 
                      href="mailto:joywadhonkar4@gmail.com" 
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      joywadhonkar4@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all">
                    <Phone className="text-blue-300 mr-4" size={20} />
                    <a 
                      href="tel:+919067921783" 
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      +91 906-792-1783
                    </a>
                  </div>
                  
                  <div className="flex items-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-green-500/30 transition-all">
                    <Github className="text-green-300 mr-4" size={20} />
                    <a 
                      href="https://github.com/JoyCode4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      github.com/JoyCode4
                    </a>
                  </div>
                  
                  <div className="flex items-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all">
                    <Linkedin className="text-pink-300 mr-4" size={20} />
                    <a 
                      href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      jayesh-wadhonkar-184539168
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-left" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-8 shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-light-gray text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-off-white focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-light-gray text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-off-white focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-light-gray text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-off-white resize-none focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:brightness-110 transition-all duration-300 font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-600/40 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default Contact;
