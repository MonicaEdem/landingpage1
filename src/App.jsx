import './App.css'
import InnovatorSection from './components/aboutInnovator'
import AboutProducts from './components/AboutProducts'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Products from './components/Products'

function App() {
  return (
    <div className='scroll-smooth overflow-y-auto h-screen'>
    <NavBar />
    <HeroSection />
    <AboutProducts />
     <Products />
   <InnovatorSection /> 
    <Footer />
    </div>
  )
}

export default App
