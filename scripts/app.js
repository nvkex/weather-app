/**
 * This handles DOM Manipulation
 * Calls Async functions from forecast.js
 */

 const cityForm = document.querySelector('form');

 const updateCity = async (city) =>{
    
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails : cityDetails,
        cityWeather: weather 
    };
 };

 cityForm.addEventListener('submit', (e) => {

    //prevent default actions
    e.preventDefault();

    //Get city name and clear input fields
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));

 });