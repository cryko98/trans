import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Award, 
  ArrowUpRight, 
  Flame, 
  Crown, 
  Coffee,
  HelpCircle,
  MessageCircleOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const LOGO_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/tripl.jpg?v=1782931099";

// Hilarious brainrot meme phrases that pop up when clicking the Aura button
const BRAINROT_PHRASES = [
  "MAX AURA LOCKED IN! 👑",
  "ANSEM IS NOW TRIPLEA! 💥",
  "RIP TRIPLET, LONG LIVE TRIPLEA! ☠️",
  "BROWN CANDLE SPOTTED! 💩",
  "SKIBIDI LEVEL 9000 📈",
  "SHEESH! 🗣️",
  "100% BRAIN DAMAGE INBOUND 🧠",
  "NO CAP ON SOLANA 🧢",
  "CREAMY CHOCOLATE GAINS 🍫",
  "AURA +999999 🌟"
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [auraPoints, setAuraPoints] = useState(100);
  const [popups, setPopups] = useState<{ id: number; text: string; x: number; y: number }[]>([]);
  const [showTgAlert, setShowTgAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBoostBrainrot = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAuraPoints(prev => prev + 15);
    
    // Choose a random phrase
    const randomPhrase = BRAINROT_PHRASES[Math.floor(Math.random() * BRAINROT_PHRASES.length)];
    
    // Find absolute/relative positioning for the spawn
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    
    // Random position around the button area
    const randomX = Math.random() * 80 - 40; 
    const randomY = -50 - Math.random() * 30;

    setPopups(prev => [...prev, {
      id,
      text: randomPhrase,
      x: randomX,
      y: randomY
    }]);

    // Cleanup popup
    setTimeout(() => {
      setPopups(prev => prev.filter(item => item.id !== id));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#160c07] text-[#fbf3ec] font-sans relative overflow-x-hidden selection:bg-[#cca43b] selection:text-black">
      
      {/* Absolute warm/muddy brainrot grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#361f12_1px,transparent_1px),linear-gradient(to_bottom,#361f12_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_75%,transparent_100%)] opacity-25 pointer-events-none"></div>

      {/* Decorative ambient blurred vector orbs - warm brown, gold & caramel */}
      <div className="absolute top-[8%] left-[5%] w-[180px] sm:w-[350px] h-[180px] sm:h-[350px] bg-[#cca43b] rounded-full blur-[100px] sm:blur-[180px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute top-[35%] right-[5%] w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-[#633c20] rounded-full blur-[120px] sm:blur-[220px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[#b57a4c] rounded-full blur-[90px] sm:blur-[160px] opacity-15 pointer-events-none"></div>

      {/* Notification banner for Telegram (Coming Soon) */}
      <AnimatePresence>
        {showTgAlert && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-4 right-4 z-[9999] max-w-md mx-auto bg-[#361f12] text-[#fbf3ec] border-4 border-[#cca43b] shadow-[8px_8px_0px_0px_#160c07] p-4 rounded-2xl flex flex-col gap-2"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#cca43b]/20 rounded-xl text-[#cca43b]">
                <MessageCircleOff className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm uppercase tracking-wide text-[#cca43b]">Telegram is Cooking!</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  The Telegram link is currently empty! Our brainrot angels are working in the background to bring you the purest $TripleA channel. Get ready!
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowTgAlert(false)}
              className="mt-2 self-end bg-[#cca43b] hover:bg-[#b57a4c] text-black px-4 py-1.5 rounded-xl text-xs font-black uppercase transition-colors"
            >
              Got it, can't wait! 💩
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar header */}
      <header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between border-b border-[#361f12]">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#cca43b] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img 
              src={LOGO_URL} 
              alt="TripleA Mascot Logo" 
              className="w-12 h-12 rounded-2xl border-2 border-[#fbf3ec] object-cover relative z-10" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#fbf3ec] leading-none font-display">
              TripleA
            </span>
            <span className="text-xs font-bold text-[#cca43b] tracking-widest mt-1">$TripleA</span>
          </div>
        </div>

        {/* Telegram & Contract Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => setShowTgAlert(true)}
            className="flex items-center gap-2 bg-[#cca43b]/10 hover:bg-[#cca43b]/20 text-[#cca43b] px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border border-[#cca43b]/30 transition-all duration-200"
            title="Telegram (Coming Soon)"
          >
            <Send className="w-4 h-4 text-[#cca43b]" />
            <span>Telegram (Soon)</span>
          </button>

          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#cca43b] hover:bg-[#b57a4c] text-black px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black border border-white/20 transition-all duration-200 shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy CA</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Marquee Bar of pure brainrot hype */}
      <div className="w-full bg-[#cca43b] text-black border-y-2 border-[#fbf3ec] overflow-hidden py-2.5 z-10 relative">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 font-black italic uppercase text-xs sm:text-sm tracking-widest"
        >
          <span>💩 ANSEM IS THE CAPTAIN NOW 💩</span>
          <span>👑 RIP TRIPLET - WELCOME TRIPLEA 👑</span>
          <span>📈 MAXIMUM BROWN CANDLE POWER 📈</span>
          <span>🔥 MAX AURA BRAINROT DETECTED 🔥</span>
          <span>🚀 BYE BYE TRIPLET, HELLO TRIPLEA 🚀</span>
          <span>💩 ANSEM IS THE CAPTAIN NOW 💩</span>
          <span>👑 RIP TRIPLET - WELCOME TRIPLEA 👑</span>
          <span>📈 MAXIMUM BROWN CANDLE POWER 📈</span>
          <span>🔥 MAX AURA BRAINROT DETECTED 🔥</span>
          <span>🚀 BYE BYE TRIPLET, HELLO TRIPLEA 🚀</span>
        </motion.div>
      </div>

      {/* Beautiful Hero content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col items-center">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Story */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-[#cca43b]/10 border border-[#cca43b]/30 px-3 py-1.5 rounded-full text-xs font-bold text-[#cca43b] mb-6">
              <Crown className="w-4 h-4 text-[#cca43b] animate-bounce" />
              <span>THE ULTIMATE BRAINROT MOVEMENT OF 2026</span>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-normal leading-tight md:leading-[0.95] mb-6 font-display">
              TripleA <br />
              <span className="text-[#cca43b] drop-shadow-[0_0_15px_rgba(204,164,59,0.3)]">Ansem</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#b57a4c] uppercase tracking-wide mb-6 font-comic">
              Ticker: $TripleA
            </h2>

            {/* Story / Lore box - Explaining the new Brainrot role */}
            <div className="bg-[#361f12]/90 border-2 border-[#633c20] p-6 sm:p-8 rounded-3xl mb-8 max-w-2xl relative shadow-2xl">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#cca43b] text-black px-3 py-0.5 rounded-md text-xs font-black uppercase tracking-widest">
                LORE / STORY
              </div>
              
              <div className="space-y-4">
                <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-[#fbf3ec]">
                  "Ansem has officially taken over the role of the most famous brainrot, and now he is TripleA instead of TripleT!"
                </p>
                
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  The crown has been passed. TripleT was fun, but Ansem just unlocked his maximum degenerate capability. With 100% pure aura, zero thoughts behind those eyes, and a legendary brownish aesthetic, TripleA is the absolute king of CT brainrot.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#633c20]">
                <Coffee className="w-4 h-4 text-[#cca43b]" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                  — Official Brainrot Decree
                </span>
              </div>
            </div>

            {/* Contract Address Component */}
            <div className="w-full max-w-md bg-[#361f12] rounded-2xl border border-[#633c20] p-5 shadow-lg flex flex-col gap-3 mb-8">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block text-center lg:text-left">
                CONTRACT ADDRESS (CA)
              </span>
              <div className="flex items-center gap-2 bg-black/60 p-3 rounded-xl border border-[#160c07]">
                <code className="text-[11px] sm:text-xs font-mono font-bold text-[#cca43b] truncate flex-1 select-all">
                  {CONTRACT_ADDRESS}
                </code>
                <button 
                  onClick={handleCopy}
                  className="bg-[#cca43b] hover:bg-[#b57a4c] text-black p-2 rounded-lg transition-colors shrink-0"
                  title="Copy CA"
                >
                  {copied ? <Check className="w-4 h-4 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Interactive Brainrot Boost Spawner */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md relative">
              <button 
                onClick={handleBoostBrainrot}
                className="w-full bg-[#cca43b] hover:bg-[#b57a4c] text-black py-4 px-6 rounded-2xl font-black text-lg uppercase tracking-tight border-b-4 border-[#784f33] active:translate-y-1 active:border-b-0 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(204,164,59,0.3)] cursor-pointer"
              >
                <span>💩 BOOST BRAINROT</span>
                <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full font-bold">
                  {auraPoints}% Aura
                </span>
              </button>

              <a 
                href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent hover:bg-white/5 text-white py-4 px-6 rounded-2xl font-bold text-center border-2 border-[#361f12] hover:border-[#633c20] transition-colors uppercase text-sm tracking-wide flex items-center justify-center gap-1"
              >
                <span>Buy On Pump.fun</span>
                <ArrowUpRight className="w-4 h-4 text-[#cca43b]" />
              </a>

              {/* Falling/Floating Brainrot effects spawn area */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                <AnimatePresence>
                  {popups.map(popup => (
                    <motion.div
                      key={popup.id}
                      initial={{ opacity: 0, scale: 0.5, y: 0 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.2, 1.2, 0.8], y: popup.y }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute text-[#cca43b] font-black text-xs sm:text-sm font-comic drop-shadow-md whitespace-nowrap bg-[#361f12] border border-[#cca43b]/40 py-1 px-2.5 rounded-lg"
                      style={{ 
                        left: `calc(50% + ${popup.x}px)`,
                      }}
                    >
                      {popup.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md">
              
              {/* Vibrant neon chocolate lighting card frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#cca43b] to-[#b57a4c] rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#361f12] p-3 rounded-[2rem] border-4 border-[#fbf3ec]/90 shadow-2xl overflow-hidden group">
                <motion.img 
                  initial={{ rotate: 2, scale: 0.95 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  src={LOGO_URL} 
                  className="w-full h-auto object-cover rounded-[1.5rem] select-none hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  alt="TripleA Mascot"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md border border-[#cca43b]/30 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-extrabold text-[#cca43b] uppercase tracking-wider">BRAINROT STAGE</span>
                    <span className="text-sm font-black text-[#fbf3ec]">Max Aura Unlocked 👑</span>
                  </div>
                  <div className="bg-[#cca43b] text-black px-3 py-1.5 rounded-lg text-xs font-black uppercase">
                    100% DEGEN
                  </div>
                </div>
              </div>

              {/* Little stickers & badges floating */}
              <div className="absolute -top-4 -right-4 bg-[#633c20] text-[#fbf3ec] text-[11px] font-black uppercase px-3 py-1.5 rounded-xl border-2 border-[#fbf3ec] shadow-lg rotate-12">
                 TRIPLEA 🔥
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#cca43b] text-black text-[11px] font-black uppercase px-3 py-1.5 rounded-xl border-2 border-black shadow-lg -rotate-12 flex items-center gap-1">
                 <Award className="w-3.5 h-3.5" />
                 <span>AURA SUPREME</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Quick Badges Section */}
        <section className="w-full mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#361f12]/40 border border-[#633c20]/60 p-6 rounded-2xl flex items-center gap-4 hover:border-[#cca43b]/40 transition-colors">
            <div className="w-12 h-12 bg-[#cca43b]/10 rounded-xl flex items-center justify-center border border-[#cca43b]/20 shrink-0">
              <TrendingUp className="w-6 h-6 text-[#cca43b]" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-[#fbf3ec] tracking-tight">BRAINROT APPROVED</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">Ansem takes the stage. Say goodbye to TripleT once and for all.</p>
            </div>
          </div>

          <div className="bg-[#361f12]/40 border border-[#633c20]/60 p-6 rounded-2xl flex items-center gap-4 hover:border-[#cca43b]/40 transition-colors">
            <div className="w-12 h-12 bg-[#b57a4c]/10 rounded-xl flex items-center justify-center border border-[#b57a4c]/20 shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#b57a4c]" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-[#fbf3ec] tracking-tight">BROWN CANDLES ONLY</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">100% custom shitpost aesthetic with chocolatey golden vibes.</p>
            </div>
          </div>

          <div className="bg-[#361f12]/40 border border-[#633c20]/60 p-6 rounded-2xl flex items-center gap-4 hover:border-[#cca43b]/40 transition-colors">
            <div className="w-12 h-12 bg-[#cca43b]/10 rounded-xl flex items-center justify-center border border-[#cca43b]/20 shrink-0">
              <Award className="w-6 h-6 text-[#cca43b]" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-[#fbf3ec] tracking-tight">MAX DEGENTRALIZED</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">No taxes, no brain cells, pure raw meme power straight on Solana.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[#110905] py-12 border-t border-[#361f12] text-center flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="TripleA small icon" className="w-8 h-8 rounded-full object-cover border border-[#cca43b]/40" />
          <span className="text-lg font-black tracking-tight uppercase text-[#fbf3ec] font-display">
            TripleA ($TripleA)
          </span>
        </div>
        <p className="text-gray-500 text-xs max-w-xl px-4 leading-relaxed font-medium">
          Disclaimer: $TripleA is a meme coin built strictly for entertainment. Celebrating the absolute brainrot of CT culture and the glorious Ansem takeover of the legendary internet crown. No financial expectations. Trade at your own risk.
        </p>
      </footer>
    </div>
  );
}
