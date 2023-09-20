import React, { FC } from 'react';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import { ToastContainer } from 'react-toastify';
import Skills from './components/sections/Skills';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
