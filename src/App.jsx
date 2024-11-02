import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Home from "./components/Pages/Home/Home";
import Setting from "./components/Pages/Setting/Setting";
import SingUpForm from "./components/SingUpForm/SingUpForm";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

};

const App = () => {
  const location = useLocation(); // Отримуємо current location
  const showHeaderFooter = !['/', '/register'].includes(location.pathname); // Використовуємо location.pathname

  return (
    <div>
      {showHeaderFooter && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<SingUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

const MainApp = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default MainApp;
