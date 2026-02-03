
import React from 'react';

interface NavbarProps {
  onHover: () => void;
  onClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHover, onClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-[#00ff411a]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onMouseEnter={onHover} onClick={onClick}>
          <div className="w-9 h-9 border border-[#00ff41] flex items-center justify-center bg-[#00ff410d] group-hover:bg-[#00ff411a] transition-all">
            <span className="text-[#00ff41] font-bold text-xs">MK</span>
          </div>
          <span className="font-orbitron font-black text-lg tracking-widest text-white group-hover:text-[#00ff41] transition-colors">
            ROOT<span className="text-[#00ff41]">@</span>MKOS
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['HOME', 'SKILLS', 'PROJECTS', 'TESTIMONIALS', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={onHover}
              onClick={onClick}
              className="text-[10px] font-bold tracking-[0.3em] text-[#00ff4166] hover:text-[#00ff41] transition-all relative group"
            >
              {item}
              <div className="h-0.5 bg-[#00ff41] absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all"></div>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-right">
           <div className="flex items-center gap-2 justify-end">
              <span className="w-1 h-1 bg-[#00ff41] shadow-[0_0_5px_#00ff41] animate-ping"></span>
              <span className="text-[9px] text-[#00ff41] tracking-widest font-bold">UPLINK_LIVE</span>
           </div>
           <div className="text-[7px] text-[#00ff4133] tracking-widest">v5.0.2</div>
        </div>
      </div>
    </nav>
  );
};
