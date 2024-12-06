import { fetchGlobalEmissionsData } from "@/services/api/climateTraceApiGlobal";
import { useEffect } from "react";

const GlobalEmissions = ({ onEmissionsUpdate }) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchGlobalEmissionsData();
        const co2Emissions = data.emissions.co2e_100yr;
        const formattedEmissions = `${(co2Emissions / 1000000000).toFixed(1)}B`;
        onEmissionsUpdate(formattedEmissions);
      } catch (error) {
        console.error("Error:", error);
        onEmissionsUpdate("N/A");
      }
    };

    loadData();
  }, [onEmissionsUpdate]);

  return null;
};

export default GlobalEmissions;
