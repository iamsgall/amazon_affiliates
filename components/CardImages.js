import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import { CardActionArea } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
})

export default function CardImages({ image }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Image
            src={'https:' + image.fields.file.url}
            alt=''
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
