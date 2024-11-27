const config = {
  baseURL: "https://www.carboninterface.com/api/v1",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_CARBON_INTERFACE_API_KEY}`,
    "Content-Type": "application/json",
  },
};

export default config;
