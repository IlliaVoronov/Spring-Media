import BookCallWhiteButton from "./BookCallWhiteButton";


const ReadyToScaleSection = () => {
  return (
    <section id="contact" className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-40 ">
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
            <BookCallWhiteButton />

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