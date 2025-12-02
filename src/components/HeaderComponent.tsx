
import BookCallButton from './CalendyButton';

const CreatorFlowLanding = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/logo.jpg" alt="logo" className='rounded-2xl' />
            </div>
            <span className="text-2xl font-bold text-gray-900">Spring Media</span>
          </div>

          {/* Menu Button */}
          <button className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-colors">
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="relative z-10 px-6 md:px-12 lg:px-20 flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Customer Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-3 border-white shadow-md"></div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-3 border-white shadow-md"></div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-3 border-white shadow-md"></div>
                </div>
                <span className="text-gray-700 font-medium">100% Zufriedene Kunden</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-none">
                  Social Media
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none flex flex-wrap items-center gap-3">
                  <span className="text-gray-900">Das </span>
                  <span className="text-emerald-500">Raus Sticht</span>

                </h1>
              </div>

              {/* Description */}
              <p className="text-lg flex md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Wir übernehmen deinen kompletten Social-Media-Auftritt und machen deine Marke auf Instagram, TikTok & Co. erfolgreich.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <BookCallButton />
              </div>
            </div>

            {/* Right Video Container - Vertical Format */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
                {/* Video placeholder with ocean background */}
                <div className="absolute inset-0 ">
                  {/* Video element - replace src with actual video */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster=""
                  >
                    {/*video source here */}
                    <source src="/testVideo.mp4" type="video/mp4" />
                  </video>
                </div>


              </div>
            </div>
          </div>
        </div>
      </main>
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
};

export default CreatorFlowLanding;