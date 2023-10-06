import { ChangeEvent, useContext } from "react";
import Box from "../../atoms/Box";
import TextField from "../../atoms/TextField";
import Typography from "../../atoms/Typography";
import { WeatherContext } from "../../../App";
import Button from "../../atoms/Button";

const SearchForm = () => {
  const { city, setCity, country, setCountry, searchWeather } =
    useContext(WeatherContext);

  const checkString = (val: string) => {
    const regex = /^[A-Za-z ]+$/;
    return val === "" ? true : val.match(regex);
  };

  return (
    <Box
      gap="large"
      alignItems="center"
      padding="small"
      className="search-form"
    >
      <Box gap="small" alignItems="center">
        <Typography>City:</Typography>

        <TextField
          placeholder="Enter a city"
          value={city}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCity(checkString(e.target.value) ? e.target.value : city)
          }
        />
      </Box>

      <Box gap="small" alignItems="center">
        <Typography>Country:</Typography>
        <TextField
          placeholder="Enter a Country"
          value={country}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCountry(checkString(e.target.value) ? e.target.value : country)
          }
        />
      </Box>

      <Box gap="small" alignItems="center">
        <Button
          disabled={city === "" || country === ""}
          onClick={() => searchWeather(city, country)}
        >
          Search
        </Button>
        <Button
          disabled={city === "" && country === ""}
          color="secondary"
          onClick={() => {
            setCity("");
            setCountry("");
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
