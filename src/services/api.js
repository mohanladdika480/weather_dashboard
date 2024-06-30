import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: "https://api.weatherapi.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const apiRequest = async ({
  method,
  url,
  params,
  headers,
  data = null,
  baseURL = null,
}) => {
  const config = {
    method: method,
    url: url,
    params: { ...params, key: "d4ad279c14a04e79aaf121051243006" },
    headers: headers || api.defaults.headers,
    data: data,
    baseURL: baseURL || api.defaults.baseURL,
  };

  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error;
  }
};

export default apiRequest;
