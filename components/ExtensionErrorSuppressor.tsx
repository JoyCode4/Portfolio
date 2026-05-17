'use client';

import { useEffect } from 'react';

/**
 * Component to suppress errors from browser extensions
 * that try to inject React into the page
 */
export default function ExtensionErrorSuppressor() {
  useEffect(() => {
    // Suppress extension-related console errors
    const originalError = console.error;
    
    console.error = (...args) => {
      const errorString = args.join(' ');
      
      // Check if it's a browser extension error
      const isExtensionError = 
        errorString.includes('chrome-extension://') ||
        errorString.includes('moz-extension://') ||
        errorString.includes('safari-extension://') ||
        errorString.includes('Minified React error #299') ||
        errorString.includes('Target container is not a DOM element');

      // Only suppress extension errors, log everything else
      if (!isExtensionError) {
        originalError.apply(console, args);
      } else {
        // Log as warning instead
        console.warn('Browser extension error suppressed:', ...args);
      }
    };

    // Handle global errors
    const handleError = (event: ErrorEvent) => {
      const errorString = event.message || event.error?.toString() || '';
      
      if (
        errorString.includes('chrome-extension://') ||
        errorString.includes('Minified React error #299')
      ) {
        console.warn('Browser extension error prevented:', errorString);
        event.preventDefault();
        return true;
      }
    };

    // Handle unhandled promise rejections
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || '';
      
      if (
        reason.includes('chrome-extension://') ||
        reason.includes('Minified React error #299')
      ) {
        console.warn('Browser extension promise rejection prevented:', reason);
        event.preventDefault();
        return true;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      console.error = originalError;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}

