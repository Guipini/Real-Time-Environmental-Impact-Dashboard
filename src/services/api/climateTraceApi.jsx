export const fetchGlobalEmissionsData = async () => {
  try {
    const response = await fetch(
      "https://api.climatetrace.org/v6/country/emissions"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch global emissions data");
  }
};
