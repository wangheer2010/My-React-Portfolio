import React from 'react';
import Header from './components/Header/Header';
import NavTabs from './components/Nav/Nav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <NavTabs></NavTabs>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;