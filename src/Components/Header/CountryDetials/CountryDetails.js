import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleCountry from '../signleCountry/SingleCountry'

const CountryDetails = () => {
  const { countryName } = useParams()
  const [country, setCountry] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  console.log(country)

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {country.map(country => (
          <SingleCountry country={country} key={country.flag}></SingleCountry>
        ))}
      </div>
    </div>
  )
}

export default CountryDetails
