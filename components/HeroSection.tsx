import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full mb-8 relative z-10 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass-panel rounded-xl p-8 md:p-12 text-center border-l-4 border-l-red-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
          Information on website and its purpose
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          This platform is designed to educate users on digital hygiene. We track aggressive data scraping entities, identify security breaches in real-time, and provide safer alternatives to popular but privacy-invasive services. Stay informed, stay secure.
        </p>
      </div>
    </section>
  );
};
