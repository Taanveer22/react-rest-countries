import { useEffect, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = () => {
  // step 1
  const [countries, setCountries] = useState([]);

  // step 2
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      // step 3
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      {/* step 4 */}
      <h5>countries: {countries.length}</h5>
      {/* step 5 */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
