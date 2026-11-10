const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL env variable is missing");
}

export const API_URL: string = BASE_URL;