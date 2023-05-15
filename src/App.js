import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import TermPage from "./pages/TermPage";
import PrivacyPage from "./pages/PrivacyPage";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TermPage />} />
        <Route path="/terms" element={<TermPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
