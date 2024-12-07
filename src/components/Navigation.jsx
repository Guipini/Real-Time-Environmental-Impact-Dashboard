import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const EmissionsContext = createContext();

export function EmissionsProvider({ children }) {
  const [emissionsHistory, setEmissionsHistory] = useState([]);

  const addEmission = (emission) => {
    setEmissionsHistory((prev) => [
      ...prev,
      {
        date: new Date().toISOString(),
        ...emission,
      },
    ]);
  };

  return (
    <EmissionsContext.Provider value={{ emissionsHistory, addEmission }}>
      {children}
    </EmissionsContext.Provider>
  );
}

export const useEmissions = () => useContext(EmissionsContext);

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold text-green-600 cursor-pointer hover:text-green-700"
        >
          Eco Impact Dashboard
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/calculator")}
            className="px-4 py-2 rounded hover:bg-gray-100"
          >
            Calculator
          </button>
          <button
            onClick={() => navigate("/tracker")}
            className="px-4 py-2 rounded hover:bg-gray-100"
          >
            Tracker
          </button>
          <button
            onClick={() => navigate("/resources")}
            className="px-4 py-2 rounded hover:bg-gray-100"
          >
            Resources
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
