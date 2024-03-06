import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from './components/Services';

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
