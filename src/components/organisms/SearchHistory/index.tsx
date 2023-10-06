import { useContext } from "react";
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import { WeatherContext } from "../../../App";
import SearchHistoryItem from "../../molecules/SearchHistoryItem";
import _ from "lodash";
import EmptyState from "../../molecules/EmptyState";

const SearchHistory = () => {
  const {
    searchHistory,
    setSearchHistory,
    searchWeather,
    setCity,
    setCountry,
  } = useContext(WeatherContext);

  const handleRemoveHistory = (index: number) => {
    searchHistory.splice(index, 1);
    setSearchHistory(_.cloneDeep(searchHistory));
  };

  const handleSearchHistory = (item: any) => {
    setCity(item.city);
    setCountry(item.country);
    searchWeather(item.city, item.country);
  };

  return (
    <Box flexDirection="column" className="search-history" padding="large">
      <Typography variant="h3">Search History</Typography>

      <hr />
      {searchHistory.length === 0 ? (
        <EmptyState />
      ) : (
        searchHistory.map((item: any, index: number) => (
          <SearchHistoryItem
            key={index}
            index={index}
            data={item}
            onClick={() => handleSearchHistory(item)}
            onDelete={() => handleRemoveHistory(index)}
          />
        ))
      )}
    </Box>
  );
};

export default SearchHistory;
