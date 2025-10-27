import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import experienceBgVideo from './assets/3129671-uhd_3840_2160_30fps.mp4'

const AppContent = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="relative min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        {isHomePage ? (
          <div className="h-full w-full bg-gray-950" />
        ) : (
          <>
            <video
              className="h-full w-full object-cover"
              src={experienceBgVideo}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gray-950/75 backdrop-blur-[1px]" />
          </>
        )}
      </div>

      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
