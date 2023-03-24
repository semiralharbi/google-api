import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

const key = "AIzaSyBeGAbksYhMmZVt9LcwCDDowZ6yrNEvkkI";

const apiClient = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/`,
});

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZER_RESULTS";
};

export async function getLocation(input: string) {
  try {
    const response = await apiClient.get<GoogleGeocodingResponse>(`json?key=${key}&address=${encodeURI(input)}`);
    if (response.data.status !== "OK") {
      throw Error("Could not fetch location");
    }
    const coordinates = response.data.results[0].geometry.location;
    return coordinates;
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Unknown Error");
    }
  }
}

export const loader = new Loader({
  apiKey: key,
  version: "weekly",
});
