import "./style.css";
import Typography from "../../atoms/Typography";
import Box from "../../atoms/Box";
import { useContext } from "react";
import { WeatherContext } from "../../../App";
import moment from "moment";

const WeatherCard = () => {
  const { searchResult } = useContext(WeatherContext);

  return (
    searchResult && (
      <Box
        className="weather-card"
        gap="medium"
        flexDirection="column"
        padding="large"
      >
        <Box flexDirection="column">
          <Typography variant="h5">
            {searchResult.city}, {searchResult.country}
          </Typography>

          <Box>
            <img
              src={`https://openweathermap.org/img/wn/${searchResult.icon}@4x.png`}
              alt={searchResult.weather}
              width="50px"
            />
            <Typography variant="h1">{searchResult.weather}</Typography>
          </Box>
        </Box>

        <Box gap="small" flexDirection="column">
          {searchResult.description && (
            <Box gap="small">
              <label>Description:</label>
              <Typography>{searchResult.description}</Typography>
            </Box>
          )}

          {searchResult.tempMin && searchResult.tempMax && (
            <Box gap="small">
              <label>Temperature:</label>
              <Typography>
                {searchResult.tempMin}&deg;C ~ {searchResult.tempMax}&deg;C
              </Typography>
            </Box>
          )}

          {searchResult.humidity && (
            <Box gap="small">
              <label>Humidity:</label>
              <Typography>{searchResult.humidity}%</Typography>
            </Box>
          )}

          {searchResult.timezone && (
            <Box gap="small">
              <label>Time:</label>
              <Typography>
                {moment()
                  .utc()
                  .utcOffset(searchResult.timezone / 60)
                  .format("YYYY-MM-DD hh:mm A")}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    )
  );
};

export default WeatherCard;
