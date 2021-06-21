import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Box, CardActionArea } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    padding: 30,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  amazonChoice: {
    color: '#012F36',
  },
  amazonBestSeller: {
    color: '#E67A00',
  },
  buy: {
    backgroundColor: '#F1C55E',
    borderRadius: 20,
    padding: '7px 14px',
    display: 'inline',
    color: '#012F36',
    verticalAlign: 'middle',
    display: 'inline-flex',
    marginTop: 4,
  },
  iconPlusText: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
}))

export default function CardAmazon({
  thumbnail2,
  titleProduct,
  price,
  // bestSeller,
}) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Box className={classes.image}>
              <img
                className={classes.img}
                alt='complex'
                src={'https:' + thumbnail2.fields.file.url}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {titleProduct}
                </Typography>
                <ButtonBase onClick={() => router.push('https://amz.run/4eIU')}>
                  <Typography variant='body2' className={classes.buy}>
                    <ShoppingCartOutlined
                      fontSize='small'
                      style={{ marginRight: 4 }}
                    />
                    <strong>Comprar en Amazon</strong>
                  </Typography>
                </ButtonBase>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>€{price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
