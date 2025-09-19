import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import FaqSection from './components/FaqSection.jsx'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="
          absolute
          -top-28 -left-28
          w-[300px] h-[300px]
          sm:w-[400px] sm:h-[400px]
          md:w-[500px] md:h-[500px]
          bg-gradient-to-b from-green-200 via-lime-300 to-lime-500
          rounded-full blur-[60px] sm:blur-[70px] md:blur-[80px]
          -z-10
        "
        style={{ opacity: 0.8 }}
      ></div>
      {/* <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-b from-[#18486b] via-[#185a8a] to-[#0d253a] rounded-full blur-[80px] -z-10"></div> */}
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <FaqSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
