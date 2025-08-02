import React from "react";

const PassportCard = ({ passport, animate, getAvatarUrl, downloadPassport, mintPassport }) => {
  if (!passport) return null;
  return (
    <div style={{ textAlign: 'center', zIndex: 1 }}>
      <div
        id="passport-card"
        className={`neon-border ${animate ? 'fade-in' : ''}`}
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #23283a 80%, #0ff2 100%)',
          borderRadius: 20,
          padding: 32,
          marginTop: 24,
          minWidth: 320,
          color: '#0ff',
          position: 'relative',
          transition: 'box-shadow 0.5s',
          animation: animate ? 'fadeInCard 1s' : 'none',
        }}
      >
        <img
          src={getAvatarUrl(passport.name + passport.title)}
          alt="Avatar"
          width={100}
          height={100}
          crossOrigin="anonymous"
          style={{ borderRadius: '50%', border: '3px solid #0ff', marginBottom: 16 }}
        />
        <h3 className="neon-glow" style={{ margin: '8px 0 0 0', fontSize: 28 }}>{passport.name}</h3>
        <div style={{ fontSize: 18, margin: '8px 0' }}>Title: <b>{passport.title}</b></div>
        <div style={{ fontSize: 18, margin: '8px 0' }}>Badge: <b>{passport.badge}</b></div>
        <div style={{ fontSize: 18, margin: '8px 0' }}>Passport #: <b>{passport.passportNumber}</b></div>
        <div style={{ fontSize: 18, margin: '8px 0' }}>Citizen Since: <b>{passport.citizenSince}</b></div>
        <div style={{ fontSize: 22, margin: '16px 0 0 0', color: '#fff' }}>
          Warden Score: <b style={{ color: '#0ff', fontSize: 28 }}>{passport.wardenScore}</b>
        </div>
        <div style={{ fontSize: 14, marginTop: 8, color: '#0ffb' }}>
          {passport.wardenScore > 900 && "Your strategic thinking gives you a high Warden Score!"}
          {passport.wardenScore <= 900 && passport.wardenScore > 700 && "Impressive! You’re a rising star in Warden City."}
          {passport.wardenScore <= 700 && "Every citizen is vital to Warden City’s future!"}
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        <button
          onClick={downloadPassport}
          className="neon-glow"
          style={{
            padding: '10px 24px',
            borderRadius: 8,
            background: 'linear-gradient(90deg, #0ff, #08f)',
            color: '#181c24',
            fontWeight: 'bold',
            border: 'none',
            fontSize: 16,
            marginRight: 16,
            cursor: 'pointer',
            letterSpacing: 1
          }}
        >
          Download as Image
        </button>
        <button
          onClick={mintPassport}
          className="neon-glow"
          style={{
            padding: '10px 24px',
            borderRadius: 7,
            background: 'linear-gradient(90deg, #0ff, #08f)',
            color: '#181c24',
            fontWeight: 'bold',
            border: 'none',
            fontSize: 16,
            cursor: 'pointer',
            letterSpacing: 1
          }}
        >
          Mint as NFT
        </button>
      </div>
    </div>
  );
};

export default PassportCard; 