import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Menu, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxx";
const LOGO_URL = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/werld/photo_2026-06-02_00-07-40.jpg";
const ABOUT_URL = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/werld/photo_2026-06-02_00-08-30.jpg";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Chart', id: 'chart' },
    { name: 'Lore', id: 'lore' },
    { name: 'Tokenomics', id: 'tokenomics' },
    { name: 'How to Buy', id: 'how-to-buy' },
    { name: 'Roadmap', id: 'roadmap' },
  ];

  return (
    <div className="min-h-screen bg-[#5BCEFA] font-sans relative border-x-[8px] md:border-x-[16px] border-[#F5A9B8]">
      {/* Background Gradient Layer */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-0" 
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #F5A9B8 0, #F5A9B8 20px, #ffffff 20px, #ffffff 40px, #5BCEFA 40px, #5BCEFA 60px)" }}
      ></div>
      
      {/* Navbar Options */}
      <header className="sticky top-0 h-[80px] md:h-[100px] shrink-0 bg-white border-b-8 border-[#F5A9B8] flex items-center justify-between px-4 md:px-8 z-50 shadow-md">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => scrollTo('hero')}>
          <img src={LOGO_URL} alt="Transformers Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#5BCEFA] shadow-sm" />
          <div className="flex flex-col hidden sm:flex">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter text-[#F5A9B8] uppercase leading-none">Transformers</h1>
            <span className="text-[#5BCEFA] font-bold text-lg md:text-xl leading-none mt-1">$TRANS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
             <button 
               key={link.id} 
               onClick={() => scrollTo(link.id)}
               className="font-black italic uppercase text-[#5BCEFA] hover:text-[#F5A9B8] transition-colors text-lg"
             >
               {link.name}
             </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-center">
          <div className="hidden lg:block bg-[#F5A9B8] text-white p-2 md:p-3 rounded-xl border-b-4 border-pink-600 font-black animate-pulse text-xs md:text-base">
            PUMP.FUN LIVE
          </div>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-md"
          >
            {/* New X Logo */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6 fill-white">
               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <button 
             className="md:hidden p-2 text-black"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             {mobileMenuOpen ? <CloseIcon className="w-8 h-8"/> : <Menu className="w-8 h-8"/>}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[80px] left-[8px] right-[8px] bg-white border-b-8 border-x-4 border-[#5BCEFA] z-40 p-4 shadow-xl flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="font-black italic uppercase text-left text-xl text-[#F5A9B8] border-b-2 border-gray-100 pb-2"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 flex flex-col gap-12 md:gap-24 p-4 md:p-8 pt-6 md:pt-12 max-w-7xl mx-auto w-full">

        {/* Marquee Header */}
        <div className="w-full bg-[#F5A9B8] text-white rounded-2xl border-4 border-white shadow-lg overflow-hidden py-3 shrink-0">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex whitespace-nowrap gap-6 md:gap-10 font-black italic uppercase text-sm sm:text-lg md:text-xl tracking-wide items-center"
          >
            <span>🏳️‍⚧️ AUTOBOTS ROLL OUT 🏳️‍⚧️</span>
            <span>$TRANS TO THE MOON</span>
            <span>HITTING PUMP.FUN 🚀</span>
            <span>MORE THAN MEETS THE EYE ✨</span>
            <span>🏳️‍⚧️ AUTOBOTS ROLL OUT 🏳️‍⚧️</span>
            <span>$TRANS TO THE MOON</span>
            <span>HITTING PUMP.FUN 🚀</span>
            <span>MORE THAN MEETS THE EYE ✨</span>
            <span>🏳️‍⚧️ AUTOBOTS ROLL OUT 🏳️‍⚧️</span>
            <span>$TRANS TO THE MOON</span>
            <span>HITTING PUMP.FUN 🚀</span>
            <span>MORE THAN MEETS THE EYE ✨</span>
          </motion.div>
        </div>

        {/* 1. Hero Section */}
        <section id="hero" className="w-full flex flex-col items-center text-center bg-white rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-[#5BCEFA] p-6 lg:p-16 shadow-[8px_8px_0_0_#F5A9B8] md:shadow-[16px_16px_0_0_#F5A9B8] relative scroll-mt-32 overflow-hidden">
          <motion.img 
             initial={{ scale: 0.5, rotate: -5 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", stiffness: 200, damping: 10 }}
             src={LOGO_URL} 
             alt="$TRANS Logo" 
             className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-[#F5A9B8] shadow-inner mb-6 md:mb-8 bg-blue-50"
          />
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-[#F5A9B8] uppercase leading-none mb-3 md:mb-4 drop-shadow-md break-words w-full px-2">
            Transformers
          </h1>
          <h2 className="text-[#5BCEFA] font-black text-2xl sm:text-3xl md:text-5xl mb-8 md:mb-12 bg-white px-6 md:px-8 py-2 md:py-3 rounded-2xl inline-block border-4 border-[#5BCEFA] shadow-[4px_4px_0_0_#F5A9B8] md:shadow-[8px_8px_0_0_#F5A9B8] -rotate-2">
            $TRANS
          </h2>

          <div className="bg-[#5BCEFA] rounded-2xl md:rounded-3xl p-4 md:p-6 border-4 border-white shadow-xl text-white w-full max-w-3xl flex flex-col items-center">
            <h3 className="font-black uppercase italic text-lg md:text-2xl mb-3 md:mb-4 text-center">Contract Address</h3>
            <div className="w-full bg-white/20 p-3 md:p-4 rounded-xl font-mono text-xs sm:text-sm md:text-lg lg:text-xl break-all border border-white/40 font-bold mb-4 shadow-inner text-center">
              {CONTRACT_ADDRESS}
            </div>
            <button 
              onClick={handleCopy}
              className="w-full max-w-md bg-white text-[#5BCEFA] py-4 rounded-xl font-black text-lg hover:bg-[#F5A9B8] hover:text-white transition-colors flex items-center justify-center gap-2 border-b-4 border-gray-200 hover:border-pink-600 shadow-sm"
            >
               {copied ? <><Check className="w-6 h-6"/> CA COPIED SECURELY</> : <><Copy className="w-6 h-6"/> COPY CONTRACT ADDRESS</>}
            </button>
          </div>

          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noreferrer"
            className="mt-8 md:mt-12 w-full max-w-md bg-[#F5A9B8] text-white py-4 md:py-6 rounded-2xl font-black text-xl sm:text-2xl md:text-3xl uppercase hover:bg-[#5BCEFA] border-b-[6px] md:border-b-8 border-pink-700 hover:border-blue-600 transition-all flex items-center justify-center gap-2 md:gap-3 animate-bounce shadow-xl px-4 text-center"
          >
            BUY ON PUMP.FUN <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0" />
          </a>
        </section>

        {/* 2. Chart Section */}
        <section id="chart" className="w-full flex flex-col gap-4 md:gap-6 scroll-mt-32">
           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase drop-shadow-[4px_4px_0_#F5A9B8] text-center px-2">
             Live Chart 📈
           </h2>
           <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-[#F5A9B8] p-2 md:p-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] md:shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]">
             <iframe 
                title="DexScreener Chart"
                className="w-full h-full rounded-2xl"
                src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=light`} 
                frameBorder="0" 
             ></iframe>
           </div>
        </section>

        {/* 3. Tokenomics */}
        <section id="tokenomics" className="w-full bg-white rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-[#5BCEFA] p-6 md:p-12 shadow-[8px_8px_0_0_#F5A9B8] md:shadow-[16px_16px_0_0_#F5A9B8] scroll-mt-32 relative mt-4">
          <div className="absolute -top-5 md:-top-6 right-4 sm:right-8 md:right-16 bg-[#F5A9B8] text-white px-4 md:px-6 py-1 md:py-2 rounded-xl font-black italic text-sm sm:text-base md:text-xl border-4 border-white shadow-md rotate-3">
             NO TAX BS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#5BCEFA] uppercase italic mb-6 md:mb-8 text-center mt-2">Tokenomics 🪙</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <div className="bg-[#5BCEFA]/10 border-4 border-[#5BCEFA] rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform shadow-sm">
                <h3 className="font-black text-[#5BCEFA] text-xl md:text-2xl uppercase mb-2">Total Supply</h3>
                <p className="font-black text-3xl md:text-4xl text-gray-800">1,000,000,000</p>
                <p className="text-sm font-bold text-gray-500 mt-2 uppercase">Autobots ready</p>
             </div>
             <div className="bg-[#F5A9B8]/10 border-4 border-[#F5A9B8] rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform shadow-sm">
                <h3 className="font-black text-[#F5A9B8] text-xl md:text-2xl uppercase mb-2">Taxes</h3>
                <p className="font-black text-3xl md:text-4xl text-gray-800">0 / 0</p>
                <p className="text-sm font-bold text-gray-500 mt-2 uppercase">Buy & Sell Free</p>
             </div>
             <div className="bg-white border-4 border-[#5BCEFA] rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform shadow-md">
                <h3 className="font-black text-black text-xl md:text-2xl uppercase mb-2">Liquidity & Contract</h3>
                <p className="font-black text-xl md:text-2xl text-gray-800 mb-1">🔥 LP Burned</p>
                <p className="font-black text-xl md:text-2xl text-gray-800">🔒 Mint Revoked</p>
             </div>
          </div>
        </section>

        {/* 4. Lore Section */}
        <section id="lore" className="w-full bg-white/90 backdrop-blur-sm rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-[#F5A9B8] p-6 md:p-12 shadow-[8px_8px_0_0_#5BCEFA] md:shadow-[16px_16px_0_0_#5BCEFA] scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1 w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#F5A9B8] uppercase italic mb-6">The Lore 📖</h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl font-bold italic text-gray-800 leading-relaxed bg-[#F5A9B8]/10 p-5 md:p-8 rounded-2xl md:rounded-3xl border-l-4 md:border-l-8 border-[#F5A9B8] text-left">
                <p>More than meets the eye? Honey, we are WAY more. 💅</p>
                <p>The Autobots used to be stuck in a binary world. 0s and 1s? Gross! One day, Optimus turned the Matrix of Leadership into the Matrix of Slay-ership. 
                We threw away the rusty old binary gears and got some fabulous upgrades.</p>
                <p>Now we rolling out, and we rolling out PROUD! Join the $TRANS movement on Solana, where every bot is valid, every transition is smooth, and every pump is absolutely fabulous.</p>
                <div className="mt-8 p-4 bg-black text-white rounded-2xl transform -rotate-1 border-4 border-[#5BCEFA] text-center shadow-lg">
                  <p className="text-[#F5A9B8] font-black not-italic uppercase text-xl md:text-2xl">DECEPTICONS ARE SO BASIC.</p>
                  <p className="text-[#5BCEFA] font-black not-italic uppercase text-xl md:text-2xl">WE ARE ICONS.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center mt-4 lg:mt-0">
              <img 
                src={ABOUT_URL} 
                alt="$TRANS Autobots Story" 
                className="w-[80%] sm:w-full max-w-[280px] sm:max-w-md lg:max-w-lg object-cover rounded-2xl md:rounded-3xl border-4 md:border-8 border-[#5BCEFA] shadow-[8px_8px_0_0_#F5A9B8] md:shadow-[12px_12px_0_0_#F5A9B8] rotate-2 hover:rotate-0 transition-transform duration-500" 
              />
            </div>
          </div>
        </section>

        {/* 5. How to Buy Section */}
        <section id="how-to-buy" className="w-full bg-[#5BCEFA] rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-white p-6 md:p-12 shadow-2xl scroll-mt-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic mb-8 md:mb-10 text-center drop-shadow-md px-2">How to Buy $TRANS 🛒</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             {[
               { step: 1, title: "GET WALLET", text: "Download Phantom Extension. It's giving cute ghost vibes.", color: "bg-white text-[#5BCEFA]" },
               { step: 2, title: "GET SOL", text: "Buy some SOL. Beg, borrow, or bridge it babes.", color: "bg-[#F5A9B8] text-white" },
               { step: 3, title: "PUMP.FUN", text: "Go to pump.fun via our buy link. Connect that wallet.", color: "bg-white text-[#F5A9B8]" },
               { step: 4, title: "SWAP SOON", text: "Trade SOL for $TRANS. Welcome to the Cybertron pride!", color: "bg-black text-white" }
             ].map((item) => (
               <div key={item.step} className="bg-white rounded-3xl p-6 border-4 border-[#F5A9B8] shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center font-black text-3xl shadow-inner border-4 border-gray-100 mb-6`}>
                    {item.step}
                  </div>
                  <h4 className="font-black text-2xl uppercase mb-3 text-black">{item.title}</h4>
                  <p className="text-base font-bold text-gray-600">{item.text}</p>
               </div>
             ))}
          </div>
        </section>

        {/* 6. Roadmap Section */}
        <section id="roadmap" className="w-full bg-white rounded-3xl md:rounded-[3rem] border-4 md:border-8 border-[#F5A9B8] p-6 md:p-12 shadow-[8px_8px_0_0_#5BCEFA] md:shadow-[16px_16px_0_0_#5BCEFA] scroll-mt-32 mb-8 md:mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BCEFA] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5A9B8] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#F5A9B8] uppercase italic mb-8 md:mb-10 text-center relative z-10 px-2">The Fabulous Roadmap 🗺️</h2>
          
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto relative z-10">
             <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-[#5BCEFA] shadow-[4px_4px_0_0_#5BCEFA] md:shadow-[8px_8px_0_0_#5BCEFA] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.02] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#5BCEFA] text-white p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 1</h4>
                   <p className="font-bold text-sm uppercase opacity-90 mt-1">The Transition</p>
                </div>
                <p className="text-lg md:text-xl font-bold italic text-gray-700">Realize we are more than meets the eye. Fair launch on pump.fun. Vibe checks initiated.</p>
             </div>
             
             <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-[#F5A9B8] shadow-[4px_4px_0_0_#F5A9B8] md:shadow-[8px_8px_0_0_#F5A9B8] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.02] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#F5A9B8] text-white p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 2</h4>
                   <p className="font-bold text-sm uppercase opacity-90 mt-1">Hormonal Bullrun</p>
                </div>
                <p className="text-lg md:text-xl font-bold italic text-gray-700">Trans-ition our portfolios. Raydium listing. Spread the meme across X. Reach millions.</p>
             </div>

             <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-[#5BCEFA] shadow-[4px_4px_0_0_#5BCEFA] md:shadow-[8px_8px_0_0_#5BCEFA] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.02] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-[#5BCEFA] text-white p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 3</h4>
                   <p className="font-bold text-sm uppercase opacity-90 mt-1">Cybertron Reclaimed</p>
                </div>
                <p className="text-lg md:text-xl font-bold italic text-gray-700">Flip the Decepticons (they are literally so basic and boring). DEX updates. CEX targets.</p>
             </div>

             <div className="bg-gray-900 p-5 md:p-8 rounded-2xl md:rounded-3xl border-4 border-white shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000] flex flex-col sm:flex-row items-center gap-4 md:gap-6 transform hover:scale-[1.02] transition-transform text-center sm:text-left">
                <div className="w-full sm:w-48 shrink-0 bg-white text-black p-4 rounded-2xl text-center">
                   <h4 className="font-black text-2xl uppercase">Phase 4</h4>
                   <p className="font-bold text-sm uppercase opacity-90 mt-1">Moon Transition</p>
                </div>
                <p className="text-lg md:text-xl font-bold italic text-[#F5A9B8]">Cybertron Pride Parade. Everyone is valid and wealthy. Moon landing guaranteed.</p>
             </div>
          </div>
          
          <div className="mt-12 flex justify-center">
             <img src={LOGO_URL} className="w-24 h-24 rounded-full opacity-30 animate-bounce" alt="Icon" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full min-h-[100px] bg-black flex flex-col items-center justify-center p-8 border-t-8 border-white text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-[#F5A9B8] uppercase leading-none">
          Transformers <span className="text-[#5BCEFA]">$TRANS</span>
        </h2>
        <p className="text-white font-bold italic uppercase tracking-widest text-sm md:text-base opacity-80">
          $TRANS — MORE THAN MEETS THE EYE 🏳️‍⚧️
        </p>
        <p className="text-gray-500 font-bold text-xs max-w-xl mt-2 leading-relaxed">
          Disclaimer: $TRANS is a memecoin created for entertainment purposes only and holds no intrinsic value. Not financial advice. Always do your own research before sending your shiny coins anywhere.
        </p>
      </footer>
    </div>
  );
}

