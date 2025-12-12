import BookCallWhiteButton from "./BookCallWhiteButton";
import ScrollAnimationSection from "./ScrollAnimationComponent";

const TestimonialsSection = () => {
  const testimonials = [
    {
      username: "@mark_locus",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Nach nur einer Woche Projekt, das Spring Media für mich durchgeführt hat, habe ich 10 % mehr Kunden in meinem Friseursalon."
    },
    {
      username: "@bistro_neuewelt",
      avatar: "/bistro_neuewelt_logo.jpg",
      text: "Wir haben 4 neue Mitarbeiter eingestellt, die wir gesucht haben, nachdem Spring Media eine Anzeige für uns geschaltet hatte."
    },
    // {
    //   username: "@johnbai",
    //   avatar: "https://i.pravatar.cc/150?img=68",
    //   text: "Ich liebe den Vibe den die Jungs mit sich bringen, total gelassen aber professionell zugleich. Einfach Klasse!"
    // }
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Testimonials */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-2 mb-8 bg-white border border-dashed border-gray-200 w-fit rounded-full p-2 ">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
              </svg>
              <span className="text-gray-600 font-medium">Reviews</span>
            </div>

            {/* Heading */}
            <ScrollAnimationSection animationClass="animate-fade-down">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Was Kunden sagen
              </h2>
            </ScrollAnimationSection>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
              Wir liefern nicht nur Content – wir sorgen dafür, dass Unternehmen besser aussehen, schneller wachsen und dauerhaft konsistent bleiben.
            </p>

            {/* Testimonial Cards */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.username}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{testimonial.username}</p>
                      <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="relative">
            <div className="bg-gray-950 text-white p-8 md:p-12 rounded-3xl text-center">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-700 overflow-hidden">
                <img
                  src="/patrik_face.png"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Du möchtest uns Kennenlernen?
              </h3>

              {/* CTA Button */}
              <BookCallWhiteButton />

              {/* Contact Info */}
              <div className="text-gray-400 text-sm">
                <p className="mb-2">Lieber per E-Mail?</p>
                <a
                  href="mailto:infosocialspring@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  infosocialspring@gmail.com
                </a>
              </div>

              {/* Bottom Links */}
              {/* <div className="mt-8 pt-6 border-t border-gray-800 flex justify-center gap-6 text-sm text-gray-500">
                <button className="hover:text-gray-300 transition-colors">Videos Edited</button>
                <button className="hover:text-gray-300 transition-colors">Send Me Samples</button>
                <button className="hover:text-gray-300 transition-colors">Long</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;