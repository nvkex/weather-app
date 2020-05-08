/**
 * This script gets all the information AccuWeather API.
 * API Key is required and is stored in variable 'key'.
 * City key is needed to obtain weather information about that city.
 * Call getCity first and the promise returned contains the city key
 * getWeather is then called. It returns an object with weather info.
 */

const key = "w72iF1NQkfCYTd6Fp4GnXkc5mpYI61WA";


/**
 * Get weather info from city key
 */
const getWeather = async(id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

/**
 * Get city key from acuweather api
 */
const getCity = async (city) => {
    
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};