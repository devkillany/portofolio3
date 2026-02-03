
import React, { useEffect, useState } from 'react';

export const HUDOverlay: React.FC = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden hidden md:block opacity-30">
      {/* Corner Brackets */}
      <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[#00ff41]"></div>
      <div className="absolute top-10 right-10 w-12 h-12 border-t border-r border-[#00ff41]"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 border-b border-l border-[#00ff41]"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-[#00ff41]"></div>

      {/* Gauges */}
      <div className="absolute top-32 left-8 space-y-4 bg-black/40 p-3 border border-[#00ff411a] backdrop-blur-sm">
        <div className="text-[8px] text-[#00ff41] tracking-widest opacity-60">AUTH_PROTOCOL: OMEGA</div>
        <div className="h-0.5 w-24 bg-[#00ff411a]">
           <div className="h-full bg-[#00ff41] shadow-[0_0_8px_#00ff41] animate-pulse" style={{ width: '88%' }}></div>
        </div>
        <div className="text-[7px] text-[#00ff4133]">NODE_ID: 104_OS_STABLE</div>
      </div>

      <div className="absolute bottom-32 right-8 text-right space-y-4 bg-black/40 p-3 border border-[#00ff411a] backdrop-blur-sm">
        <div className="text-[8px] text-[#00ff41] tracking-widest">MEM_SYNC</div>
        <div className="flex justify-end gap-1">
           {[...Array(5)].map((_, i) => (
             <div key={i} className={`w-2 h-1 ${i < 4 ? 'bg-[#00ff41]' : 'bg-[#00ff411a] animate-pulse'}`}></div>
           ))}
        </div>
        <div className="text-[7px] text-[#00ff4133]">COORDS: 30.0° N, 31.2° E</div>
      </div>
    </div>
  );
};
