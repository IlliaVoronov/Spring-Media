

export default function AboutComponent() {

  return (
    <div>
      {/* Über Uns Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-center items-center">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
            </svg>
            <span className="text-gray-600 font-medium">Über Uns</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20 leading-tight max-w-5xl mx-auto">
            Social Media als starken Kommunikationskanal, der planbar{' '}
            <span className="text-emerald-500">Aufträge</span> und{' '}
            <span className="text-emerald-500">Bewerber</span> generiert.
          </h2>

          {/* Stats Grid */}
          <div className="flex h-30 gap-4 items-center border border-gray-100 bg-white/50 rounded-3xl max-w-full ">
            {/* Stat 1 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                150+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Content Geliefert
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                20+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Kunden Geholfen
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                250K+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Totale Aufrufe
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}