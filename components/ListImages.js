import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

export default function ListImages({ imagesData }) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <GridList cellHeight={280} className={classes.gridList}>
        <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
          {/* <ListSubheader component='div'>December</ListSubheader> */}
        </GridListTile>
        {imagesData.map(image => (
          <GridListTile key={image.imageUrl}>
            <img src={image.imageUrl} alt={image.brand} />
            <GridListTileBar
              title={
                <Typography variant='body2' component='h3'>
                  {image.brand}
                </Typography>
              }
              subtitle={`$ ${image.price}`}
              actionIcon={
                <IconButton
                  aria-label={`info about ${image.brand}`}
                  className={classes.icon}
                >
                  <InfoIcon onClick={() => router.push(`${image.url}`)} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
