import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BadSitesList } from './components/BadSitesList';
import { NewsFeed } from './components/NewsFeed';
import { fetchDashboardData } from './services/geminiService';
import { DashboardData } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-white font-sans selection:bg-purple-500 selection:text-white pb-12">
      
      {/* Background Ambience - Glossy Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
         <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
         {/* Noise Overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col h-full">
        
        {/* Navigation / Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1">
          
          {/* Left Column: Bad Websites (Takes up 4 cols on large screens) */}
          <div className="lg:col-span-4 min-h-[500px]">
            <BadSitesList 
              sites={data?.badSites || []} 
              loading={loading} 
            />
          </div>

          {/* Right Column: News (Takes up 8 cols on large screens) */}
          <div className="lg:col-span-8 min-h-[500px]">
            <NewsFeed 
              news={data?.news || []} 
              loading={loading} 
            />
          </div>
        </div>

        {/* Footer Text (Implied by layout bottom space) */}
        <div className="mt-12 text-center text-white/20 text-xs">
          <p>© 2024 GuardianWeb. Powered by Gemini AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
