var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// Log today's weather conditions to the console.
console.log("Today's weather conditions:", weatherForecast[0].conditions);

// Log Saturday's high temperature to the console.
console.log("Saturday's high temperature:", weatherForecast[1].temperature.high);

// Log Saturday's sunrise time to the console.
console.log("Saturday's sunrise time:", weatherForecast[1].astronomy.sunrise);

// Log Saturday's condition to the console.
console.log("Saturday's condition:", weatherForecast[1].conditions);

// Log Sunday's sunset time to the console.
console.log("Sunday's sunset time:", weatherForecast[2].astronomy.sunset);

// Use string template literals to build few sentences about the weather forecast for Sunday. 
console.log("Sunday's weather is expected to be " + weatherForecast[2].conditions + " with a high of " + weatherForecast[2].temperature.high + " degrees and a low of " + weatherForecast[2].temperature.low + " degrees. The sun will rise at " + weatherForecast[2].astronomy.sunrise + " and set at " + weatherForecast[2].astronomy.sunset + ".");