
import BackgroundComponent from "./components/BackgroundComponent"
import ReadyToScaleSection from "./components/CTAComponent"
import FAQComponent from "./components/FAQComponent"
import Footer from "./components/FooterComponent"
import Hero from "./components/HeroComponent"
import Navbar from "./components/NavbarComponent"
import PainPointsSection from "./components/PainPointsComponent"
import ServicesSection from "./components/ServicesComponent"
import TestimonialsSection from "./components/TestimonyComponent"
import { Analytics } from "@vercel/analytics/react"


function App() {


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Analytics />
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
