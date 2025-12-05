import AboutSection from "./components/AboutComponent"
import ReadyToScaleSection from "./components/CTAComponent"
import FAQComponent from "./components/FAQComponent"
import Footer from "./components/FooterComponent"
import Hero from "./components/HeroComponent"
import PainPointsSection from "./components/PainPointsComponent"
import ServicesSection from "./components/ServicesComponent"
import TestimonialsSection from "./components/TestimonyComponent"


function App() {


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
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PainPointsSection />
      <TestimonialsSection />
      <FAQComponent />
      <ReadyToScaleSection />
      <Footer />
    </div>
  )
}

export default App
