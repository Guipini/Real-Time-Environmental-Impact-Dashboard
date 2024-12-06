import {
  PieChart,
  Calendar,
  Activity,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

// Emissions Summary Component
const EmissionsSummary = ({ totalEmissions, trend, comparisonPeriod }) => {
  const isReduction = trend < 0;
  const TrendIcon = isReduction ? TrendingDown : TrendingUp;
  const trendColor = isReduction ? "text-green-600" : "text-red-600";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Monthly Summary</CardTitle>
        <Activity className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-3xl font-bold">{totalEmissions} kg CO2</p>
            <p className="text-sm text-gray-500">Total emissions this month</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendIcon className={`h-5 w-5 ${trendColor}`} />
            <span className={`font-medium ${trendColor}`}>
              {Math.abs(trend)}% {isReduction ? "decrease" : "increase"}
            </span>
            <span className="text-sm text-gray-500">vs {comparisonPeriod}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Emissions Breakdown Component
const EmissionsBreakdown = () => {
  const categories = [
    { category: "Transportation", amount: 450, percentage: 45 },
    { category: "Household", amount: 300, percentage: 30 },
    { category: "Food", amount: 150, percentage: 15 },
    { category: "Shopping", amount: 100, percentage: 10 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Emissions by Category
        </CardTitle>
        <PieChart className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{category.category}</span>
                <span className="text-gray-500">{category.amount} kg CO2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Emissions History Component
const EmissionsHistory = () => {
  const emissionsData = [
    { date: "2024-03-01", amount: 25.5, activity: "Transportation" },
    { date: "2024-03-02", amount: 15.2, activity: "Household" },
    { date: "2024-03-03", amount: 30.0, activity: "Transportation" },
    { date: "2024-03-04", amount: 12.8, activity: "Food" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Recent Activities
        </CardTitle>
        <Calendar className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emissionsData.map((emission, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{emission.activity}</p>
                <p className="text-sm text-gray-500">
                  {new Date(emission.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{emission.amount} kg CO2</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Tracker Component
const Tracker = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Emissions Tracker</h1>
          <p className="text-gray-600">
            Monitor and analyze your carbon footprint over time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EmissionsSummary
            totalEmissions={1000}
            trend={-15}
            comparisonPeriod="last month"
          />
          <EmissionsBreakdown />
          <div className="lg:col-span-2">
            <EmissionsHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
