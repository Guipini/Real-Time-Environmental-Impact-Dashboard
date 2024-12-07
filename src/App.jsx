import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Calculator from "@/components/Calculator";
import Tracker from "@/components/Tracker";
import { EmissionsProvider } from "@/components/Navigation";
import Resources from "./components/Resources";

function App() {
  return (
    <EmissionsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </EmissionsProvider>
  );
}

export default App;
