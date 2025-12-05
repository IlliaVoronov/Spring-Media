import ScrollAnimationSection from "./ScrollAnimationComponent";


const ServicesSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
          </svg>
          <span className="text-gray-600 font-medium">Dienste</span>
        </div>

        {/* Main Heading */}
        <ScrollAnimationSection>
          <h2 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8 leading-tight">
            Das machen wir am besten!
          </h2>


          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-20">
            Wir produzieren Content, der den Scroll stoppt, die Leute fesselt und deine Marke auf Top-Niveau aussehen lässt.
          </p>
        </ScrollAnimationSection>

        {/* Services Grid */}
        <div className="flex flex-col md:grid-cols-2 gap-4 lg:gap-8">

          {/* Service Card 1 */}
          {/* Offset background */}
          <div className="lg:flex md:flex sm:flex gap-4 space-y-4">
            <ScrollAnimationSection animationClass="animate-fade-right">
              <div className="relative group sm:mb-0">

                <div className="h-full flex flex-col justify-between bg-gray-950 text-white p-8 md:p-10 rounded-3xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Social Media Content</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Wir übernehmen komplette Betreuung deiner Social Media Kanäle: Content-Planung, Posting, Community-Management und Performance-Tracking. Alles aus einer Hand, damit dein Auftritt professionell wirkt und Kunden regelmäßig von selbst auf dich zukommen.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span className="text-sm font-medium">Geplanter Content</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span className="text-sm font-medium">Community-Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationSection>

            {/* Service Card 2 */}
            <ScrollAnimationSection animationClass="animate-fade-left">

              <div className="relative group">

                <div className="relative bg-gray-950 text-white p-8 md:p-10 rounded-3xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Strategische Analyse</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Wir prüfen deinen kompletten Auftritt – Profil, Content und Ads – und liefern eine klare Roadmap, wie Social Media für dich mehr Umsatz bringt.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-medium">Markt- & Wettbewerbsanalyse</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm font-medium">CTR Booster</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationSection>
          </div>

          {/* Service Card 3 */}
          <div className="lg:flex md:flex sm:flex gap-4 space-y-4">
            <ScrollAnimationSection animationClass="animate-fade-right">

              <div className="relative group">

                <div className="relative bg-gray-950 text-white p-8 md:p-10 rounded-3xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Sales Funnel Optimierung</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Wir prüfen deinen kompletten Auftritt – Profil, Content und Ads – und liefern eine klare Roadmap, wie Social Media für dich mehr Umsatz bringt.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-medium">Markt- & Wettbewerbsanalyse</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm font-medium">CTR Booster</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationSection>

            {/* Service Card 4 */}
            <ScrollAnimationSection animationClass="animate-fade-left">

              <div className="relative group">

                <div className="relative bg-gray-950 text-white p-8 md:p-10 rounded-3xl transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Recruiting & Kundengewinnung</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Aus einem Video machen wir 10 Content-Pieces: Reels, Stories, Teaser & Zitatkarten. So bleibst du auf allen Plattformen sichtbar und ziehst gleichzeitig Kunden wie Mitarbeiter an.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                      <span className="text-sm font-medium">Multi-Platform</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">Batch Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm font-medium">Quick</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;