import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link, useHistory } from 'react-router-dom'
import './AddCountry.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 360
  },
  media: {
    height: 140
  }
})

const AddCountry = props => {
  const classes = useStyles()
  const { name, capital, flag } = props.country
  const history = useHistory()
  const handleCountryDetials = () => {
    console.log('clicked')
    history.push(`/details/${name}`)
  }
  return (
    <div className='col-lg-3 mb-5'>
      <div className='country'>
        <Card onClick={handleCountryDetials} className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={flag} title={flag} />
            <CardContent>
              <Typography variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography variant='h6' color='textSecondary' component='h4'>
                {capital}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/details/${name}`} className='text-decoration-none'>
              <Button
                className='justify-content-center'
                variant='contained'
                color='primary'
              >
                Show Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default AddCountry
