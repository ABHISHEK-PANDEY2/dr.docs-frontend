import "./App.css";
import Navbar from "./components/nav";
import Sidenav from "./components/sideNav";
import Content from "./components/content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./components/info";
import File from "./components/file";
import { useEffect, useState } from "react";
import Login from "./login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [patientData, setPatientData] = useState("");
  const [isLoading, setLoading] = useState(false);

  if (!isAuthenticated) {
    return <Login test={setIsAuthenticated} />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidenav />
        <div className="content">
          {!isLoading && (
            <Routes>
              <Route path="info" element={<Info patientData={patientData} />} />
              <Route path="file" element={<File patientFile={patientData} />} />
            </Routes>
          )}
          {isLoading && <h1>Loading..</h1>}
        </div>
      </div>
    </Router>
  );
}

export default App;
