"use client";

import React, { useEffect } from 'react';
import HeroResources from './components/hero_resources';
import Resources from './components/infra';


// Main Page Component
export default function ResourcesPage() {
    useEffect(() => {
        // Custom CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes spin-reverse {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
            }
            
            .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
            }
            
            .animate-spin-reverse {
                animation: spin-reverse 15s linear infinite;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    
    return (
        <>
            <HeroResources />
            <Resources />
        </>
    );
}