import "./style.css";
import Box from "../../components/atoms/Box";
import Header from "../../components/molecules/Header";
import SearchForm from "../../components/organisms/SearchForm";
import SearchResults from "../../components/organisms/SearchResults";
import SearchHistory from "../../components/organisms/SearchHistory";

/**
 * Landing Container
 *
 * @returns
 */
const LandingContainer = () => {
  return (
    <>
      <Header />
      <main>
        <Box
          flexDirection="column"
          gap="large"
          padding="medium"
          className="container"
        >
          <SearchForm />
          <SearchResults />
          <SearchHistory />
        </Box>
      </main>
    </>
  );
};

export default LandingContainer;
