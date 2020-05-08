/**
 * This handles DOM Manipulation
 * Calls Async functions from forecast.js
 */

 //Document objects
 const cityForm = document.querySelector('form');
 const card = document.querySelector('.card');
 const details = document.querySelector('.details');

 //Updating the index page with new information
 const updateUI = (data) => {
    
    //destructure properties
    const { cityDetails, cityWeather } = data; 

    //update details template
    details.innerHTML = `
        <h5 class = "my-3">${cityDetails.EnglishName}</h5>
        <div class = "my-3">${cityWeather.WeatherText}</div>
        <div class = "display-4 my-4">
                <span>${cityWeather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
        </div>
    `;

    //Toggle card display
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

 };

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
        .then(data => updateUI(data))
        .catch(err => console.log(err));

 });