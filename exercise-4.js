var todaysWeather = {
    temperature : {
        high : 25,
        low : 22
    },
    conditions : "rainy",
    astronomy : {
        sunrise : "5:30 AM",
        sunset : "6:30 PM"
    }
}


// Log today's high temperature to the console.
console.log("Today's high temperature:", todaysWeather.temperature.high);

// Log today's low temperature to the console.
console.log("Today's low temperature:",todaysWeather.temperature.low);

// Log today's conditions to the console.
console.log("Today's conditions:", todaysWeather.conditions);

// Log today's sunrise time to the console.
console.log("Today's sunrise time:", todaysWeather.astronomy.sunrise);

// Use string template literals to create a more detailed description of today's weather.
console.log("Today's weather is perfect with" + todaysWeather.conditions + " conditions. The high temperature will be " + todaysWeather.temperature.high + " degrees C , and the low will be " + todaysWeather.temperature.low + " degrees. The sun will rise at " + todaysWeather.astronomy.sunrise + "and set at " + todaysWeather.astronomy.sunset + ".");