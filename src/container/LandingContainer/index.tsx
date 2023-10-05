import React, { useState } from "react";

import "./style.css";
import Box from "../../components/atoms/Box";
import Header from "../../components/molecules/Header";
import Typography from "../../components/atoms/Typography";
import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchHistoryItem from "../../components/molecules/SearchHistoryItem";

/**
 * Landing Container
 *
 * @returns
 */
const LandingContainer = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <Header />
      <main>
        {/* Search section */}
        <section>
          <Box gap="large" alignItems="center" padding="small">
            <Box gap="small" alignItems="center">
              <Typography>City:</Typography>
              <TextField placeholder="Enter a city" value={city} />
            </Box>
            <Box gap="small" alignItems="center">
              <Typography>Country:</Typography>
              <TextField placeholder="Enter a Country" value={country} />
            </Box>

            <Box gap="small" alignItems="center">
              <Button>Search</Button>
              <Button variant="secondary">Clear</Button>
            </Box>
          </Box>
        </section>

        {/*  Current Weather */}
        <section>
          <Box gap="medium" flexDirection="column">
            <Typography variant="h5">Johor, MY</Typography>
            <Typography variant="h1">Clouds</Typography>
            <Box gap="small" flexDirection="column">
              <Box gap="small">
                <label>Description:</label>
                <Typography>scatter clouds</Typography>
              </Box>
              <Box gap="small">
                <label>Description:</label>
                <Typography>scatter clouds</Typography>
              </Box>
              <Box gap="small">
                <label>Description:</label>
                <Typography>scatter clouds</Typography>
              </Box>
              <Box gap="small">
                <label>Description:</label>
                <Typography>scatter clouds</Typography>
              </Box>
            </Box>
          </Box>
        </section>

        {/* Search results */}
        <section>
          <Typography variant="h3">Search History</Typography>
          <hr />
          <SearchHistoryItem
            index={1}
            data={{
              name: "Hellow",
              time: new Date().valueOf().toString(),
            }}
          />
        </section>
      </main>
    </>
  );
};

export default LandingContainer;
