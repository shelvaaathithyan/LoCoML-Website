export function Footer() {
  return (
    <footer className="w-full bg-white border-t" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-[80px] pb-[48px] flex flex-col items-center justify-center">
        
        {/* Logos Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[80px] mb-[40px]">
          <a href="#" className="block transition-all duration-200 opacity-90 hover:opacity-100 hover:-translate-y-[2px]">
            <img 
              src="/SA4S.svg" 
              alt="SA4S" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <a href="#" className="block transition-all duration-200 opacity-90 hover:opacity-100 hover:-translate-y-[2px]">
            <img 
              src="/SERC.png" 
              alt="SERC" 
              className="h-12 md:h-14 w-auto object-contain grayscale-[0.2]"
            />
          </a>
          <a href="#" className="block transition-all duration-200 opacity-90 hover:opacity-100 hover:-translate-y-[2px]">
            <img 
              src="/IIIT.png" 
              alt="IIIT Hyderabad" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[15px] md:text-[16px] font-medium text-slate-500">
          <p>© 2026 Software Engineering Research Center, IIIT Hyderabad. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
