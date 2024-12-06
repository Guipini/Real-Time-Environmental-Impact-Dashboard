import { useState } from "react";
import { useApiCall } from "@/services/api/useApiCall";
import { carbonApi } from "@/services/api/carbonApi";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "./Navigation";
import { VehicleForm } from "./calculator/VehicleForm";
import { FlightForm } from "./calculator/FlightForm";
import { ElectricityForm } from "./calculator/ElectricityForm";
import { ResultCard } from "./calculator/ResultCard";

const Calculator = () => {
  const [activityType, setActivityType] = useState("vehicle");
  const [result, setResult] = useState(null);

  const {
    loading,
    error,
    execute: calculateEmissions,
  } = useApiCall(async (formData) => {
    switch (activityType) {
      case "vehicle":
        return await carbonApi.calculateVehicleEmissions(formData);
      case "flight":
        return await carbonApi.calculateFlightEmissions(formData);
      case "electricity":
        return await carbonApi.calculateElectricityUsageEmissions(formData);
      default:
        throw new Error("Invalid activity type");
    }
  });

  const handleSubmit = async (formData) => {
    const result = await calculateEmissions(formData);
    setResult(result);
  };

  const renderForm = () => {
    switch (activityType) {
      case "vehicle":
        return <VehicleForm onSubmit={handleSubmit} />;
      case "flight":
        return <FlightForm onSubmit={handleSubmit} />;
      case "electricity":
        return <ElectricityForm onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Carbon Footprint Calculator</h1>
          <h2 className="text-2xl mt-2">Calculate Your Impact</h2>
          <p className="text-gray-600 mt-4">
            Use our detailed calculator to measure your carbon footprint across
            different activities.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Activity Type</CardTitle>
          </CardHeader>
          <CardContent>
            <select
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
            >
              <option value="vehicle">Vehicle Travel</option>
              <option value="flight">Flight</option>
              <option value="electricity">Electricity Usage</option>
            </select>
          </CardContent>
        </Card>

        {renderForm()}

        {loading && <div className="text-gray-600">Calculating...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
};

export default Calculator;
