"use strict"

document.addEventListener('DOMContentLoaded', weatherApi);

async function weatherApi() {
 try {
  const base = await fetch `https://api.openweathermap.org/data/2.5/weather?q=st. john's, newfoundland&appid=774150fdf98db0b4a2d36904c6b51a62&units=metric`;
  const response = await base.json();
  document.querySelector('#location').innerHTML = `Location: ${response.name}`;
  document.querySelector('#currentTemp').innerHTML = `Current Temp: ${Math.round(parseFloat(response.main.temp))} &degC`;
  document.querySelector('#currentFeelsLike').innerHTML = `Feels Like: ${Math.round(parseFloat(response.main.feels_like))} &degC`;
  document.querySelector('#description').innerHTML = `Current Weather: ${response.weather[0].description}`;
  document.querySelector('#weatherImage').src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
 } catch (error) {
  console.error(error);
 }
};