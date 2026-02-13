import { BrowserRouter } from "react-router-dom"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"


function App() {

  return (
    <BrowserRouter>
    <Topbar />
    <Navbar />
    <Contact />
    <Footer />

    </BrowserRouter>
  )
}

export default App
