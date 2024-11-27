import config from "./config";
import axios from "axios";

const api = axios.create(config);

// Error handling utility
const handleError = (error) => {
  const errorMessage = error.response?.data?.error || "An error occurred";
  throw new Error(errorMessage);
};

export const carbonApi = {
  // Calculate emissions for vehicle
  async calculateVehicleEmissions({
    distance_value,
    vehicle_model_id,
    distance_unit = "km",
  }) {
    try {
      const response = await api.post("/estimates", {
        type: "vehicle",
        distance_value,
        vehicle_model_id,
        distance_unit,
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  // Calculate emissions for flight
  async calculateFlightEmissions({ passengers, legs }) {
    try {
      const response = await api.post("/estimates", {
        type: "flight",
        passengers,
        legs,
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  // Calculate electricity usage emissions
  async calculateElectricityUsageEmissions({
    electricity_value,
    electricity_unit = "kWh",
    country = "us",
    state = null,
  }) {
    try {
      const response = await api.post("/estimates", {
        type: "electricity",
        electricity_value,
        electricity_unit,
        country,
        state,
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  // Get available vehicle makes
  async getVehicleMakes() {
    try {
      const response = await api.get("/vehicle_makes");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  // Get vehicle models for a specific make
  async getVehicleModels(make_id) {
    try {
      const response = await api.get(
        `/vehicle_makes/${make_id}/vehicle_models`
      );
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  //   // Get global stats
  //   async getGlobalStats() {
  //     try {
  //       const response = await api.get("/estimates/total");
  //       return response.data;
  //     } catch (error) {
  //       handleError(error);
  //     }
  //   },
};
