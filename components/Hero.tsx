
import React from 'react';

export const Hero: React.FC<{ onHover: () => void, onClick: () => void }> = ({ onHover, onClick }) => {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 relative min-h-[85vh]">
      <div className="space-y-12 relative z-10">
        <div className="space-y-4">
          <div 
            onMouseEnter={onHover}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#00ff410d] border border-[#00ff4133] text-[#00ff41] text-[10px] tracking-[0.5em] uppercase font-bold"
          >
            <span className="w-1.5 h-1.5 bg-[#00ff41] shadow-[0_0_8px_#00ff41] animate-pulse"></span>
            Connection_Stable_104
          </div>
          
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white leading-tight uppercase tracking-tighter" data-text="MOHAMED ALKILLANY">
            MOHAMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-white drop-shadow-[0_0_15px_rgba(0,255,65,0.3)]">ALKILLANY</span>
          </h1>
        </div>

        <div className="max-w-xl">
          <div className="p-8 bg-black/60 border-l-2 border-[#00ff41] relative backdrop-blur-sm">
            <p className="text-lg text-slate-300 text-right md:text-left leading-relaxed font-mono-tech">
              <span className="text-[#00ff41] font-bold">root:</span> مؤسس أكاديمية <span className="text-[#00ff41] underline underline-offset-4 decoration-1">STAND ACADEMY</span> للتدريب التقني.<br />
              <span className="text-[#00ff41] font-bold">root:</span> خبير في بناء الأنظمة المعقدة والواجهات المستقبلية.<br />
              <span className="text-[#00ff41] font-bold">root:</span> ARCHITECTING THE FUTURE THROUGH CODE.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-4">
          <button 
            onMouseEnter={onHover}
            onClick={onClick}
            className="px-12 py-4 bg-[#00ff41] text-black font-orbitron font-black text-[10px] tracking-[0.4em] shadow-[0_0_25px_rgba(0,255,65,0.3)] hover:brightness-110 active:scale-95 transition-all"
          >
            UPLINK_SYSTEM
          </button>
          <button 
            onMouseEnter={onHover}
            onClick={onClick}
            className="px-12 py-4 border border-[#00ff4133] text-[#00ff41] font-orbitron font-bold text-[10px] tracking-[0.4em] hover:bg-[#00ff410d] active:scale-95 transition-all"
          >
            PING_PROTOCOL
          </button>
        </div>

        <div className="flex gap-12 text-[10px] text-[#00ff4133] uppercase tracking-[0.2em] pt-8">
          <div>XP: 12_CYCLES</div>
          <div>LOC: CAIRO_NODE</div>
          <div>ST: ELITE_AUTH</div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
          {/* Subtle Cyber Rings */}
          <div className="absolute inset-0 border border-[#00ff411a] rounded-full"></div>
          <div className="absolute inset-12 border border-dashed border-[#00ff411a] rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>
          
          <div className="relative z-10 w-full h-full p-8">
             <div 
              onMouseEnter={onHover}
              onClick={onClick}
              className="w-full h-full bg-slate-900/20 backdrop-blur-sm rounded-full border border-[#00ff414d] flex items-center justify-center p-4 group overflow-hidden shadow-[0_0_60px_rgba(0,255,65,0.1)] cursor-pointer"
            >
                <img 
                  src="https://devkillany.github.io/portofolio/gg.jpg" 
                  alt="Mohamed Alkillany" 
                  className="w-full h-full object-cover rounded-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                {/* Horizontal Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
                   <div className="w-full h-px bg-[#00ff41] shadow-[0_0_10px_#00ff41] opacity-50 absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                </div>
             </div>
          </div>

          {/* Minimal HUD Tag */}
          <div className="absolute -bottom-4 -left-4 p-4 bg-black border border-[#00ff4133] text-[9px] text-[#00ff41] font-bold tracking-widest uppercase backdrop-blur-md">
             MK-OS // BIO_SYNC_OK
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};
