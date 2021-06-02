import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
} from '@material-ui/core/colors'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    minHeight: 90,
  },
  content: {
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: () => {
      switch (getRandomInt(0, 17)) {
        case 0:
          return red[300]
        case 1:
          return pink[300]
        case 2:
          return purple[300]
        case 3:
          return deepPurple[300]
        case 4:
          return indigo[300]
        case 5:
          return blue[300]
        case 6:
          return lightBlue[300]
        case 7:
          return cyan[300]
        case 8:
          return teal[300]
        case 9:
          return green[300]
        case 10:
          return lightGreen[300]
        case 11:
          return lime[300]
        case 12:
          return blueGrey[300]
        case 13:
          return amber[300]
        case 14:
          return orange[300]
        case 15:
          return deepOrange[300]
        case 16:
          return brown[300]

        default:
          break
      }
    },
  },
  typo: {
    fontSize: 17,
  },
})

export default function CardCategories({ category }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='elevation'>
      <CardContent className={classes.content}>
        <Typography variant='subtitle2' className={classes.typo}>
          {category}
        </Typography>
      </CardContent>
    </Card>
  )
}
