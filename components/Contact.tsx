
import React, { useState } from 'react';

interface ContactProps {
  onHover: () => void;
  onClick: () => void;
  playTyping: () => void;
  onSuccess: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onHover, onClick, playTyping, onSuccess }) => {
  const [status, setStatus] = useState('IDLE');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClick();
    setStatus('TRANSMITTING_PACKETS...');
    
    // Simulate real network delay
    setTimeout(() => {
      setStatus('UPLINK_SUCCESS');
      onSuccess();
      
      // Open mailto as a fallback to actually "send"
      const mailtoLink = `mailto:alkillany0000@gmail.com?subject=Portfolio Message from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setStatus('IDLE');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl font-orbitron font-black text-white uppercase tracking-tighter">
            Secure_<span className="text-[#00ff41]">Uplink</span>
          </h2>
          <p className="font-mono-tech text-[#00ff4166] text-sm mt-4 leading-relaxed">
            ESTABLISHING A DIRECT ENCRYPTED CHANNEL TO THE CORE. <br />
            TARGET: alkillany0000@gmail.com
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer" onMouseEnter={onHover} onClick={onClick}>
            <div className="w-12 h-12 border border-[#00ff4133] flex items-center justify-center group-hover:bg-[#00ff41] group-hover:text-black transition-all">
              <span className="font-bold text-xl">@</span>
            </div>
            <div className="font-mono-tech text-sm">
              <div className="text-[#00ff41] text-[10px]">EMAIL_PROTOCOL</div>
              <div className="text-white">alkillany0000@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-[#00ff410d] blur-lg rounded-none"></div>
        <form 
          onSubmit={handleSubmit}
          className="relative bg-black/60 backdrop-blur-xl border border-[#00ff4133] p-8 space-y-6"
          onMouseEnter={onHover}
        >
          <div className="space-y-2">
            <label className="font-mono-tech text-[10px] text-[#00ff41] uppercase tracking-widest">Ident_Name</label>
            <input 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onKeyDown={playTyping}
              onMouseEnter={onHover}
              className="w-full bg-black/50 border border-[#00ff411a] px-4 py-3 font-code text-sm text-[#00ff41] focus:border-[#00ff41] outline-none transition-all placeholder-[#00ff4133]"
              placeholder="GUEST_USER"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono-tech text-[10px] text-[#00ff41] uppercase tracking-widest">Return_Address</label>
            <input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onKeyDown={playTyping}
              onMouseEnter={onHover}
              className="w-full bg-black/50 border border-[#00ff411a] px-4 py-3 font-code text-sm text-[#00ff41] focus:border-[#00ff41] outline-none transition-all placeholder-[#00ff4133]"
              placeholder="USER@NETWORK.NET"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono-tech text-[10px] text-[#00ff41] uppercase tracking-widest">Payload_Data</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              onKeyDown={playTyping}
              onMouseEnter={onHover}
              className="w-full bg-black/50 border border-[#00ff411a] px-4 py-3 font-code text-sm text-[#00ff41] focus:border-[#00ff41] outline-none transition-all resize-none placeholder-[#00ff4133]"
              placeholder="ENTER SECURE MESSAGE..."
            ></textarea>
          </div>

          <button 
            type="submit"
            onMouseEnter={onHover}
            disabled={status !== 'IDLE'}
            className={`w-full py-4 font-orbitron font-black text-xs tracking-[0.3em] transition-all border-none ${
              status === 'IDLE' ? 'bg-[#00ff41] text-black shadow-[0_0_20px_rgba(0,255,65,0.3)]' : 'bg-slate-900 text-[#00ff41]'
            }`}
          >
            {status === 'IDLE' ? 'EXECUTE_TRANSMIT' : status}
          </button>
        </form>
      </div>
    </div>
  );
};
