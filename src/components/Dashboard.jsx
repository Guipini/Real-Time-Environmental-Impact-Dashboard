import { useState, useEffect } from "react";
import {
  BarChart,
  LineChart,
  Activity,
  Globe,
  BookOpen,
  Share2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApiCall } from "@/services/api/useApiCall";
import { carbonApi } from "@/services/api/carbonApi";
import GlobalEmissions from "./globalEmission";

const Dashboard = () => {
  const {
    data,
    loading,
    error,
    execute: calculateEmissions,
  } = useApiCall(carbonApi.calculateVehicleEmissions);

  const [globalStats, setGlobalStats] = useState({
    emissions: "Loading...",
    impact: "0",
    resources: "24",
    community: "128",
  });

  const handleCalculate = async (e) => {
    e.preventDefault();
    const selectedActivity = document.querySelector("select").value;

    switch (selectedActivity) {
      case "vehicle":
        // Default calculation for a typical car journey of 100km
        await calculateEmissions({
          distance_value: 100,
          vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9", // Default vehicle (medium car)
          distance_unit: "km",
        });
        break;

      case "flight":
        // We'll add flight calculations when implementing the full calculator page
        alert("Please use the Calculator page for flight emissions");
        break;

      case "electricity":
        // We'll add electricity calculations when implementing the full calculator page
        alert("Please use the Calculator page for energy emissions");
        break;

      default:
        alert("Please select an activity");
    }
  };

  const handleEmissionsUpdate = (emissionsValue) => {
    setGlobalStats((prev) => ({
      ...prev,
      emissions: emissionsValue,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalEmissions onEmissionsUpdate={handleEmissionsUpdate} />
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-green-600">
            Eco Impact Dashboard
          </h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded hover:bg-gray-100">
              Calculator
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100">
              Tracker
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100">
              Resources
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Global Emissions
              </CardTitle>
              <Globe className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{globalStats.emissions}</div>
              <p className="text-xs text-gray-500">metric tons CO2</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Your Impact</CardTitle>
              <Activity className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{globalStats.impact}</div>
              <p className="text-xs text-gray-500">kg CO2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resources</CardTitle>
              <BookOpen className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{globalStats.resources}</div>
              <p className="text-xs text-gray-500">articles available</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Community</CardTitle>
              <Share2 className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{globalStats.community}</div>
              <p className="text-xs text-gray-500">active pledges</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Section */}
          <Card>
            <CardHeader>
              <CardTitle>Carbon Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <select className="w-full p-2 border rounded">
                  <option>Select Activity</option>
                  <option value="vehicle">Driving</option>
                  <option value="flight">Flying</option>
                  <option value="electricity">Home Energy</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Distance/Usage"
                    className="p-2 border rounded"
                  />
                  <button
                    onClick={handleCalculate}
                    disabled={loading}
                    className="bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300"
                  >
                    {loading ? "Calculating..." : "Calculate"}
                  </button>
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                {data && (
                  <div className="mt-4 p-4 bg-gray-50 rounded">
                    <h4 className="font-semibold">Results:</h4>
                    <p>
                      Carbon Emissions: {data.data.attributes.carbon_kg} kg CO2
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Tracking Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Emissions Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded">
                <p className="text-gray-500">
                  Emissions trend chart will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
