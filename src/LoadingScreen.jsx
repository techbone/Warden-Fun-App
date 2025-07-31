import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Warden City...");

  useEffect(() => {
    const loadingMessages = [
      "Initializing Warden City...",
      "Connecting to the Grid...",
      "Loading Citizen Database...",
      "Generating Digital IDs...",
      "Preparing Passport System...",
      "Establishing Neural Links...",
      "Warden City Ready!"
    ];

    let currentMessageIndex = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5; // Random increment between 5-20
        
        if (newProgress >= 100) {
          setLoadingText("Warden City Ready!");
          setTimeout(() => {
            onComplete();
          }, 1000);
          clearInterval(interval);
          return 100;
        }
        
        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * (loadingMessages.length - 1));
        if (messageIndex !== currentMessageIndex) {
          currentMessageIndex = messageIndex;
          setLoadingText(loadingMessages[messageIndex]);
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: '#0ff',
      fontFamily: 'Orbitron, monospace',
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'repeating-linear-gradient(90deg, #0ff1 0 1px, transparent 1px 50px), repeating-linear-gradient(0deg, #0ff1 0 1px, transparent 1px 50px)',
        animation: 'gridMove 3s linear infinite',
        opacity: 0.3,
      }} />
      
      {/* Main content */}
      <div style={{
        textAlign: 'center',
        zIndex: 1,
        position: 'relative',
      }}>
        {/* Logo/Title */}
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          textShadow: '0 0 20px #0ff, 0 0 40px #0ff',
          animation: 'pulse 2s ease-in-out infinite',
          letterSpacing: '0.2em',
        }}>
          WARDEN CITY
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          opacity: 0.8,
          animation: 'fadeInOut 3s ease-in-out infinite',
        }}>
          Digital Passport System
        </p>
        
        {/* Loading text */}
        <div style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          minHeight: '1.5rem',
          opacity: 0.9,
        }}>
          {loadingText}
        </div>
        
        {/* Progress bar container */}
        <div style={{
          width: '400px',
          height: '8px',
          background: 'rgba(0, 255, 255, 0.2)',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid #0ff',
          boxShadow: '0 0 10px #0ff',
        }}>
          {/* Progress bar fill */}
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #0ff, #00ffff)',
            borderRadius: '4px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 20px #0ff',
            animation: 'progressGlow 1s ease-in-out infinite alternate',
          }} />
        </div>
        
        {/* Progress percentage */}
        <div style={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textShadow: '0 0 10px #0ff',
        }}>
          {Math.round(progress)}%
        </div>
      </div>
      
      {/* Animated particles */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#0ff',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes progressGlow {
          0% { box-shadow: 0 0 20px #0ff; }
          100% { box-shadow: 0 0 30px #0ff, 0 0 40px #0ff; }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .progress-container { width: 300px; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen; 