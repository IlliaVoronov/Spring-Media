

const PainPointsSection = () => {
  const problems = [
    "Editing takes me forever.",
    "I miss uploads trying to finish videos.",
    "I hate editing. I just want to record.",
    "My videos don't look pro enough.",
    "Captions are a pain to add."
  ];

  const solutions = [
    "Done-for-you edits, always on time.",
    "Fast turnaround",
    "You record. We handle the rest.",
    "Cinematic, clean, and branded.",
    "Burned-in, style-matched captions."
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto sm:flex sm:flex-col sm:items-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-12 bg-white border border-dashed border-gray-200 w-fit rounded-full p-2 ">
          <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
          </svg>
          <span className="text-gray-600 font-medium">Unsere Lösung</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8 leading-tight">
          Warum Unternehmen auf Social Media scheitern
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-20">
          Ein schneller Vergleich der Probleme, die Sie nicht haben sollten – und wie wir sie für Sie ausschalten.
        </p>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 w-full mx-auto bg-white border border-dashed py-6 px-5 border-gray-200 rounded-3xl">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-6">
              Unternehmer Probleme
            </h3>
            <div className="bg-gray-50 border border-dashed border-gray-200 rounded-3xl p-8 space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-emerald-500 mb-6">
              Unsere Lösung
            </h3>
            <div className="bg-gray-900 rounded-3xl p-8 space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;