import { useNavigate } from 'react-router-dom'
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import HowItWorks from '../components/landing/HowItWorks'
import DemoPreview from '../components/landing/DemoPreview'
import Footer from '../components/landing/Footer'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar navigate={navigate} />
      <main>
        <HeroSection navigate={navigate} />
        <FeaturesSection />
        <HowItWorks />
        <DemoPreview />
      </main>
      <Footer />
    </div>
  )
}
