import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Menu, X as CloseIcon, TrendingUp, Flame, Star, Sparkles, Trophy, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTRACT_ADDRESS = "4narUe9SFJegphpEpQJunCLnHQaozPrjeACzugE6pump";
const LOGO_URL = "https://pbs.twimg.com/media/HLWfbvrWQAAgt_F?format=jpg&name=large";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hypeLevel, setHypeLevel] = useState(10);
  const [soundPlaying, setSoundPlaying] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const increaseHype = () => {
    setHypeLevel(prev => Math.min(prev + 10, 150));
  };

  const triggerSoundSim = (memePhrase: string) => {
    setSoundPlaying(memePhrase);
    setTimeout(() => setSoundPlaying(null), 1000);
  };

  const navLinks = [
    { name: 'Live Chart', id: 'chart' },
    { name: 'Lore & Origin', id: 'lore' },
    { name: 'Tokenomics', id: 'tokenomics' },
    { name: 'How to Buy', id: 'how-to-buy' },
    { name: 'Fabulous Roadmap', id: 'roadmap' }
  ];

  return (
    <div className="min-h-screen bg-[#090D1A] font-sans relative pb-12 selection:bg-[#39FF14] selection:text-black">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      {/* Glow highlight effects */}
      <div className="absolute top-[20%] left-[10%] w-[120px] sm:w-[350px] h-[120px] sm:h-[350px] bg-[#39FF14] rounded-full blur-[80px] sm:blur-[180px] opacity-15 pointer-events-none"></div>
      <div className="absolute top-[60%] right-[5%] w-[150px] sm:w-[400px] h-[150px] sm:h-[400px] bg-[#FCD34D] rounded-full blur-[80px] sm:blur-[200px] opacity-15 pointer-events-none"></div>

      {/* Header & Quick Navigation */}
      <header className="sticky top-0 h-[80px] md:h-[96px] shrink-0 bg-[#0F172A]/90 backdrop-blur-md border-b-4 border-[#39FF14] flex items-center justify-between px-4 md:px-8 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="relative">
            <div className="absolute inset-0 bg-[#39FF14] rounded-full blur-sm animate-pulse"></div>
            <img src={LOGO_URL} alt="Anshua Logo" className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white relative z-10" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black italic tracking-tighter text-[#39FF14] uppercase leading-none">
              Anshua
            </h1>
            <span className="text-[#FCD34D] font-extrabold text-sm md:text-base leading-none mt-1">$anshua</span>
          </div>
        </div>

        {/* Desktop Quicklinks Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 bg-black/40 px-6 py-2 rounded-full border border-gray-700">
          {navLinks.map((link) => (
             <button 
               key={link.id} 
               onClick={() => scrollTo(link.id)}
               className="font-black italic uppercase text-gray-300 hover:text-[#39FF14] transition-colors text-xs lg:text-sm tracking-wide"
             >
               {link.name}
             </button>
          ))}
        </nav>

        {/* Actions Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 bg-[#39FF14]/10 border border-[#39FF14]/30 px-3 py-1.5 rounded-full text-xs font-bold text-[#39FF14]">
            <Flame className="w-4 h-4 animate-bounce" />
            <span>TOP #1 TRENDING DEX</span>
          </div>

          <a 
            href="https://t.me/anshuaonsol" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-transform shadow-[0_4px_10px_rgba(57,255,20,0.2)]"
            title="Join Anshua Telegram"
          >
            {/* Elegant Telegram Logo */}
            <Send className="w-5 h-5 md:w-6 h-6 text-black fill-black" />
          </a>

          <button 
             className="md:hidden p-2 text-white bg-gray-800/80 rounded-full border border-gray-700"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label="Toggle navigation"
          >
             {mobileMenuOpen ? <CloseIcon className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed top-[80px] left-2 right-2 bg-[#0F172A] border-x-4 border-b-8 border-[#39FF14] z-40 p-5 rounded-2xl shadow-2xl flex flex-col gap-3 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="font-black italic uppercase text-left text-lg text-[#FCD34D] border-b border-gray-800 pb-2 hover:text-[#39FF14] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-2 mt-2 justify-center bg-[#39FF14]/10 p-3 rounded-xl border border-[#39FF14]/40">
              <span className="text-xs font-black text-[#39FF14]">🔥 JOTCHUA TO THE MOON OVER 10M MARKETCAP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 flex flex-col gap-16 md:gap-24 p-4 md:p-8 pt-6 md:pt-12 max-w-7xl mx-auto w-full">

        {/* Global Marquee Bar */}
        <div className="w-full bg-[#39FF14] text-black rounded-2xl border-4 border-white shadow-xl overflow-hidden py-3 shrink-0">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex whitespace-nowrap gap-8 md:gap-12 font-black italic uppercase text-sm sm:text-lg tracking-wide items-center"
          >
            <span>🚨 SOLANA EXPLODING 🚨</span>
            <span>🔥 ANSEM TWEETED JOTCHUA 🔥</span>
            <span>🚀 $anshua MASSIVE BULLRUN 🚀</span>
            <span>📈 DEXSCREENER TOP 1 TRENDING 📈</span>
            <span>🕯️ GOD CANDLES MASSIVE TRANSITION 🕯️</span>
            <span>🔥 $JOTCHUA COIN AT 10M+ MC 🔥</span>
            <span>🐶 ANSHUA MEMECOIN IS BORN 🐶</span>
            <span>🚨 SOLANA EXPLODING 🚨</span>
            <span>🔥 ANSEM TWEETED JOTCHUA 🔥</span>
            <span>🚀 $anshua MASSIVE BULLRUN 🚀</span>
          </motion.div>
        </div>


        {/* 1. Hero & Big Hype Showcase */}
        <section id="hero" className="w-full flex flex-col items-center text-center bg-[#151F32]/80 backdrop-blur-sm rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-white p-6 md:p-12 lg:p-16 shadow-[0_10px_50px_rgba(57,255,20,0.15)] relative scroll-mt-28 overflow-hidden">
          
          {/* Fun Interactive Sticker floating badges */}
          <div className="absolute top-4 left-4 bg-[#FF007F] text-white text-xs sm:text-sm font-black uppercase px-4 py-2 rounded-xl border-2 border-white shadow-md transform -rotate-12 animate-pulse hidden sm:block">
             🔥 Over 10M Marketcap
          </div>
          <div className="absolute top-6 right-6 bg-[#39FF14] text-black text-xs sm:text-sm font-black uppercase px-4 py-2 rounded-xl border-2 border-white shadow-md transform rotate-6 hidden sm:block">
             🟢 Top #1 Trending
          </div>

          <div className="relative group mb-8">
            {/* Multi layered neon glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#39FF14] to-[#FCD34D] rounded-[2.5rem] md:rounded-[3rem] blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>
            
            <motion.img 
               initial={{ scale: 0.8, rotate: -5 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{ type: "spring", stiffness: 200, damping: 10 }}
               src={LOGO_URL} 
               alt="Anshua Cartoon Logo" 
               className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-[2.5rem] md:rounded-[3rem] border-8 border-white relative z-10 shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white uppercase leading-none mb-3 break-words w-full px-2">
            Anshua
          </h1>
          <h2 className="text-[#39FF14] font-black text-3xl sm:text-4xl md:text-5xl mb-8 bg-[#0F172A] px-8 py-3 rounded-2xl inline-block border-4 border-white shadow-[0_4px_20px_rgba(57,255,20,0.3)] -rotate-2">
            $anshua
          </h2>

          <p className="max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl font-bold italic leading-relaxed mb-10 px-4">
            The legendary mutation of the $jotchua meme after Ansem, our supreme crypto KOL prophet, blessed the internet with a single shill tweet. The charts are absolutely melting! 🕯️🚀
          </p>

          {/* CA Box */}
          <div className="bg-[#101726] rounded-2xl md:rounded-3xl p-5 md:p-8 border-4 border-gray-700 shadow-2xl text-white w-full max-w-3xl flex flex-col items-center">
            <h3 className="font-extrabold uppercase tracking-widest text-[#FCD34D] text-sm md:text-lg mb-3 text-center flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#39FF14]" /> OFFICIAL CONTRACT ADDRESS
            </h3>
            
            <div className="w-full bg-black/60 p-4 rounded-xl font-mono text-center text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl break-all border border-gray-800 font-bold mb-4 shadow-inner text-[#39FF14]">
              {CONTRACT_ADDRESS}
            </div>
            
            <button 
              onClick={handleCopy}
              className="w-full max-w-md bg-[#39FF14] text-black py-4 rounded-xl font-black text-base md:text-lg hover:bg-[#FCD34D] transition-colors flex items-center justify-center gap-2 border-b-4 border-green-700 active:translate-y-1 shadow-md"
            >
               {copied ? <><Check className="w-6 h-6 animate-ping"/> CONTRACT COPIED!</> : <><Copy className="w-6 h-6"/> COPY CONTRACT ADDRESS</>}
            </button>
          </div>

          {/* Quick Hype Simulator Counter */}
          <div className="mt-8 flex flex-col items-center bg-black/40 p-4 sm:p-6 rounded-2xl border border-gray-700 max-w-md w-full">
            <p className="text-xs uppercase font-black text-gray-400 tracking-wider mb-2">🔥 HYPE ENGINE INJECTOR</p>
            <div className="w-full bg-gray-900 rounded-full h-4 mb-3 border border-gray-700 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#39FF14] to-[#FCD34D] h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(hypeLevel, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between w-full text-xs font-bold text-gray-400 mb-4">
              <span>Meme Level: Chill</span>
              <span className="text-[#39FF14]">Current Power: {hypeLevel}% {hypeLevel >= 100 ? "🚨 OVER SLAYED" : "🔋 Charging"}</span>
            </div>
            <button 
              onClick={increaseHype} 
              className="px-6 py-2 bg-[#FCD34D] text-black border-2 border-black rounded-lg font-black text-sm uppercase hover:scale-105 active:scale-95 transition-transform"
            >
               💥 Inject God Candle Hype (+10%)
            </button>
          </div>

          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noreferrer"
            className="mt-10 w-full max-w-md bg-[#FF007F] text-white py-5 rounded-3xl font-black text-2xl uppercase hover:bg-[#39FF14] hover:text-black border-b-[6px] border-pink-950 transition-all flex items-center justify-center gap-3 animate-pulse shadow-xl"
          >
            BUY $anshua ON PUMP.FUN <ArrowRight className="w-8 h-8 shrink-0" />
          </a>
        </section>


        {/* 2. White Live DexScreener Chart Section (Hungarian request explicitly asked for a white live chart) */}
        <section id="chart" className="w-full flex flex-col gap-6 scroll-mt-28">
           <div className="flex flex-col items-center text-center">
             <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 px-4 py-2 rounded-full text-xs font-bold text-[#39FF14] mb-3">
               <TrendingUp className="w-4 h-4 text-[#39FF14]" />
               <span>solana/{CONTRACT_ADDRESS}</span>
             </div>
             <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white italic uppercase drop-shadow-[4px_4px_0_#39FF14] px-2 text-center">
               Live White DexScreener Chart 📈
             </h2>
             <p className="text-gray-400 text-sm font-bold mt-2">Currently trending absolute parabolic top 1 chart with real updates</p>
           </div>
           
           {/* White live chart container requested! */}
           <div className="w-full h-[500px] md:h-[650px] bg-white rounded-3xl border-8 border-white p-2 md:p-4 shadow-[0_10px_40px_rgba(255,255,255,0.06)] relative overflow-hidden">
             <iframe 
                title="DexScreener Live Token Chart"
                className="w-full h-full rounded-2xl bg-white"
                src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=light`} 
                frameBorder="0" 
             ></iframe>
           </div>
        </section>





        {/* 4. Origin & Lore Section */}
        <section id="lore" className="bg-white/95 backdrop-blur-sm rounded-3xl md:rounded-[3rem] border-8 border-black p-6 md:p-12 shadow-[12px_12px_0_0_#39FF14] scroll-mt-28">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            <div className="flex-1 text-black">
              <div className="inline-flex items-center gap-2 bg-[#39FF14] text-black px-4 py-1 rounded-full text-xs font-black uppercase mb-4 shadow-sm">
                📖 HISTORIC MOMENTUM
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-[#0B0F19] uppercase italic mb-6 leading-none">
                JOTCHUA COPIED MY STYLE? 🐶
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl font-bold italic text-gray-800 leading-relaxed bg-[#39FF14]/10 p-5 md:p-8 rounded-3xl border-l-8 border-black">
                <p>
                  Look, it began with **$jotchua** absolutely taking off into high cosmos orbit. Top #1 Trending on DexScreener, crossing a jaw-dropping **$10,000,000+ Market Cap**. White cute dog dominance!
                </p>
                <p>
                  Then **Ansem**—the titan, the market maker, the absolute king of CT—posted the ultimate validation: Jotchua in all his pixelated glory.
                </p>
                <p>
                  The community immediately minted **Anshua ($anshua)** to merge Ansem’s colossal king energy with the most viral dog on the internet today. You're not just early; you are at the exact launchpad of the god candle.
                </p>
                
                {/* Warning message from the legend */}
                <div className="mt-8 p-4 bg-black text-white rounded-2xl transform -rotate-1 border-4 border-[#39FF14] text-center shadow-lg">
                  <p className="text-[#39FF14] font-black not-italic uppercase text-base sm:text-lg">
                     IF YOU CAN'T HANDLE PARABOLIC GAINS,
                  </p>
                  <p className="text-[#FCD34D] font-black not-italic uppercase text-lg sm:text-xl">
                     DO NOT LOOK ME IN THE BEANIE! 👑
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center mt-4 lg:mt-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#FF007F] rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <img 
                  src={LOGO_URL} 
                  alt="Famous Anshua Post" 
                  className="w-full max-w-[320px] sm:max-w-md object-cover rounded-3xl border-8 border-black shadow-[12px_12px_0_0_#000] rotate-3 group-hover:rotate-0 transition-transform duration-500" 
                />
              </div>
            </div>

          </div>
        </section>


        {/* 5. Soundboard & Funny Meme Simulators (Adding highly custom theme-fitting items) */}
        <section className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl border-4 border-[#39FF14] p-6 md:p-10 shadow-2xl relative">
          <div className="flex flex-col items-center text-center">
            <span className="sticker mb-4">SOUNDBOARD INSANITY</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase italic tracking-tight mb-2">ANSEM'S HYPE GENERATOR</h3>
            <p className="text-gray-400 text-sm max-w-lg mb-8 font-bold">Click to shout simulated voice clips & hype reactions directly from the trading trenches!</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
              {[
                { label: "🕯️ GOD CANDLE SHOUT", sound: "Melt the charts! Double top is a myth!" },
                { label: "👑 BEANIE CONVICTION", sound: "My bag is fully transitioned into wealth!" },
                { label: "🐕 JOTCHUA WOOF WOOF", sound: "Woof woof! 10M market cap is too tiny!" },
                { label: "🚀 WE ARE SO BACK IN SOL", sound: "Absolute giga chad vibes only!" }
              ].map((m) => (
                <button
                  key={m.label}
                  onClick={() => triggerSoundSim(m.sound)}
                  className="neo-card-yellow p-4 md:p-6 text-center text-black font-black uppercase text-xs md:text-sm tracking-wide cursor-pointer flex flex-col justify-between items-center h-28 md:h-36 active:scale-95 transition-all text-center"
                >
                  <span className="text-sm">{m.label}</span>
                  <div className="bg-black text-[#39FF14] rounded px-2 py-1 text-[9px] font-bold mt-2 font-mono">
                     SIMULATE HYPE
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {soundPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 15 }}
                  className="mt-6 p-4 bg-black border border-[#39FF14] text-[#39FF14] font-black italic rounded-2xl text-base sm:text-xl md:text-2xl tracking-wide max-w-xl shadow-[0_4px_25px_rgba(57,255,20,0.4)]"
                >
                   🔊 Ansem says: "{soundPlaying}"
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>


        {/* 6. Tokenomics */}
        <section id="tokenomics" className="bg-[#111827] rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-white p-6 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] scroll-mt-28 relative">
          <div className="absolute -top-5 md:-top-6 right-4 sm:right-8 md:right-12 bg-[#39FF14] text-black px-4 md:px-6 py-1 md:py-2 rounded-xl font-black italic text-xs sm:text-sm md:text-lg border-2 border-white shadow-lg rotate-3">
             0% SLIPPAGE SURPRISES
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8 text-center">Tokenomics 🪙</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <div className="bg-[#1F2937] border-4 border-[#39FF14] rounded-3xl p-6 text-center hover:-translate-y-2 transition-all shadow-xl">
                <Trophy className="w-10 h-10 text-[#FCD34D] mx-auto mb-3" />
                <h3 className="font-black text-[#FCD34D] text-lg md:text-xl uppercase mb-1">Total Supply</h3>
                <p className="font-black text-2xl sm:text-3xl text-white">1,000,000,000</p>
                <p className="text-[11px] font-bold text-gray-400 mt-2 uppercase">Fully Allocated at Launch</p>
             </div>
             <div className="bg-[#1F2937] border-4 border-[#FCD34D] rounded-3xl p-6 text-center hover:-translate-y-2 transition-all shadow-xl">
                <Star className="w-10 h-10 text-[#39FF14] mx-auto mb-3" />
                <h3 className="font-black text-[#39FF14] text-lg md:text-xl uppercase mb-1">Transaction Fees</h3>
                <p className="font-black text-2xl sm:text-3xl text-white">0% Buy / 0% Sell</p>
                <p className="text-[11px] font-bold text-gray-400 mt-2 uppercase">Pure trading, pure fun</p>
             </div>
             <div className="bg-[#1F2937] border-4 border-white rounded-3xl p-6 text-center hover:-translate-y-2 transition-all shadow-xl">
                <Sparkles className="w-10 h-10 text-[#39FF14] mx-auto mb-3 animate-spin duration-3000" />
                <h3 className="font-black text-white text-lg md:text-xl uppercase mb-1">Security Standards</h3>
                <p className="font-black text-2xl text-white">Mint Revoked</p>
                <p className="text-[11px] font-bold text-gray-400 mt-2 uppercase">100% LP Burned forever</p>
             </div>
          </div>
        </section>


        {/* 7. How to Buy Section (Updated with detailed, beautiful responsive design) */}
        <section id="how-to-buy" className="w-full bg-[#1A1F2C] rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-[#39FF14] p-6 md:p-12 shadow-2xl scroll-mt-28">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic mb-8 md:mb-10 text-center drop-shadow-md">
             How to Buy $anshua 🛒
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             {[
               { step: 1, title: "GET PHANTOM", text: "Download Phantom Extension or Mobile App. Create your safe vault.", color: "bg-[#39FF14] text-black" },
               { step: 2, title: "BUY SOLANA", text: "Buy some SOL natively or send it directly to your cute wallet.", color: "bg-[#FCD34D] text-black" },
               { step: 3, title: "NAVIGATE TO PUMP", text: "Click the buy button to locate $anshua on pump.fun directly.", color: "bg-[#FF007F] text-white" },
               { step: 4, title: "SWAP & SLAY", text: "Trade SOL for $anshua effortlessly. Welcome to the elite tier!", color: "bg-white text-black" }
             ].map((item) => (
               <div key={item.step} className="bg-[#111622] rounded-3xl p-6 border-4 border-gray-700 shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all relative overflow-hidden group">
                  <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center font-black text-2xl shadow-inner border-2 border-white mb-6`}>
                    {item.step}
                  </div>
                  <h4 className="font-black text-xl uppercase mb-3 text-white group-hover:text-[#39FF14] transition-colors">{item.title}</h4>
                  <p className="text-sm font-semibold text-gray-300">{item.text}</p>
               </div>
             ))}
          </div>
        </section>


        {/* 8. Funny Roadmap (Hungarian request explicitly asked for a funny roadmap) */}
        <section id="roadmap" className="w-full bg-white rounded-3xl md:rounded-[3rem] border-8 border-black p-6 md:p-12 shadow-[0_15px_40px_rgba(57,255,20,0.1)] scroll-mt-28 mb-8 relative overflow-hidden">
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black uppercase italic mb-8 md:mb-10 text-center relative z-10 px-2 leading-none">
             THE LEGENDARY ROADMAP 🗺️
          </h2>
          
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto relative z-10 text-black">
             
             <div className="bg-[#111827] text-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-black shadow-[4px_4px_0_0_#39FF14] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.01] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#39FF14] text-black p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 1</h4>
                   <p className="font-bold text-xs uppercase opacity-90 mt-1">THE SIGNAL</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold italic text-gray-100">
                  Ansem tweets Jotchua meme. Absolute mass hysteria. DexScreener trending charts explode on solana. We launch $anshua. 🚀
                </p>
             </div>
             
             <div className="bg-[#111827] text-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-black shadow-[4px_4px_0_0_#39FF14] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.01] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#FCD34D] text-black p-4 rounded-2xl text-center">
                  <h4 className="font-black text-2xl uppercase">Phase 2</h4>
                  <p className="font-bold text-xs uppercase opacity-90 mt-1">THE INFILTRATION</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold italic text-gray-100">
                  Pumpswap listing. Send custom Jotchua hoodies with Ansem's beanie to top 100 CT influencers. Launch the meme-generator online tool! 🎨
                </p>
             </div>

             <div className="bg-[#111827] text-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-black shadow-[4px_4px_0_0_#39FF14] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.01] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#39FF14] text-black p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 3</h4>
                   <p className="font-bold text-xs uppercase opacity-90 mt-1">KINGS OF CRYPTO</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold italic text-gray-100">
                  Secure Coingecko listing. Reach $100M valuation and purchase a massive billboard opposite Ansem’s favorite workspace location for maximum puppy glory! 👑
                </p>
             </div>

             <div className="bg-black text-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-[#39FF14] shadow-[4px_4px_0_0_#FCD34D] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.01] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#FF007F] text-white p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 4</h4>
                   <p className="font-bold text-xs uppercase opacity-90 mt-1">GALAXY RETREAT</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold italic text-[#39FF14]">
                   Ultimate paradise. Jotchua meets space travel. Live stream from the moon of Jotchua sporting a beanie. 🐕🛰️
                </p>
             </div>
          </div>
          
          <div className="mt-12 flex justify-center">
             <img src={LOGO_URL} className="w-20 h-20 rounded-full opacity-35 animate-bounce" alt="Puppy Icon" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[#0B0F19] flex flex-col items-center justify-center p-8 md:p-12 border-t-4 border-[#39FF14] text-center gap-4 mt-12">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Anshua small icon" className="w-8 h-8 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter text-[#39FF14] uppercase leading-none">
            ANSHUA <span className="text-[#FCD34D]">$anshua</span>
          </h2>
        </div>
        <p className="text-gray-400 font-bold italic uppercase tracking-widest text-xs md:text-sm max-w-xl">
          THE MOST SHILLED JOTCHUA HYBRID ON SOLANA. SHILLED BY LORDS. BUILT BY THE CHADS.
        </p>
        <p className="text-gray-600 font-semibold text-[11px] max-w-3xl leading-relaxed mt-4">
          Disclaimer: $anshua is an independent memecoin with absolutely no official affiliation with Ansem, blknoiz06, or any Twitter character. We simply have immense love for the meme-culture, beanies, and god candles. Memecoins carry extreme risk. Don't invest money you can't afford to transform.
        </p>
      </footer>
    </div>
  );
}
