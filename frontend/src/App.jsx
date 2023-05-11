import { Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./contexts/WeatherContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Packpage from "./pages/Packpage/Packpage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <WeatherProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packing" element={<Packpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </WeatherProvider>
    </div>
  );
}

export default App;
