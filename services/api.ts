
// API service for making requests to our backend

/**
 * Submit a contact form message to the backend
 */
export const submitContactForm = async (data: { 
  name: string; 
  email: string; 
  message: string;
}) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Check if the backend API is available
 */
export const checkApiHealth = async () => {
  try {
    const response = await fetch('/api/health');
    return await response.json();
  } catch (error) {
    console.error('API health check failed:', error);
    return { status: 'error', message: 'Could not connect to backend' };
  }
};
