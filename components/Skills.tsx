
import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ReactElement;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 18l-5-5-5 5M17 11l-5-5-5 5" /></svg>,
    skills: [
      { name: 'HTML5/CSS3', level: 98 },
      { name: 'JavaScript', level: 95 },
      { name: 'React', level: 94 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Framer Motion', level: 88 },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><path d="M6 6h.01M6 18h.01" /></svg>,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP/Laravel', level: 88 },
      { name: 'MySQL/MongoDB', level: 92 },
    ]
  },
  {
    id: 'cyber',
    label: 'CyberSec',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    skills: [
      { name: 'Linux Mastery', level: 94 },
      { name: 'Network Sec', level: 85 },
      { name: 'Pentesting', level: 82 },
      { name: 'CTF Player', level: 90 },
    ]
  },
  {
    id: 'design',
    label: 'Creative',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l5 5" /><path d="M9.5 14.5L16 18" /></svg>,
    skills: [
      { name: 'UI/UX Design', level: 92 },
      { name: 'Photoshop', level: 95 },
      { name: 'Illustrator', level: 90 },
      { name: 'Figma', level: 94 },
    ]
  }
];

export const Skills: React.FC<{ onHover: () => void, onClick: () => void }> = ({ onHover, onClick }) => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-[#00ff411a] pb-8">
        <div>
          <h2 className="text-4xl font-orbitron font-black text-white uppercase tracking-widest">
            Module_<span className="text-[#00ff41]">Core</span>
          </h2>
          <p className="text-[#00ff41] opacity-40 text-[10px] mt-2 tracking-[0.3em]">SYSTEM_CAPABILITY_INDEX_v5</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                onClick();
              }}
              onMouseEnter={onHover}
              className={`px-4 py-2 text-[10px] font-bold tracking-widest transition-all border ${
                activeTab === cat.id 
                ? 'bg-[#00ff41] text-black border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.4)]' 
                : 'text-[#00ff41] border-[#00ff4133] hover:bg-[#00ff411a]'
              } flex items-center gap-2`}
            >
              {cat.icon}
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeCategory?.skills.map((skill, idx) => (
          <div 
            key={skill.name} 
            onMouseEnter={onHover}
            onClick={onClick}
            className="group relative bg-black/40 border border-[#00ff411a] p-6 hover:border-[#00ff41] transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
               <h3 className="font-orbitron font-bold text-sm text-white group-hover:text-[#00ff41] transition-colors">
                  {skill.name}
               </h3>
               <span className="text-[8px] text-[#00ff414d] font-bold">0{idx + 1}</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-[9px] text-[#00ff41]">
                <span className="opacity-60">EFFICIENCY</span>
                <span className="font-bold">{skill.level}%</span>
              </div>
              <div className="h-0.5 bg-slate-900 w-full relative overflow-hidden">
                <div 
                  className="h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            
            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-1 h-1 bg-[#00ff41] shadow-[0_0_5px_#00ff41]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
