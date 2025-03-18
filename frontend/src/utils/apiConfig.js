const isProd = process.env.NODE_ENV === "production";

// Set the base URLs (removing the duplicate /api from production URL)
const API_BASE_URL = isProd
  ? "https://blogifybackend-sable.vercel.app"
  : "https://blogifybackend-sable.vercel.app"
//   : "http://localhost:8080";

// Export the base URL directly
export const BASE_URL = API_BASE_URL;

export default BASE_URL;
