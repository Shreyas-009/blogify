const isProd = process.env.NODE_ENV === "production";

// Set the base URLs
const API_BASE_URL = isProd
  ? "https://blogifybackend-sable.vercel.app/api"
  : "http://localhost:8080/api";

// Export the base URL directly
export const BASE_URL = API_BASE_URL;

export default BASE_URL;