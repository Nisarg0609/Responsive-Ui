import './App.css';
import { Blog, Brand, Cta, Features, Footer, Header, Navbar, Possibility, WhatGPT3 } from './components';

function App() {
  return (
    <div className="">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
