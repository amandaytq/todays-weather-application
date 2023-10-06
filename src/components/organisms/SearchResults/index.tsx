import { useContext } from "react";
import { WeatherContext } from "../../../App";
import Box from "../../atoms/Box";
import WeatherCard from "../../molecules/WeatherCard";
import Error from "../../molecules/Error";
import EmptyState from "../../molecules/EmptyState";

const SearchResults = () => {
  const { error, city, country, searchResult } = useContext(WeatherContext);

  return (
    <Box gap="large" padding="small" flexDirection="column">
      {error && city !== "" && country !== "" && (
        <Error message="Please enter a valid Country and City" />
      )}

      {searchResult ? <WeatherCard /> : <EmptyState />}
    </Box>
  );
};

export default SearchResults;
