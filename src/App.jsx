import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import './styles/colors.scss';
import './styles/contact.scss';
import './styles/Header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/mediaquery.scss';

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from './components/Services';
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />

          <Route path='*' element={<div>Page not found 404 !!</div>} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
