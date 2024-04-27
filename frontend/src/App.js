import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import pages and components
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/aboutUs"
              element={<AboutUs />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
