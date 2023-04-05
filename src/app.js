import Forecast from "./components/weatherdata/forecast";
import Header from "./components/Header/Header";
import { CityProvider } from "./components/weatherapi/CityContext";
import Weatherdata from "./components/weatherdata/weatherdata";

function App() {
  return (
    <div className="all">
      <CityProvider>
      <div>
        <div>
          <Header />
        </div>
        <Weatherdata> </Weatherdata>
      </div>
    </CityProvider>
    </div>
  );
}

export default App;
