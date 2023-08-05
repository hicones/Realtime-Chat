import axios from "axios";

export function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333",
  });
  return api;
}
