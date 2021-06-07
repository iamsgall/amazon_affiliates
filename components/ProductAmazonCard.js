import Link from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { blue, green, orange, red, yellow } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Box, CardActionArea, Grid } from '@material-ui/core'
import { EuroOutlined, StarOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 320,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#012F36',
    color: '#fff',
  },
  star: {
    color: yellow[700],
  },
  thumbUp: {
    color: blue[700],
  },
  euro: {
    color: green[700],
  },
}))
export default function ProductAmazonCard({ product }) {
  const classes = useStyles()
  const router = useRouter()

  const {
    titleH1,
    slug,
    thumbnail,
    contentTitle,
    imagesProduct,
    characteristicsH2,
    contentCharacteristics,
    advantagesH2,
    contentAdvantages,
    thumbnail2,
    disadvantagesH2,
    contentDisadvantages,
    otherOffersH2,
    forWhoH2,
    pickByColorH2,
    productColorsH2,
    brandsH2,
    category,
    price,
    bestSeller,
    titleProduct,
    productDescription,
    rating,
    reviews,
    url,
  } = product.fields

  console.log(slug)

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => router.push(`/camaras-y-fotografia/${slug}`)}
        >
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                AC
              </Avatar>
            }
            title={titleProduct}
            subheader="Amazon's
          Choice"
          />
          <CardMedia
            className={classes.media}
            image={`https:${thumbnail.fields.file.url}`}
            title='Paella dish'
          />
          <CardContent style={{ marginTop: 8, marginBottom: 8 }}>
            <Typography variant='body2' color='textSecondary' component='p'>
              {productDescription}
            </Typography>
          </CardContent>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ marginBottom: 4, marginTop: 12 }}
            >
              <StarOutlined className={classes.star} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ marginBottom: 4, marginTop: 12 }}
            >
              <ThumbUpOutlined className={classes.thumbUp} />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ marginBottom: 4, marginTop: 12 }}
            >
              <EuroOutlined className={classes.euro} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} style={{ marginBottom: 6 }}>
              <Typography variant='body2' color='textSecondary'>
                4.5 / 5
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} style={{ marginBottom: 6 }}>
              <Typography variant='body2' color='textSecondary'>
                3.662
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} style={{ marginBottom: 6 }}>
              <Typography variant='body1' color='textSecondary'>
                <strong>€ 25.99</strong>
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  )
}
