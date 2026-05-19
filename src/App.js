
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Update from "./pages/Update"
import Form from "./components/Form"
import Contact from "./pages/Contact"
import Chat from "./components/Chat"

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
    <Route path="/form" element={<Form />}/>
     <Route path="/:id" element={<Update />} />
     <Route path="/contact" element={<Contact />} />
       {/* <Route path="/chat" element={<Chat />} /> */}
  </Routes>
  </div>
  </>
  )
}

export default App

