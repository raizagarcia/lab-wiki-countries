import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import countries from '../src/countries.json'
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
     <nav>
      <Navbar />
     </nav>

    <CountriesList/>
  
    <Routes>
    { <Route path="/countryId" element={CountryDetails} /> }
    </Routes>
      
    </div>
  );
}

export default App;
