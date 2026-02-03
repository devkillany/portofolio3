
import React from 'react';

const testimonials = [
  {
    name: 'ELON_X',
    role: 'SEC_AUDITOR',
    text: 'Mohamed is a rare talent. His ability to architect systems while maintaining a high-tier UI aesthetic is unmatched in the Cairo sector.',
    rating: '5/5'
  },
  {
    name: 'STAND_GRAD_04',
    role: 'FULLSTACK_DEV',
    text: 'Learning from the founder of Stand Academy was a game-changer. The depth of knowledge in Laravel and React is mind-blowing.',
    rating: '5/5'
  },
  {
    name: 'NEXUS_SYSTEMS',
    role: 'CTO',
    text: 'MK-OS is not just a portfolio, it is a demonstration of engineering excellence. Efficient, secure, and visually stunning.',
    rating: '5/5'
  }
];

export const Testimonials: React.FC<{ onHover: () => void, onClick: () => void }> = ({ onHover, onClick }) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-8">
        <h2 className="text-4xl font-orbitron font-black text-white tracking-[0.2em] uppercase">
          Review_<span className="text-pink-500 italic">LOGS</span>
        </h2>
        <div className="h-[1px] flex-grow bg-cyan-900/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            onMouseEnter={onHover}
            onClick={onClick}
            className="group relative bg-slate-900/40 border border-cyan-900/20 p-8 cyber-border hover:border-cyan-400 transition-all duration-500 cursor-pointer"
          >
            <div className="space-y-4 relative z-10">
              <p className="font-mono-tech text-sm text-cyan-100/70 italic leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="pt-6 border-t border-cyan-900/30">
                <div className="font-orbitron font-bold text-cyan-400">
                  {t.name}
                </div>
                <div className="font-code text-[10px] text-pink-500 uppercase tracking-widest">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
