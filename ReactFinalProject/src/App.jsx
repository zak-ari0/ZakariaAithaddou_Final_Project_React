import { BrowserRouter } from "react-router-dom"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"


function App() {

  return (
    <BrowserRouter>
    <Topbar />
    <Navbar />
    <Home />
    </BrowserRouter>
  )
}

export default App
