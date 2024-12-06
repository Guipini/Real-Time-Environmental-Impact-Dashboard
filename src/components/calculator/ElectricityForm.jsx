import { useState } from "react";

export const ElectricityForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    electricity_value: "",
    electricity_unit: "kWh",
    country: "us",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-2">Electricity Usage</label>
        <input
          type="number"
          value={formData.electricity_value}
          onChange={(e) =>
            setFormData({
              ...formData,
              electricity_value: e.target.value,
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
          placeholder="Enter value"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Unit</label>
        <select
          value={formData.electricity_unit}
          onChange={(e) =>
            setFormData({
              ...formData,
              electricity_unit: e.target.value,
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
        >
          <option value="kWh">Kilowatt Hours (kWh)</option>
          <option value="mwh">Megawatt Hours (MWh)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-2">Country</label>
        <input
          type="text"
          value={formData.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              country: e.target.value.toLowerCase(),
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
          maxLength="2"
          placeholder="Enter country code (e.g., us)"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Calculate Carbon Footprint
      </button>
    </form>
  );
};
