import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MainLayout from './components/layout/MainLayout'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<About />} />
           <Route path="contactus" element={<ContactUs />} />
           <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
