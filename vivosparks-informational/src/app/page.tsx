import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer"
import Features from "./components/Features";
import About from "./components/About";


import Characters from "./components/Characters";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <Characters/>
      <Features/>
      <Footer/>
      
      </div>

  );
}



