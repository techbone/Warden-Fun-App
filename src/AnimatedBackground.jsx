import React from "react";

const AnimatedBackground = ({ children }) => (
  <div style={{
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #181c24 60%, #0ff 100%)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0,
      background: 'repeating-linear-gradient(135deg, #0ff1 0 2px, transparent 2px 40px)',
      pointerEvents: 'none',
      animation: 'moveBg 8s linear infinite',
    }} />
    {children}
    <style>{`
      @keyframes fadeInCard {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes moveBg {
        0% { background-position: 0 0; }
        100% { background-position: 200px 200px; }
      }
      @media (max-width: 600px) {
        #passport-card {
          padding: 12px !important;
          min-width: 200px !important;
        }
      }
    `}</style>
  </div>
);

export default AnimatedBackground; 