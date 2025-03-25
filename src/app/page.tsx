'use client';
import BubblyButton from '@/components/BubblyButton';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row pt-4 px-4 md:px-20 gap-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 flex flex-col pt-8 md:pt-16 px-4 md:px-8 text-center md:text-left">
          {/* Decorative Element */}
          <div className="mx-auto md:mx-0 w-[60px] h-2 bg-[#FF6B35] rounded-md mb-6"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mb-6 leading-tight">
            Turn Your Passion<br />Into Profit
          </h1>
          
          <p className="text-lg font-nunito text-[#555555] mb-8 max-w-md mx-auto md:mx-0">
            Get the financial support you need to pursue your creative
            endeavors, freelance work, or entrepreneurial projects.
          </p>
          
          {/* CTA Button */}
          <div className="mb-8 z-10 flex justify-center md:justify-start">
            <BubblyButton className="relative bg-[#FF6B35] hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-full text-xl transition-colors duration-300 cursor-pointer">
              Start Your Hustle
            </BubblyButton>
          </div>
          
          <p className="text-sm text-[#777777] text-center md:text-left">Trusted by 10,000+ creators worldwide</p>
        </div>
        
        {/* Right Side - Visual Element */}
        <div className="hidden md:block md:w-1/2 relative h-[460px]">
          {/* Background Shape - Parallelogram */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-0 right-0 bottom-0 bg-[#F9F9FB] transform skew-x-6"></div>
          </div>
          
          {/* Creator Illustrations - Abstract Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#F0F6FF] bg-opacity-70"></div>
          
          {/* Geometric Pattern Elements */}
          <div className="absolute top-[100px] right-[70px] w-20 h-20 rounded-md bg-[#ff9670] bg-opacity-10"></div>
          <div className="absolute top-[130px] right-[40px] w-20 h-20 rounded-md bg-[#ff9670] bg-opacity-20"></div>
          
          {/* Creator Success Visual - Card */}
          <div className="absolute top-[150px] left-[140px] w-[200px] h-[140px] rounded-lg bg-white border border-[#eeeeee] shadow-sm">
            <div className="absolute top-5 left-5 w-[160px] h-[10px] rounded-md bg-[#eeeeee]"></div>
            <div className="absolute top-10 left-5 mt-4 w-[120px] h-[10px] rounded-md bg-[#eeeeee]"></div>
            <div className="absolute top-[70px] left-5 w-20 h-[50px] rounded-md bg-[#ff9670] bg-opacity-20"></div>
          </div>
          
          {/* Growth Indicator */}
          <div className="absolute top-[300px] left-[160px]">
            <svg width="130" height="70" viewBox="0 0 120 70" fill="none">
              <path d="M0 50 L20 30 L40 40 L60 20 L80 10 L100 0" stroke="#FF6B35" strokeWidth="2" />
              <circle cx="100" cy="0" r="5" fill="#FF6B35" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-[120px] left-[120px] w-[50px] h-[50px] rounded-full bg-[#ff9670] bg-opacity-10"></div>
          <div className="absolute bottom-[80px] right-[40px] w-[70px] h-[70px] rounded-full bg-[#ff9670] bg-opacity-10"></div>
          <div className="absolute bottom-[150px] left-[100px] w-10 h-10 rounded-md bg-[#ff9670] bg-opacity-10"></div>
        </div>
      </div>
      
      {/* Feature Icons */}
      <div className="w-full bg-[#F9F9FB] py-6 md:py-10 mt-1.5">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#222222] flex items-center justify-center mb-2">
              <span className="text-base md:text-lg font-medium text-[#222222]">1:1</span>
            </div>
            <span className="text-sm md:text-xs text-[#555555]">Direct Support</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#222222] flex items-center justify-center mb-2">
              <span className="text-base md:text-lg font-medium text-[#222222]">0%</span>
            </div>
            <span className="text-sm md:text-xs text-[#555555]">No Platform Fee</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#222222] flex items-center justify-center mb-2">
              <span className="text-base md:text-lg font-medium text-[#222222]">24h</span>
            </div>
            <span className="text-sm md:text-xs text-[#555555]">Fast Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
}