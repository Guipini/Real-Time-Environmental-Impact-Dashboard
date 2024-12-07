import { useState } from "react";

export const VehicleForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      distance: e.target.distance.value,
      unit: e.target.unit.value,
      vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9",
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Distance</label>
          <input
            type="number"
            name="distance"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Unit</label>
          <select name="unit" className="w-full p-2 border rounded">
            <option value="km">Kilometers</option>
            <option value="mi">Miles</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};
