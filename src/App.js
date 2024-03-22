import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
