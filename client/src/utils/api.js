// api.js
const API_URL = 'https://api.weather.gov';

export const fetchForecastData = async (latitude, longitude) => {
    try {
        const response = await fetch(`${API_URL}/points/${latitude},${longitude}`);
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        const forecastURL = data.properties.forecast; // Extract forecast URL
        const forecastResponse = await fetch(forecastURL); // Fetch forecast data
        const forecastData = await forecastResponse.json(); // Parse forecast data
        console.log('API Response:', forecastData);
        return forecastData.properties;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        throw error;
    }
};

// const LIGHT_URL = 'https://services.swpc.noaa.gov/json/'

// export const fetchLightsData = async (OPTION) => {
//     try {
//         const response = await fetch(`${LIGHT_URL}/${OPTION}`)
//         if (!response.ok) {
//             throw new Error('Failed to fetch light data')
//         }
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.error('Error fetching light data', error)
//         throw error
//     }
// }



