
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { TerminalOverlay } from './components/TerminalOverlay';
import { HUDOverlay } from './components/HUDOverlay';

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "010101010101アイウエオカキクケコサシスセソタ";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px 'Fira Code'";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillStyle = "#00ff41";
        ctx.globalAlpha = 0.15;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);

  // Initialize Audio Context on first interaction
  const initAudio = () => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContext.current.state === 'suspended') {
      audioContext.current.resume();
    }
  };

  const playSfx = (type: 'typing' | 'hover' | 'click' | 'boot' | 'terminal_open' | 'success' | 'alert') => {
    if (!soundEnabled) return;
    
    // Ensure context is running
    initAudio();
    const ctx = audioContext.current!;
    if (ctx.state !== 'running') return;

    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.value = 0.4; // Higher volume for clarity

    switch (type) {
      case 'hover': {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.05);
        g.gain.setValueAtTime(0.08, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
        break;
      }
      case 'click': {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        g.gain.setValueAtTime(0.15, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
        break;
      }
      case 'typing': {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400 + Math.random() * 200, ctx.currentTime);
        g.gain.setValueAtTime(0.05, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
        break;
      }
      case 'terminal_open': {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.3);
        g.gain.setValueAtTime(0.12, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
        break;
      }
      case 'boot': {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(40, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 1.8);
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.6);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.8);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + 1.8);
        break;
      }
      case 'success': {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const g = ctx.createGain();
        osc1.frequency.setValueAtTime(660, ctx.currentTime);
        osc2.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        g.gain.setValueAtTime(0.15, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        osc1.connect(g);
        osc2.connect(g);
        g.connect(masterGain);
        osc1.start();
        osc2.start(ctx.currentTime + 0.1);
        osc1.stop(ctx.currentTime + 0.4);
        osc2.stop(ctx.currentTime + 0.4);
        break;
      }
    }
  };

  const handleBoot = () => {
    initAudio();
    setBooted(true);
    // Delay slightly to allow context to resume before playing
    setTimeout(() => playSfx('boot'), 200);
  };

  if (!booted) {
    return (
      <div 
        className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center font-mono-tech text-[#00ff41] overflow-hidden z-[10000] cursor-pointer"
        onClick={handleBoot}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="mb-8 text-6xl font-orbitron tracking-[0.5em] glitch-heavy animate-pulse" data-text="MK-OS_V5">MK-OS_V5</div>
        <div className="w-80 h-1 bg-[#00ff411a] relative overflow-hidden mb-12 border border-[#00ff4133]">
          <div className="absolute inset-y-0 left-0 bg-[#00ff41] animate-[loading_1.5s_ease-in-out_forwards]" style={{ width: '0%' }}></div>
        </div>
        <div className="text-sm font-code opacity-80 uppercase tracking-[0.4em] animate-bounce">Click to Initialize System</div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#010409] text-slate-100 selection:bg-[#00ff41] selection:text-black overflow-x-hidden font-mono-tech">
      <div className="matrix-bg" />
      <CodeRain />
      <HUDOverlay />
      <Navbar onHover={() => playSfx('hover')} onClick={() => playSfx('click')} />
      
      <main className="container mx-auto px-6 py-24 relative z-10 space-y-64">
        <Hero onHover={() => playSfx('hover')} onClick={() => playSfx('click')} />
        
        <section id="skills" className="scroll-mt-24">
          <Skills onHover={() => playSfx('hover')} onClick={() => playSfx('click')} />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects onHover={() => playSfx('hover')} onClick={() => playSfx('click')} />
        </section>

        <section id="testimonials" className="scroll-mt-24">
          <Testimonials onHover={() => playSfx('hover')} onClick={() => playSfx('click')} />
        </section>

        <section id="contact" className="scroll-mt-24 pb-24">
          <Contact 
            onHover={() => playSfx('hover')} 
            onClick={() => playSfx('click')} 
            playTyping={() => playSfx('typing')}
            onSuccess={() => playSfx('success')} 
          />
        </section>
        
        <footer className="py-24 border-t border-[#00ff411a] flex flex-col items-center gap-6 bg-slate-900/40 backdrop-blur-md relative overflow-hidden">
          <div className="font-orbitron text-xl font-black tracking-[0.4em] text-[#00ff41] opacity-60 uppercase">
            Mohamed Alkillany // 0xDEADBEEF
          </div>
          <div className="flex gap-12 text-[#00ff41] text-[10px] tracking-[0.5em] uppercase">
            <a href="https://github.com/devkillany" target="_blank" onMouseEnter={() => playSfx('hover')} onClick={() => playSfx('click')} className="hover:text-white transition-all">GITHUB</a>
            <a href="https://wa.me/201000621479" target="_blank" onMouseEnter={() => playSfx('hover')} onClick={() => playSfx('click')} className="hover:text-white transition-all">WHATSAPP</a>
          </div>
        </footer>
      </main>

      {/* Floating Controls */}
      <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-4">
        {/* Sound Toggle */}
        <button 
          onClick={() => {
            initAudio();
            setSoundEnabled(!soundEnabled);
            if (!soundEnabled) setTimeout(() => playSfx('click'), 50);
          }}
          onMouseEnter={() => playSfx('hover')}
          className={`w-14 h-14 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:scale-110 active:scale-90 transition-all border border-[#00ff4133] bg-black/80 rounded-full ${soundEnabled ? 'text-[#00ff41]' : 'text-red-500'}`}
          title={soundEnabled ? "Mute" : "Unmute"}
        >
          {soundEnabled ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 9l4 4m0-4l-4 4"/></svg>
          )}
        </button>

        {/* Terminal Toggle */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setTerminalOpen(!terminalOpen);
            playSfx('terminal_open');
          }}
          onMouseEnter={() => playSfx('hover')}
          className="w-14 h-14 bg-[#00ff41] text-black flex items-center justify-center shadow-[0_0_20px_#00ff41] hover:scale-110 active:scale-90 transition-all border-2 border-black rounded-none"
        >
          <span className="text-2xl font-black">&gt;_</span>
        </button>
      </div>

      {terminalOpen && <TerminalOverlay onClose={() => setTerminalOpen(false)} playSfx={playSfx} />}
    </div>
  );
};

export default App;
