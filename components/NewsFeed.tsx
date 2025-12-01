import React from 'react';
import { Radio, ExternalLink, Shield } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsFeedProps {
  news: NewsItem[];
  loading: boolean;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ news, loading }) => {
  return (
    <div className="glass-panel rounded-xl p-6 h-full flex flex-col border-t-2 border-t-purple-600 shadow-[0_5px_20px_rgba(123,44,191,0.15)] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <Radio className="text-purple-400 w-6 h-6 animate-pulse" />
          <h3 className="text-xl font-bold text-white">Data Breach News</h3>
        </div>
        <span className="text-xs font-mono text-purple-300 bg-purple-900/30 px-2 py-1 rounded border border-purple-500/30">
          LIVE FEED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto pr-2">
        {loading ? (
           [1, 2, 3, 4].map((i) => (
             <div key={i} className="animate-pulse bg-white/5 rounded-lg h-40"></div>
           ))
        ) : (
          news.map((item, index) => (
            <div key={index} className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-lg">
              <div className="bg-black/80 h-full rounded-lg p-4 flex flex-col hover:bg-black/60 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    item.severity === 'Critical' ? 'bg-red-600 text-white' :
                    item.severity === 'High' ? 'bg-orange-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {item.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                
                <h4 className="text-purple-200 font-semibold text-sm mb-2 line-clamp-2 leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-gray-400 text-xs line-clamp-3 mb-4 flex-grow">
                  {item.summary}
                </p>
                
                <button className="flex items-center gap-1 text-xs text-purple-400 hover:text-white transition-colors mt-auto self-start">
                  Read Report <ExternalLink size={10} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
