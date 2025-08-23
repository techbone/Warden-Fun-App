# 🏙️ Warden City Digital Passport Generator

A futuristic, cyberpunk-themed web application that generates unique digital passports for citizens of Warden City. Built with React, Vite, and modern web technologies.

## Features of the app

### 🎭 **Personalization**
- **Custom Names**: Enter your name to become a citizen of Warden City
- **Dynamic Titles**: Choose from titles like Guardian, Agent, Builder, Explorer, Strategist, and more
- **Unique Badges**: Get badges like "DeFi Whisperer", "ZK Strategist", "AI Explorer", etc.
- **User Suggestions**: Add your own custom titles and badges
- **Rare & Easter Egg Items**: Discover special titles and badges hidden in the system

### 🤖 **AI-Powered Warden Score**
- Algorithmically generated score (500-1000) based on your name and title
- Dynamic feedback messages based on your score
- "Your strategic thinking gives you a high Warden Score!" for high achievers

### 🎨 **Futuristic Design**
- Neon cyberpunk aesthetic with animated background
- Glowing effects and neon borders
- Responsive design for all devices
- Animated card appearance with fade-in effects

### 🎵 **Interactive Features**
- Sound effects for passport generation and NFT minting
- Download passport as high-quality image
- Mock NFT minting with transaction simulation
- DiceBear avatar integration for unique citizen portraits

### 🏆 **Gamification Elements**
- Random passport numbers (WC-XXXX-XXXX format)
- Citizen since year tracking
- Achievement-style feedback messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd VibeCode
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ How to Use

1. **Enter Your Information**
   - Type your name in the "Name" field
   - Select a title from the dropdown (or add your own)
   - Choose a badge (or add a custom one)

2. **Generate Your Passport**
   - Click "Generate Passport" to create your digital ID
   - Watch the animated card appear with your unique Warden Score

3. **Customize Further**
   - Use the suggestion fields to add your own titles and badges
   - Try different combinations to discover rare items

4. **Download & Share**
   - Click "Download as Image" to save your passport
   - Use "Mint as NFT" for a simulated blockchain transaction

## 🏗️ Project Structure

```
src/
├── DigitalID.jsx          # Main component with state management
├── Form.jsx              # User input form component
├── PassportCard.jsx      # Passport display component
├── AnimatedBackground.jsx # Background and layout component
├── App.jsx               # Root app component
└── App.css               # Global styles and animations
```

## 🎨 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **html2canvas** - Image generation for downloads
- **DiceBear API** - Avatar generation
- **CSS3** - Animations and styling

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify

### GitHub Pages

1. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎯 Future Enhancements

- [ ] Real NFT minting integration
- [ ] Social media sharing
- [ ] Leaderboard system
- [ ] More avatar options
- [ ] Sound toggle controls
- [ ] Theme switching
- [ ] Achievement system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- DiceBear for avatar generation
- The cyberpunk aesthetic inspiration
- The React and Vite communities

---

**Welcome to Warden City, Citizen!** 🏙️✨

*Generate your digital passport and join the future of identity.*
