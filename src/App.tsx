import React, { useState } from 'react';
import { Copy, Check, Send, Sparkles, TrendingUp, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTRACT_ADDRESS = "5dH6jqGqfhaxKi2Ynq4woDaXis3Vf8hnasDfUokDpump";
const LOGO_URL = "https://cdn.shopify.com/s/files/1/0967/8087/8151/files/ChatGPT_Image_2026._jul._1._20_15_22.png?v=1782926157";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [bullCount, setBullCount] = useState(100);
  const [showCandle, setShowCandle] = useState<number[]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerBullishPump = () => {
    setBullCount(prev => prev + 15);
    // Spawn a temporary green candle effect
    const id = Date.now();
    setShowCandle(prev => [...prev, id]);
    setTimeout(() => {
      setShowCandle(prev => prev.filter(item => item !== id));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#060A13] text-white font-sans relative overflow-x-hidden selection:bg-[#39FF14] selection:text-black">
      
      {/* Absolute futuristic grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_75%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Decorative ambient blurred vector orbs */}
      <div className="absolute top-[10%] left-[5%] w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] bg-[#39FF14] rounded-full blur-[100px] sm:blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[5%] w-[180px] sm:w-[400px] h-[180px] sm:h-[400px] bg-[#FCD34D] rounded-full blur-[120px] sm:blur-[220px] opacity-10 pointer-events-none"></div>

      {/* Navbar header */}
      <header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between border-b border-gray-800/60">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#39FF14] rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img 
              src={LOGO_URL} 
              alt="Ansem Wif Bull Logo" 
              className="w-12 h-12 rounded-2xl border-2 border-white object-cover relative z-10" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black uppercase tracking-tight text-white leading-none">
              Ansem Wif Bull
            </span>
            <span className="text-xs font-bold text-[#39FF14] tracking-widest mt-1">$wifbull</span>
          </div>
        </div>

        {/* Telegram & Contract Actions */}
        <div className="flex items-center gap-3">
          <a 
            href="https://t.me/ansemwifbull" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border border-[#39FF14]/30 transition-all duration-200"
            title="Join Telegram"
          >
            <Send className="w-4 h-4 text-[#39FF14] fill-[#39FF14]/20" />
            <span className="hidden sm:inline">Telegram</span>
          </a>

          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border border-[#39FF14]/30 transition-all duration-200"
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

      {/* Marquee Bar of pure hype */}
      <div className="w-full bg-[#39FF14] text-black border-y-2 border-white overflow-hidden py-2 z-10 relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 font-black italic uppercase text-xs sm:text-sm tracking-widest"
        >
          <span>🔥 ANSEM WIF BULL HAT 🔥</span>
          <span>📈 THE BULLISH SEASON IS UPON US 📈</span>
          <span>🚀 MEET ANSEM WIF A HAT 🚀</span>
          <span>🕯️ GOD CANDLES ACTIVATED 🕯️</span>
          <span>📈 $wifbull COIN LAUNCH 📈</span>
          <span>🔥 ANSEM WIF BULL HAT 🔥</span>
          <span>📈 THE BULLISH SEASON IS UPON US 📈</span>
          <span>🚀 MEET ANSEM WIF A HAT 🚀</span>
          </motion.div>
      </div>

      {/* Beautiful Hero content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col items-center">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Story */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 px-3 py-1.5 rounded-full text-xs font-bold text-[#39FF14] mb-6">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>THE COOLEST HAT ON SOLANA</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-tight mb-4">
              Ansem Wif <br />
              <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">Bull Hat</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#FCD34D] uppercase tracking-wide mb-6">
              Ticker: $wifbull
            </h2>

            {/* Simple requested Story: "Ansem with a bull hat looks bullish. Meet Ansem wif a hat!" */}
            <div className="bg-gray-900/80 border border-gray-800 p-6 sm:p-8 rounded-3xl mb-8 max-w-2xl relative shadow-2xl">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#39FF14] text-black px-3 py-0.5 rounded-md text-xs font-black uppercase tracking-widest">
                LORE
              </div>
              <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-gray-300">
                "Ansem with a bull hat looks bullish. Meet Ansem wif a hat!"
              </p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mt-4">
                — Verified Solana Wisdom
              </p>
            </div>

            {/* Contract Address Component */}
            <div className="w-full max-w-md bg-[#0F172A] rounded-2xl border border-gray-800 p-5 shadow-lg flex flex-col gap-3 mb-8">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block text-center lg:text-left">
                CONTRACT ADDRESS (CA)
              </span>
              <div className="flex items-center gap-2 bg-black/60 p-3 rounded-xl border border-gray-900">
                <code className="text-[11px] sm:text-xs font-mono font-bold text-[#39FF14] truncate flex-1 select-all">
                  {CONTRACT_ADDRESS}
                </code>
                <button 
                  onClick={handleCopy}
                  className="bg-[#39FF14] hover:bg-[#FCD34D] text-black p-2 rounded-lg transition-colors shrink-0"
                  title="Copy CA"
                >
                  {copied ? <Check className="w-4 h-4 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Interactive Bullish Candle Spawner! */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <button 
                onClick={triggerBullishPump}
                className="w-full bg-[#39FF14] hover:bg-[#FCD34D] text-black py-4 px-6 rounded-2xl font-black text-lg uppercase tracking-tight border-b-4 border-green-800 active:translate-y-1 active:border-b-0 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(57,255,20,0.3)] cursor-pointer"
              >
                <span>🐂 PUMP THE BULL</span>
                <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full font-bold">
                  {bullCount}%
                </span>
              </button>

              <a 
                href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent hover:bg-white/5 text-white py-4 px-6 rounded-2xl font-bold text-center border-2 border-gray-800 hover:border-gray-600 transition-colors uppercase text-sm tracking-wide flex items-center justify-center gap-1"
              >
                <span>Buy On Pump.fun</span>
                <ArrowUpRight className="w-4 h-4 text-[#39FF14]" />
              </a>
            </div>

            {/* Floating green candles animation container */}
            <div className="h-12 relative w-full overflow-hidden mt-2">
              <AnimatePresence>
                {showCandle.map((id, index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 1, 0], y: -50, scale: [0.8, 1.2, 1.2, 0.8] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute text-emerald-400 font-extrabold text-sm flex items-center gap-1"
                    style={{ left: `${(index * 30) % 70 + 15}%` }}
                  >
                    <TrendingUp className="w-4 h-4 text-[#39FF14]" />
                    <span>GREEN CANDLE +15% BULLISH!</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md">
              
              {/* Vibrant neon lighting card frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#39FF14] to-[#FCD34D] rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#0F172A] p-3 rounded-[2rem] border-4 border-white/90 shadow-2xl overflow-hidden group">
                <motion.img 
                  initial={{ rotate: 2, scale: 0.95 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  src={LOGO_URL} 
                  className="w-full h-auto object-cover rounded-[1.5rem] select-none hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  alt="Ansem Wif Bull Mascot"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-[#39FF14] uppercase tracking-wider">Status</span>
                    <span className="text-sm font-black text-white">Extremely Bullish 🐂</span>
                  </div>
                  <div className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-black uppercase">
                    100% SOL
                  </div>
                </div>
              </div>

              {/* Little stickers & badges floating */}
              <div className="absolute -top-4 -right-4 bg-[#FF007F] text-white text-[11px] font-black uppercase px-3 py-1.5 rounded-xl border-2 border-white shadow-lg rotate-12">
                 WIF HAT 👑
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#FCD34D] text-black text-[11px] font-black uppercase px-3 py-1.5 rounded-xl border-2 border-white shadow-lg -rotate-12 flex items-center gap-1">
                 <Award className="w-3.5 h-3.5" />
                 <span>Bull Run 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Quick Badges Section */}
        <section className="w-full mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center border border-[#39FF14]/20 shrink-0">
              <TrendingUp className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white tracking-tight">SOLANA NATIVE</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">Built on the fastest blockchain of CT legends.</p>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FCD34D]/10 rounded-xl flex items-center justify-center border border-[#FCD34D]/20 shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#FCD34D]" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white tracking-tight">0% SURPRISES</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">Mint fully revoked, community-vibe first.</p>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20 shrink-0">
              <Award className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white tracking-tight">ANSEM APPROVED</h3>
              <p className="text-xs font-medium text-gray-400 mt-0.5">The hat stays on during the ultimate run.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[#03060B] py-12 border-t border-gray-900 text-center flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Ansem Wif Bull small icon" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-lg font-black tracking-tight uppercase text-white">
            Ansem Wif Bull
          </span>
        </div>
        <p className="text-gray-500 text-xs max-w-xl px-4 leading-relaxed font-medium">
          Disclaimer: $wifbull is an entertainment-centric memecoin celebrating the legendary CT culture, beanies, and bull hats. We have no affiliation with any individual. Memecoins are highly experimental and volatile. Only trade what you are willing to send to the cosmos.
        </p>
      </footer>
    </div>
  );
}
