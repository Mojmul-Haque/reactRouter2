import React, { useEffect, useState } from 'react'
import AddCountry from './AddCountry/AddCountry'

const Header = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h4 className="mb-5 mt-2 py-3 text-white bg-warning">Country : <span className="text-success">{countries.length}</span></h4>
      <div className='container'>
        <div className='row'>
          {' '}
          {countries.map(country => (
            <AddCountry country={country} key={country.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
