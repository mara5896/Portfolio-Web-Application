
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Update from "./pages/Update"
import Create from "./components/Create"
import Contact from "./pages/Contact"
import Report from "./components/Report"

import { Route, Routes } from "react-router-dom"


function App(){
  return(
  <>
  <Header />
  <div className="container">
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/create" element={<Create />}/>
     <Route path="/:id" element={<Update />} />
     <Route path="/contact" element={<Contact />} />
       {/* <Route path="/report" element={<Report />} /> */}
  </Routes>
  </div>
  </>
  )
}

export default App

