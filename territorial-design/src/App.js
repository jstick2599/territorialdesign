
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TerritorialDesign from "./pages/TerritorialDesign";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TerritorialDesign />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
