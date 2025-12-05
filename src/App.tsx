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
    <div>
      
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
