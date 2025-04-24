import Nav from './Components/Nav.jsx'
import LandingHero from './Components/LandingHero.jsx'
import VenueSection from './Components/VenueSection.jsx'
import ReachGTBIT from './Components/ReachGTBIT.jsx'
import Footer from './Components/Footer.jsx'
import ScrollVelocity from './Components/ScrollVelocity.jsx'
import FAQSection from './Components/FAQSection.jsx'
import OrganisersList from './Components/OrganisersList.jsx'
import SponsorsSection from './Components/SponsorsSection.jsx'
import PrizeSection from './Components/PrizeSection.jsx'

function App() {

  return (
    <div className='w-screen h-auto'>
      <Nav />
      <LandingHero />
      <ScrollVelocity
        texts={['Hacknova 2k25', 'GTBIT']}
        // velocity={velocity} 
        className="custom-scroll-text"
      />
      <PrizeSection />
      <SponsorsSection />
      <OrganisersList />
      <FAQSection />
      <VenueSection />
      <ReachGTBIT />
      
      <Footer />
    </div>
  )
}

export default App
