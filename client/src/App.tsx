import { HopeProvider } from '@hope-ui/solid';
import { Component, lazy } from 'solid-js';
import { currentLang } from './store';

const Header = lazy(() => import("./components/Header/Header"));
const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const Services = lazy(() => import("./components/Services/Services"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

import "./styles.css";
import { handleLibraryChange } from './utils';

const App: Component = () => {
  handleLibraryChange(currentLang());

  return (
    <HopeProvider>
      <div class="main-container">
        <Header />
        <Homepage />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HopeProvider>
  );
};

export default App;
