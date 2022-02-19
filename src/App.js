import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup, Home, Signin, Dashboard, Invite } from "./Pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invite" element={<Invite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
