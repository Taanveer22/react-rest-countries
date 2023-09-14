import './Country.css'
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population, area } = country;
    return (
        <div className='countryStyle'>
            <h3>name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: { area}</p>
            
            
        </div>
    );
};

export default Country;