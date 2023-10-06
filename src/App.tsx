import { createContext, useEffect, useState } from "react";
import LandingContainer from "./container/LandingContainer";
import WeatherService from "./services";
import moment from "moment";

type WeatherType = {
  city: string;
  country: string;
  weather: string;
  description: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
  timezone: number;
  icon: string;
};

type ContextValues = {
  city: string;
  setCity: (s: string) => void;
  country: string;
  setCountry: (s: string) => void;
  searchHistory: Array<Object>;
  setSearchHistory: (s: Array<Object>) => void;
  error: string | null;
  setError: (s: string | null) => void;
  searchWeather: (city: string, country: string) => void;
  searchResult: WeatherType | null;
};

export const WeatherContext = createContext<ContextValues>({
  city: "",
  setCity: (s: string) => {},
  country: "",
  setCountry: (s: string) => {},
  searchHistory: [],
  setSearchHistory: (s: Array<Object>) => {},
  error: null,
  setError: (s: string | null) => {},
  searchWeather: (city: string, country: string) => {},
  searchResult: null,
});

const App = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [searchResult, setSearchResult] = useState(null as any);
  const [searchHistory, setSearchHistory] = useState([] as any);
  const [error, setError] = useState(null as any);

  const searchWeather = (city: string, country: string) => {
    setError(null);

    WeatherService.getWeather(city, country)
      .then((res: any) => {
        setSearchResult({
          city: res.name,
          country: res?.sys?.country,
          weather: res?.weather[0]?.main,
          description: res?.weather[0]?.description,
          tempMin: res.main.temp_min,
          tempMax: res.main.temp_max,
          humidity: res.main.humidity,
          timezone: res.timezone,
          icon: res?.weather[0]?.icon,
        });

        setSearchHistory([
          ...searchHistory,
          {
            city: res.name,
            country: res?.sys?.country,
            icon: res?.weather[0]?.icon,
            timestamp: moment(),
          },
        ]);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    if (city === "" && country === "") {
      setSearchResult(null);
    }
  }, [city, country]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        country,
        setCountry,
        searchHistory,
        setSearchHistory,
        error,
        setError,
        searchWeather,
        searchResult,
      }}
    >
      <LandingContainer />
    </WeatherContext.Provider>
  );
};
export default App;
