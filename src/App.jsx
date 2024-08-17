import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import UpcomingEventsPage from './pages/UpcomingEventsPage'
import CarouselPage from './pages/CarouselPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import FooterPage from './pages/FooterPage'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <UpcomingEventsPage />
      <CarouselPage />
      <TeamPage />
      <ContactPage />
      <FooterPage />
    </>
  )
}

export default App
