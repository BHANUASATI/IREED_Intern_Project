import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// @ts-ignore
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Articles from './components/Articles'
import YoutubeSection from './components/YoutubeSection'
import ExamSection from './components/ExamSection'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Featured />
    <YoutubeSection />
    <Articles />

    <ExamSection />
    <Footer />
  </StrictMode>,
)
