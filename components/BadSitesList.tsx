import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { BadSite } from '../types';

interface BadSitesListProps {
  sites: BadSite[];
  loading: boolean;
}

export const BadSitesList: React.FC<BadSitesListProps> = ({ sites, loading }) => {
  return (
    <div className="glass-panel rounded-xl p-6 h-full flex flex-col border-t-2 border-t-red-600 shadow-[0_5px_20px_rgba(220,38,38,0.15)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <AlertTriangle className="text-red-500 w-6 h-6" />
        <h3 className="text-xl font-bold text-white">Websites to Avoid</h3>
      </div>
      
      <p className="text-sm text-gray-400 mb-4 italic">
        High risk of data scraping & privacy violations.
      </p>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-transparent">
        {loading ? (
           // Skeletons
           [1, 2, 3].map((i) => (
             <div key={i} className="animate-pulse bg-white/5 rounded-lg p-4 h-32"></div>
           ))
        ) : (
          sites.map((site, index) => (
            <div key={index} className="bg-black/40 border border-white/5 rounded-lg p-4 hover:border-red-500/50 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-red-400 font-bold font-mono text-sm flex items-center gap-1">
                   <XCircle size={14} /> {site.name}
                </span>
                <span className="text-xs bg-red-900/30 text-red-200 px-2 py-0.5 rounded border border-red-500/20">{site.category}</span>
              </div>
              <p className="text-gray-400 text-xs mb-3 border-l-2 border-red-900 pl-2">{site.reason}</p>
              
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Alternative:</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                  <CheckCircle size={14} />
                  {site.alternative}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
