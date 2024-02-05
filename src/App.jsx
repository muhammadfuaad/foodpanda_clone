import './App.css'
import TopBanner from './components/TopBanner.jsx'
import TopMenu from './components/TopMenu.jsx'
import CitiesSection from './components/sections/CitiesSection.jsx'
import HomepageHero from './components/sections/HomepageHero.jsx'
import FaqSection from './components/sections/FaqSection.jsx'
import Footer from './components/Footer.jsx'
import SecondSection from './components/sections/SecondSection.jsx'
import FifthSection from './components/sections/FifthSection.jsx'

function App() {

  return (
    <>
      <div className='fixed'>
        <TopBanner />
        <TopMenu />
      </div>
      <div className='pt-32'>
        <HomepageHero />
        <SecondSection />
        <CitiesSection />
        <FifthSection />
        <FaqSection />
        <Footer />
      </div>
      
    </>
  )
}

export default App
