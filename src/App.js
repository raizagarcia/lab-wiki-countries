import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
const [countries, setCountries] = useState([])

const getFromApi = async () => {

  try {

    const apiCall = await axios.get('https://ih-countries-api.herokuapp.com/countries')

    setCountries(apiCall.data)
    
  } catch (error) {
    console.log(error)
  } 
}

useEffect(() => {
  getFromApi()
}, [])



  return (
    <div className="App">
     <nav>
      <Navbar />
     </nav>

    <CountriesList countries={countries} />
  
    <Routes>
     <Route path="/:countryId" element={<CountryDetails/>} /> 
    </Routes>
      
    </div>
  );
}

export default App;
