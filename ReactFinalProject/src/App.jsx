import { BrowserRouter } from "react-router-dom"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"


function App() {

  return (
    <BrowserRouter>
    <Topbar />
    <Navbar />
    <Home />
    <Footer />

    </BrowserRouter>
  )
}

export default App
