
import BackgroundComponent from "./components/BackgroundComponent"
import ReadyToScaleSection from "./components/CTAComponent"
import FAQComponent from "./components/FAQComponent"
import Footer from "./components/FooterComponent"
import Hero from "./components/HeroComponent"
import Navbar from "./components/NavBarComponent"
import PainPointsSection from "./components/PainPointsComponent"
import ServicesSection from "./components/ServicesComponent"
import TestimonialsSection from "./components/TestimonyComponent"


function App() {


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundComponent />
      <Navbar />
      <Hero />
      <ServicesSection />
      <PainPointsSection />
      <TestimonialsSection />
      <FAQComponent />
      <ReadyToScaleSection />
      <Footer />
    </div>
  )
}

export default App
