

const ReadyToScaleSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32 ">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gray-900 text-white p-12 md:p-16 rounded-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 text-white/10 text-sm font-medium rotate-12">
            From meh to wow!
          </div>
          <div className="absolute top-8 right-8 text-white/10 text-sm font-medium -rotate-12">
            Watch Time Wins
          </div>
          <div className="absolute bottom-8 right-8 text-white/10 text-sm font-medium rotate-6">
            Low Views? Fixed
          </div>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bereit zu Skalieren?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Ob einzelner Post oder kompletter Kanalumbau – wir machen's. Lass uns starten.
            </p>

            {/* CTA Button */}
            <button className="group bg-white text-gray-900 px-8 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 mb-12">
              <span>Kostenloses Erstgespräch Buchen</span>
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-medium">
                No Editor? No Problem
              </div>
              <div className="bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-medium">
                Conversion Boost
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleSection;