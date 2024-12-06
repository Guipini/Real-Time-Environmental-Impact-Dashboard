import axios from "axios";

export const fetchGlobalEmissionsData = async () => {
  try {
    const response = await axios.get(
      "https://api.climatetrace.org/v6/country/emissions"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch global emissions data");
  }
};
