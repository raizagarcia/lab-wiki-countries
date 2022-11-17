import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


function CountriesList() {

    const [countries, setCountries] = useState([]);
    const [fetching, setFetching] = useState(true);
  
    const getCountries = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        const countries = response.data;
        setCountries(countries);
        setFetching(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getCountries();
    }, []);
  
    if (fetching) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {countries.map((country) => {
            return (
                <div key={country.name} className="countrieslist">
                <Link to={`/${country.alfa3code}`}><p>{country.name.common}</p></Link>
                
                </div>
            );
          })}
        </div>
      );
    }
}

export default CountriesList