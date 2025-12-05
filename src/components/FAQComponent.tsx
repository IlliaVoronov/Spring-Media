import { useState } from "react";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie schnell sehe ich Ergebnisse?",
      answer: "Erste sichtbare Veränderungen kommen nach zwei bis vier Wochen, erste Leads meist im ersten Monat. Ein stabiler Leadflow entsteht nach sechs bis zwölf Wochen, und nach drei Monaten steht ein System, das messbare Ergebnisse liefert."
    },
    {
      question: "Wie misst ihr Erfolg?",
      answer: "Wir tracken KPIs wie Reichweite, Engagement-Rate, Click-Through-Rate und natürlich generierte Leads. Du erhältst monatliche Reports mit allen wichtigen Metriken."
    },
    {
      question: "Wie viel Zeit müssen wir investieren?",
      answer: "Minimal. Nach dem initialen Briefing brauchst du etwa 1-2 Stunden pro Monat für Feedback und Abstimmung. Den Rest übernehmen wir."
    },
    {
      question: "Wie lang ist die Vertragslaufzeit und warum?",
      answer: "Die Mindestlaufzeit beträgt 3 Monate. Social Media braucht Zeit zum Wachsen - Content muss getestet, optimiert und eine Community aufgebaut werden."
    },
    {
      question: "Wäre unser Unternehmen überhaupt ein guter Fit für euch?",
      answer: "Wenn du ein B2B- oder B2C-Unternehmen mit Wachstumsambitionen bist und Social Media strategisch nutzen willst, passen wir perfekt zusammen. Buche ein kostenloses Erstgespräch!"
    }
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
              </svg>
              <span className="text-gray-600 font-medium">FAQ</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Weil wir gerne offene Fragen klären...
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Transparente, direkte Antworten, die Vertrauen in unsere Zusammenarbeit schaffen.
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-600 transition-transform shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;