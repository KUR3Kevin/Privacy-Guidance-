import React from 'react';
import { Search, Menu, HelpCircle, ShieldAlert } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full mb-8 relative z-20">
      {/* Top Bar container matching sketch */}
      <div className="glass-panel rounded-2xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(123,44,191,0.3)] border-t border-white/20">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-red-600 to-purple-700 rounded-lg shadow-lg shadow-red-500/30">
            <ShieldAlert className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-white">
              GUARDIAN<span className="text-red-500">WEB</span>
            </h1>
            <p className="text-xs text-purple-300 tracking-widest uppercase opacity-80">Secure Your Digital Footprint</p>
          </div>
        </div>

        {/* Address Bar Aesthetic (Optional based on sketch "https://...") */}
        <div className="hidden md:flex flex-1 mx-8 bg-black/40 rounded-full border border-white/5 px-4 py-2 items-center text-gray-500 text-sm font-mono">
          <span className="text-green-500 mr-2">https://</span>
          <span>www.guardianweb.secure/dashboard</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300">
            <Search className="w-6 h-6 text-purple-300 group-hover:text-white" />
          </button>
          <button className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300">
            <Menu className="w-6 h-6 text-purple-300 group-hover:text-white" />
          </button>
          <button className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300">
            <HelpCircle className="w-6 h-6 text-purple-300 group-hover:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};
