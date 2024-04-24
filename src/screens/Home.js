import Base from "../components/Base";
import PropertyCards from "../components/PropertyCards";
import SearchBar from "../components/SearchBar";
import AgentsCards from "../components/AgentsCards";
import Cards from "../components/Cards";
import NewLaunch from "../components/NewLaunch";
import ServicesCards from "../components/ServicesCards";
import TopProjectsCards from "../components/TopProjectsCards";

const Home = () => {
  return (
    <Base>
      <SearchBar />
      <Cards />
      <PropertyCards />
      <AgentsCards />
      <NewLaunch />
      <ServicesCards />
      <TopProjectsCards />
    </Base>
  );
};

export default Home;
