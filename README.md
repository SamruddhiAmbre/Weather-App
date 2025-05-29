# 🌦️ Weather App

A minimal and aesthetic weather app built with React that shows real-time weather data using the OpenWeatherMap API.

---

## ✨ Features

- 🌤️ Real-time weather data via OpenWeatherMap API  
- 🗺️ Search weather by city name  
- 🌙 Toggle between light and dark mode  
- 🌡️ Displays temperature, wind speed, and weather conditions  
- 🕰️ Clean, responsive user interface  

---

## 🛠️ Built With

- **React** – Frontend library for building UI  
- **HTML5** – Markup structure  
- **CSS3** – Styling and responsive design  
- **JavaScript** – Logic and API handling  
- [**OpenWeatherMap API**](https://openweathermap.org/api) – For weather data  

---

## 📁 Folder Structure
```
src/
├── assets/ # Images and icons for different weather types
│ ├── cloudy.png
│ ├── drizzle.png
│ ├── rain.png
│ ├── snow.png
│ ├── sunny.png
│ ├── wind.png
│ └── search.jpg
├── components/
│ ├── Weather.jsx
│ └── Weather.css
├── App.jsx
├── index.css
├── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- A modern web browser
- API key from [OpenWeatherMap](https://openweathermap.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
 2. **Install dependencies:**
    ```bash
     npm install
3. Set up your API key:
   Create a .env file in the root and add your OpenWeatherMap API key:
   ```bash
   VITE_API_KEY=your_api_key_here
   ```
    Then update the fetch URL in your code to:
   ```bash
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
4. Run the development server
   ```bash
   npm run dev
   
### License
This project is licensed under the MIT License.
See LICENSE.txt for details.
