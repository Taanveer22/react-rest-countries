import { useState } from 'react';
import './Country.css'
import Countries from './Countries';
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`countryStyle ${visited ? 'visited' : 'non-visited'}`}>
             {Countries.length}

            <h3>name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p>code: {cca3}</p>
            <button onClick={handleVisited}>{visited? 'visited': 'going'}</button>
                {/* {visited && 'i have visited this country'} */}
            {visited ? 'i have visited this country': 'i want to visit'}
        </div>
    );
};

export default Country;