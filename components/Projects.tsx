
import React from 'react';

const projectData = [
  {
    id: 'mypsp',
    title: 'MyPSP_SYSTEM.exe',
    description: 'بيئة ألعاب كاملة متطورة تعتمد على محاكاة أنظمة PSP القديمة بواجهة مستخدم مستقبلية.',
    link: 'https://devkillany.github.io/mypsp/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    tags: ['EMU', 'JS', 'UI'],
  },
  {
    id: 'fullstack_map',
    title: 'NAVIGATOR_FS_V1',
    description: 'خريطة تفاعلية شاملة لمسار تعلم الـ Full Stack Development من الصفر للاحتراف.',
    link: 'https://devkillany.github.io/fullstack_map/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    tags: ['MAP', 'NODE', 'SVG'],
  },
  {
    id: 'v2',
    title: 'MK_LEGACY_V2',
    description: 'بورتفوليو سابق استكشفنا فيه جماليات اللون الأزرق العميق مع التأثيرات الحركية.',
    link: 'https://devkillany.github.io/portofolio2/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
    tags: ['PORT', 'LEGACY', 'V2'],
  },
  {
    id: 'v1',
    title: 'MK_ORIGIN_V1',
    description: 'البداية الأولى للهوية الرقمية، تصميم بسيط ومباشر يعتمد على الأساسيات.',
    link: 'https://devkillany.github.io/portofolio/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070',
    tags: ['PORT', 'ROOT', 'HTML'],
  }
];

export const Projects: React.FC<{ onHover: () => void, onClick: () => void }> = ({ onHover, onClick }) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-orbitron font-black text-white tracking-widest uppercase">
          Mission_<span className="text-[#00ff41]">Logs</span>
        </h2>
        <div className="h-px flex-grow bg-[#00ff411a]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            onMouseEnter={onHover}
            onClick={onClick}
            className="group relative bg-black border border-[#00ff411a] overflow-hidden hover:border-[#00ff41] transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="h-44 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-[#00ff4166] uppercase tracking-widest">Type: Executable</span>
                <div className="w-1.5 h-1.5 bg-[#00ff41] shadow-[0_0_5px_#00ff41]"></div>
              </div>
              <h3 className="text-sm font-orbitron font-black text-white group-hover:text-[#00ff41] transition-colors tracking-widest">
                {project.title}
              </h3>
              <p className="text-[10px] text-slate-400 leading-relaxed font-mono-tech line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="p-6 pt-0">
              <a 
                href={project.link} 
                target="_blank" 
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                className="flex items-center justify-center w-full py-2 bg-black border border-[#00ff4133] text-[#00ff41] text-[9px] font-bold tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
              >
                OPEN_UPLINK
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
