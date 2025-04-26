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
import HackathonSchedule from './Components/HackathonSchedule.jsx'
import Orb from './Components/Orb.jsx'
import FlowingMenu from './Components/FlowingMenu.jsx'

const demoItems = [
  { link: '#', text: 'Web3 & Blockchain', image: './Tracks/web3.avif' },
  { link: '#', text: 'Artificial Intelligence & Machine Learning', image: './Tracks/ai.avif' },
  { link: '#', text: 'Internet Of Things', image: './Tracks/iot.avif' },
  { link: '#', text: 'Web & Android Development', image: './Tracks/web_android.avif' },
  { link: '#', text: 'AR/VR', image: './Tracks/arvr.avif' },
  { link: '#', text: 'Open Innovation', image: './Tracks/open.avif' }
];

function App() {
  return (
    <div className='w-screen h-auto scroll-smooth'> {/* <-- important */}
      <Nav />

      {/* Sections with IDs */}
      <section id="home">
        <LandingHero />
      </section>

      <section id="tracks" className='relative h-screen'>
        <h1 className='text-center font-bold text-3xl md:text-4xl  text-red-500 font-bebas'>TRACKS</h1>
        <FlowingMenu items={demoItems} />
      </section>

      <section id="schedule">
        <HackathonSchedule />
      </section>

      <section id="circle">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </section>

      <section id="prizes">
        <PrizeSection />
      </section>

      <section id="sponsors">
        <SponsorsSection />
      </section>

      <section id="team">
        <OrganisersList />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="venue">
        <VenueSection />
      </section>

      <section id="reach">
        <ReachGTBIT />
      </section>

      <ScrollVelocity texts={['Hacknova 2k25', 'GTBIT']} className="custom-scroll-text" />
      <Footer />
    </div>
  )
}

export default App;
