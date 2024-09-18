import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
        },
    };

    console.log('Request URL:', url);
    console.log('Request Headers:', options.headers);

    const response = await axios.get(url, options);

    if (response.status !== 200) {
        throw new Error("Failed to fetch data from TMDB: " + response.statusText);
    }

    return response.data;
};
