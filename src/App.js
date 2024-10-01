import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes  } from "react-router-dom";
import MobileDev from "./components/MobileDev/MobileDev";
import FrontendDev from "./components/FrontendDev/FrontendDev";
import BackendDev from "./components/BackendDev/BackendDev";
import CmmDev from "./components/CmmDev/CmmDev";
// import Slide from "./components/Slider/Slide/Slide";
// import Page from "./components/Page/Page";


function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Header />
      {/* <Slide/> */}
      {/* <Page/> */}
       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/MobileDev" element={<MobileDev/>}/>
        <Route path="/FrontendDev" element={<FrontendDev/>}/>
        <Route path="/BackendDev" element={<BackendDev/>}/>
        <Route path="/CmmDev" element={<CmmDev/>}/>
      </Routes>
    
      <Footer/>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
