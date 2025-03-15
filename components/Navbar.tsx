"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-dark-gray/70 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-xl text-off-white hover:opacity-80 transition-opacity">
          Jayesh Wadhonkar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link
            key={item.name}
            href={item.path}
            className={`font-sans text-sm tracking-wide transition-all hover:text-off-white ${
              pathname === item.path ? "text-off-white" : "text-light-gray"
            }`}
          >
            {item.name}
          </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light-gray hover:text-off-white transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-dark-gray/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-sans text-2xl tracking-wider transition-all ${
                pathname === item.path ? "text-off-white" : "text-light-gray"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
