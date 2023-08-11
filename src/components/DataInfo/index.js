import React, { useState, useEffect } from 'react';
import axios from 'axios';

//apiKey found in Email
const apiKey = '29db3a3ee15822269fab7096da31126a';

const latitude = 33.777314545205066;
const longitude = -84.39585801919675;

//change API key to apiKey
//add unit parameter to get Fahrenheit instead of default Kelvin
//if you want in Celcius, change 'impertial' to 'metric'
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const DataInfo = () => {
    //useState hook to create state object and function to update it
    const [weather, setWeather] = useState(null);

    //create loading state, will be boolean
    const [loading, setLoading] = useState(true);

    //useEffect hook to make API call
    useEffect(() => { 

        setLoading(true); //Start Loading

        axios.get(apiURL)
        //.then is a promise that will run when the API call is complete
        //A promise is a function that will run when the API call is complete
        .then((response) => {
            setWeather(response.data);

            setLoading(false); //Stop Loading
        })
        //Error handling for API call
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setLoading(false); //Stop Loading
        });
    }, []); //empty array means it will only run once

    //More data manipulation methods
    const filteredWeather = weather ? weather.list.filter(item => item.main.temp >= 65) : null; //it filters the weather list to only show the weather that is greater than 65 degrees

    const aggregatedWeather = weather ? weather.list.reduce((sum, item) => sum + item.main.temp, 0) / weather.list.length : null; //it adds up all the temperatures and divides it by the length of the list to get the average temperature

    // const sortedWeather = weather ? weather.list.sort((a, b) => a.main.temp - b.main.temp) : null; //it sorts the weather list from least to greatest temperature. a and b are the current item and the next item in the list
    
    const sortedWeather = weather ? weather.list.toSorted((a, b) => a.main.temp - b.main.temp) : null; //it sorts the weather list from least to greatest temperature. a and b are the current item and the next item in the list



    return (
        <div>
            {loading ? (
                <p>Loading weather data...</p> //if loading is true, show this
            ): weather ? (
                <div>
                    <h1>Weather Forecast</h1>
                    <ul>
                        {weather.list.map((item, index) => ( //map is a function that loops through an array and returns a new array. It takes in a function as a parameter that will run for each item in the array
                            //item is the current item in the array
                            //index is the current index of the item in the array
                            <li key={index}>
                                <strong>Date:</strong> {new Date(item.dt * 1000).toLocaleDateString()}<br />
                                <strong>Time:</strong> {new Date(item.dt * 1000).toLocaleTimeString()}<br />
                                <strong>Temperature:</strong> {item.main.temp} F<br />
                                <strong>Feels Like:</strong> {item.main.feels_like} F<br />
                                <strong>Humidity:</strong> {item.main.humidity}%<br />
                                <strong>Description:</strong> {item.weather[0].description} <br />
                                <strong> Precipitation:</strong> {item.pop * 100}%<br />
                                <hr />
                            </li>
                        ))}
                    </ul>

                    {/* Filtered data */}
                    <h1>Filtered Weather Forecast</h1>
                    <ul>
                        {filteredWeather.map((item, index) => (
                            <li key={index}>
                                <strong>Date:</strong> {new Date(item.dt * 1000).toLocaleDateString()}<br />
                                <strong>Time:</strong> {new Date(item.dt * 1000).toLocaleTimeString()}<br />
                                <strong>Temperature:</strong> {item.main.temp} F<br />
                                <strong>Feels Like:</strong> {item.main.feels_like} F<br />
                                <strong>Humidity:</strong> {item.main.humidity}%<br />
                                <strong>Description:</strong> {item.weather[0].description} <br />
                                <strong> Precipitation:</strong> {item.pop * 100}%<br />
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : ( //if weather is null, show this. Remember it is a tertiary operator
                <p>Failed to fetch data...</p> //change from loading to failed to fetch since this is the error message
            )}
            
            {/* Aggregated data */}
            <h1>Average Temperature: {aggregatedWeather.toFixed(1)} F</h1>

            {/* Sorted data */}
            <h1>Sorted Weather Forecast</h1>
            <ul>
                {sortedWeather.map((item, index) => (
                    <li key={index}>
                        <strong>Date:</strong> {new Date(item.dt * 1000).toLocaleDateString()}<br />
                        <strong>Time:</strong> {new Date(item.dt * 1000).toLocaleTimeString()}<br />
                        <strong>Temperature:</strong> {item.main.temp} F<br />
                        <strong>Feels Like:</strong> {item.main.feels_like} F<br />
                        <strong>Humidity:</strong> {item.main.humidity}%<br />
                        <strong>Description:</strong> {item.weather[0].description} <br />
                        <strong> Precipitation:</strong> {item.pop * 100}%<br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default DataInfo;