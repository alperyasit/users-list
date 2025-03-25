import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
