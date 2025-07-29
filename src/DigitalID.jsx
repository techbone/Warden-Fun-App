import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Form from "./Form";
import PassportCard from "./PassportCard";
import AnimatedBackground from "./AnimatedBackground";
import "./App.css";

const INITIAL_TITLES = [
  "Guardian", "Agent", "Builder", "Explorer", "Strategist",
  "Sentinel", "Cipher", "Navigator", "Oracle", "Warden",
  "Synthmaster", "Chronomancer", "Quantum Pilot", "Neon Scribe", // rare
  "Shadow Operative" // easter egg
];
const INITIAL_BADGES = [
  "DeFi Whisperer", "ZK Strategist", "AI Explorer", "Quantum Coder", "Chain Guardian",
  "Protocol Alchemist", "Meta Architect", "Block Sage", "Node Runner", "Data Druid",
  "Hacker of Light", "Pulse Seeker", "Glitch Artist", // rare
  "404 Not Found", // easter egg
  "Random"
];

const getAvatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(seed)}&backgroundColor=transparent`;

function randomPassportNumber() {
  return (
    "WC-" +
    Math.random().toString(36).substring(2, 6).toUpperCase() +
    "-" +
    Math.floor(1000 + Math.random() * 9000)
  );
}

const DigitalID = () => {
  const [titles, setTitles] = useState(INITIAL_TITLES);
  const [badges, setBadges] = useState(INITIAL_BADGES);
  const [name, setName] = useState("");
  const [title, setTitle] = useState(INITIAL_TITLES[0]);
  const [badge, setBadge] = useState(INITIAL_BADGES[0]);
  const [passport, setPassport] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customBadge, setCustomBadge] = useState("");
  const audioRef = useRef();
  const mintAudioRef = useRef();

  const addTitle = () => {
    if (customTitle && !titles.includes(customTitle)) {
      setTitles([...titles, customTitle]);
      setTitle(customTitle);
      setCustomTitle("");
    }
  };
  const addBadge = () => {
    if (customBadge && !badges.includes(customBadge)) {
      // Insert before "Random"
      const randomIdx = badges.lastIndexOf("Random");
      const newBadges = [...badges];
      newBadges.splice(randomIdx, 0, customBadge);
      setBadges(newBadges);
      setBadge(customBadge);
      setCustomBadge("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate Warden Score
    const baseScore = name.length * 42 + title.length * 17 + Math.floor(Math.random() * 100);
    const wardenScore = 500 + (baseScore % 501); // 500-1000

    // Assign badge
    let finalBadge = badge;
    if (badge === "Random") {
      const filtered = badges.filter(b => b !== "Random");
      finalBadge = filtered[Math.floor(Math.random() * filtered.length)];
    }

    setPassport({
      name,
      title,
      badge: finalBadge,
      wardenScore,
      passportNumber: randomPassportNumber(),
      citizenSince: new Date().getFullYear(),
    });
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
    if (audioRef.current) audioRef.current.play();
  };

  const downloadPassport = async () => {
    const card = document.getElementById("passport-card");
    if (card) {
      const canvas = await html2canvas(card);
      const link = document.createElement("a");
      link.download = "warden-passport.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const mintPassport = () => {
    if (mintAudioRef.current) mintAudioRef.current.play();
    setTimeout(() => {
      alert("Passport minted as NFT! (Mock)");
    }, 300);
  };

  return (
    <AnimatedBackground>
      <h2 className="neon-glow" style={{ textAlign: 'center', letterSpacing: 2, zIndex: 1 }}>Warden City Digital Passport</h2>
      <Form
        name={name}
        setName={setName}
        title={title}
        setTitle={setTitle}
        badge={badge}
        setBadge={setBadge}
        TITLES={titles}
        BADGES={badges}
        onSubmit={handleSubmit}
        addTitle={addTitle}
        addBadge={addBadge}
        customTitle={customTitle}
        setCustomTitle={setCustomTitle}
        customBadge={customBadge}
        setCustomBadge={setCustomBadge}
      />
      <PassportCard
        passport={passport}
        animate={animate}
        getAvatarUrl={getAvatarUrl}
        downloadPassport={downloadPassport}
        mintPassport={mintPassport}
      />
      {/* Sound effects */}
      <audio ref={audioRef} src="https://cdn.jsdelivr.net/gh/naptha/tinysound@master/sfx/beep.mp3" preload="auto" />
      <audio ref={mintAudioRef} src="https://cdn.jsdelivr.net/gh/naptha/tinysound@master/sfx/beep.mp3" preload="auto" />
    </AnimatedBackground>
  );
};

export default DigitalID; 