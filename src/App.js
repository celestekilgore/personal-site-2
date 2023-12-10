import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';
import ProjectList from './ProjectList';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      {/* <Skills></Skills> */}
      <ProjectList></ProjectList>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
