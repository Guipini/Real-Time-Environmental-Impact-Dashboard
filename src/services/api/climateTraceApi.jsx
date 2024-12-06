export const fetchGlobalEmissionsData = async ({
  since = 2010,
  to = 2020,
  sector,
  subsector,
  continents = [],
  groups = [],
  countries = [],
} = {}) => {
  try {
    let url = new URL("https://api.climatetrace.org/v6/country/emissions");
    let params = new URLSearchParams();

    // Add optional parameters if provided
    if (since) params.append("since", since);
    if (to) params.append("to", to);
    if (sector) params.append("sector", sector);
    if (subsector) params.append("subsector", subsector);
    if (continents.length > 0)
      params.append("continents", continents.join(","));
    if (groups.length > 0) params.append("groups", groups.join(","));
    if (countries.length > 0) params.append("countries", countries.join(","));

    url.search = params.toString();

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch global emissions data: ${error.message}`);
  }
};
