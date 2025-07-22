
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Portofolio from './components/Portofolio';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import "./components/global.css";
import Services from './components/services';


function App() {
  

  return (
      <>
          <Header />
          <HeroSection />
      <Services />
      <Steps />
      <Testimonials />
      <Portofolio />
      <Team />
      <Pricing/>
      </>
  );
}

export default App
