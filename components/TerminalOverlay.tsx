
import React, { useState, useRef, useEffect } from 'react';

interface TerminalOverlayProps {
  onClose: () => void;
  playSfx: (type: 'typing' | 'terminal_open' | 'hover' | 'click') => void;
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ onClose, playSfx }) => {
  const [history, setHistory] = useState<string[]>([
    'MK-OS_KERNEL_v4.9.2 Initialized...',
    'Establishing Secure Peer Tunnel... [DONE]',
    'Identity Verified: ROOT_ALKILLANY',
    'Session Secure. Type "help" for sub-routines.'
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    playSfx('typing');
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    const newHistory = [...history, `root@alkillany:~$ ${input}`];
    
    playSfx('click');

    switch (cmd) {
      case 'help':
        newHistory.push(
          'SERVICES:', 
          'ls      - System modules', 
          'whoami  - User profile', 
          'clear   - Purge buffer', 
          'exit    - Kill session'
        );
        break;
      case 'ls':
        newHistory.push('vol: /projects, /stand_academy, /neural_net');
        break;
      case 'whoami':
        newHistory.push('ID: Mohamed Alkillany | ARCHITECT @ STAND ACADEMY');
        break;
      case 'clear':
        setHistory(['BUFFER_PURGED.']);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        newHistory.push(`ERR: Command "${cmd}" not found.`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
      <div className="w-full max-w-3xl h-[600px] bg-[#020617] border border-cyan-500/50 shadow-[0_0_50px_rgba(0,243,255,0.3)] flex flex-col overflow-hidden">
        <div className="bg-cyan-500 h-10 flex items-center justify-between px-6">
          <span className="font-orbitron font-black text-black text-[9px] tracking-widest uppercase">ROOT_SHELL</span>
          <button onClick={onClose} className="text-black hover:scale-125 transition-transform font-bold">X</button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 font-code text-sm text-cyan-400 space-y-1 custom-scrollbar">
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('root@') ? 'text-green-500' : ''}>
              {line}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-green-500 font-bold shrink-0">root@alkillany:~$</span>
            <input
              autoFocus
              onKeyDown={handleKeyDown}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none flex-grow text-cyan-100 font-bold"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
