import { useEffect } from 'react';

const NavScript = () => {
  useEffect(() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger && nav && navLinks) {
      const toggleNav = () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
      };
      
      burger.addEventListener('click', toggleNav);
      
      return () => {
        burger.removeEventListener('click', toggleNav);
      };
    }
  }, []);
  
  return null;
};

export default NavScript; 