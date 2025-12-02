import { useEffect } from 'react';

interface BookCallButtonProps {
  url?: string;
}

export default function BookCallButton({ url = 'https://calendly.com/illiavoronovde/30min' }: BookCallButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    window.Calendly?.initPopupWidget({ url });
  };

  return (
    <button
      onClick={openCalendly}
      className="group bg-gray-900 text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
    >
      <span>Book a Call</span>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
        <svg
          className="w-5 h-5 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
}
