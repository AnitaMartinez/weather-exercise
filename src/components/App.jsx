import "../scss/App.scss";
import WeatherInfo from "./WeatherInfo";

const weatherInfo = {
  city: "Barcelona",
  temperature: 28,
  condition: "soleado",
  iconUrl:
    "https://cdn2.iconfinder.com/data/icons/weather-682/1024/sun_sunny-512.png",
};

function App() {
  return (
    <>
      <header>
        <h1>El tiempo</h1>
      </header>
      <main>
        <WeatherInfo />
      </main>
    </>
  );
}

export default App;
