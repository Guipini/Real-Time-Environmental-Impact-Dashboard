import { useState } from "react";

export const VehicleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    distance_value: "",
    vehicle_model_id: "c4c45dd6-e85d-4ef1-bb57-47441c4c0437",
    distance_unit: "km",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-2">Amount/Distance</label>
        <input
          type="number"
          value={formData.distance_value}
          onChange={(e) =>
            setFormData({
              ...formData,
              distance_value: e.target.value,
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
          value={formData.distance_unit}
          onChange={(e) =>
            setFormData({
              ...formData,
              distance_unit: e.target.value,
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
        >
          <option value="km">Kilometers</option>
          <option value="mi">Miles</option>
        </select>
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
