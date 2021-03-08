import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
const SingleCountry = props => {
  const { name, capital, area,population } = props.country
  return (
    <>
      <div className='col-6'>
        <div className="d-flex mt-5">
          <ul className='list-group w-100'>
            <li className='list-group-item list-group-item-action'>Name </li>
            <li className='list-group-item list-group-item-action'>
             Capital
            </li>
            <li className='list-group-item list-group-item-action'>
            Population 
            </li>
            <li className='list-group-item list-group-item-action'>
            Area 
            </li>
          </ul>
          <ul className='list-group w-100 border-s-0'>
            <li className='list-group-item list-group-item-action'>{name}</li>
            <li className='list-group-item list-group-item-action'>
            {capital}
            </li>
            <li className='list-group-item list-group-item-action'>
             {population} 
            </li>
            <li className='list-group-item list-group-item-action'>
             {area} km/Sq
            </li>
          </ul>
        </div>
        
        <Link className="text-decoration-none" to="/">
        <Button style={{margin: " 10px 0 0"}}
              variant='contained'
              color='secondary'
            >
             Back to Home
            </Button>
        </Link>
      </div>
    </>
  )
}

export default SingleCountry
