
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card p-8 max-w-md w-full text-center">
          <h1 className="font-mono text-6xl text-off-white mb-4">404</h1>
          <p className="text-light-gray mb-8">Oops! The page you're looking for doesn't exist.</p>
          
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 neo-blur hover-lift text-off-white font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
