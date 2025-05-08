import { useEffect } from 'react';
import { MyComponent } from './MyComponent'; // Correct for named export

const CountdownScript = () => {
  useEffect(() => {
    let timeLeft = 5;
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
      const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
          clearInterval(timer);
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, []);
  
  return null;
};

export default CountdownScript; 