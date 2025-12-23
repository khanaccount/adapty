import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Stats from './components/Stats'
import SDKIntegration from './components/SDKIntegration'
import SDKPlatforms from './components/SDKPlatforms'
import FeatureCards from './components/FeatureCards'
import Testimonials from './components/Testimonials'
import Enterprise from './components/Enterprise'
import G2Awards from './components/G2Awards'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <SDKIntegration />
      <SDKPlatforms />
      <FeatureCards />
      <Testimonials />
      <Enterprise />
      <G2Awards />
      <FinalCTA />
    </div>
  )
}

export default App
