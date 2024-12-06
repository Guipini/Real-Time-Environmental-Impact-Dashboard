import { useState } from "react";

export const FlightForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    passengers: 1,
    legs: [
      {
        departure_airport: "",
        destination_airport: "",
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-2">Number of Passengers</label>
        <input
          type="number"
          value={formData.passengers}
          onChange={(e) =>
            setFormData({
              ...formData,
              passengers: parseInt(e.target.value),
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
          min="1"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Departure Airport (IATA)</label>
        <input
          type="text"
          value={formData.legs[0].departure_airport}
          onChange={(e) =>
            setFormData({
              ...formData,
              legs: [
                {
                  ...formData.legs[0],
                  departure_airport: e.target.value.toUpperCase(),
                },
              ],
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
          maxLength="3"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Destination Airport (IATA)</label>
        <input
          type="text"
          value={formData.legs[0].destination_airport}
          onChange={(e) =>
            setFormData({
              ...formData,
              legs: [
                {
                  ...formData.legs[0],
                  destination_airport: e.target.value.toUpperCase(),
                },
              ],
            })
          }
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
          maxLength="3"
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
