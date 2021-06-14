import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/Layout'))

import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import Image from 'next/image'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import CardAmazon from '../../components/CardAmazon'
import CardImages from '../../components//CardImages'
import Link from 'next/link'
import Skeleton from '../../components/Skeleton'
import ListImages from '../../components/ListImages'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'productsAmazon',
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'productsAmazon',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      product: items[0],
    },
    revalidate: 1,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: 40,
  },
  body: {
    marginTop: 20,
  },
  banner: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  images: {
    marginTop: 20,
  },
  characteristics: {
    marginTop: 40,
  },
  cardAmazon: {
    marginTop: 20,
  },
  advantages: {
    marginTop: 40,
  },
  image: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  disadvantages: {
    marginTop: 40,
  },
  offers: {
    marginTop: 20,
  },
  colors: {
    marginTop: 20,
  },
  brands: {
    marginTop: 20,
    marginBottom: 20,
  },
}))

const imagesData = [
  {
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51S4gnK6MtL._AC_SL1001_.jpg',
    brand: 'Victure',
    price: '25.99',
    url: 'https://amz.run/4e3V',
  },
  {
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61sRNIlrGWL._AC_SL1500_.jpg',
    brand: 'EZVIZ',
    price: '26.99',
    url: 'https://amz.run/4e3T',
  },
  {
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51RAiKC4hgL._AC_SL1500_.jpg',
    brand: 'eufy',
    price: '49.99',
    url: 'https://amz.run/4e3l',
  },
]

export default function CamaraYFotografiaDetails({ product }) {
  if (!product) return <Skeleton />

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
    forWhoContent,
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

  // console.log(thumbnail2)

  const classes = useStyles()
  return (
    <Layout title='test' description='test'>
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth='md'>
          <Typography
            variant='h2'
            component='h1'
            align='center'
            className={classes.title}
          >
            {titleH1}
          </Typography>
          <div className={classes.banner}>
            <Image
              src={`https:${thumbnail.fields.file.url}`}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
            />
          </div>
          <span className={classes.banner}></span>
          <Typography variant='body1' className={classes.body} component='span'>
            {documentToReactComponents(contentTitle)}
          </Typography>
          <div className={classes.images}>
            <CssBaseline />
            <Container maxWidth='md'>
              <Grid
                container
                spacing={2}
                direction='row'
                justify='center'
                alignItems='center'
                alignContent='center'
                // wrap='nowrap'
              >
                {imagesProduct.map(image => (
                  <Grid key={image.sys.id} item xs={12} sm={6} md={4} lg={4}>
                    <CardImages image={image} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
          <div className={classes.characteristics}>
            <Typography variant='h2' align='center'>
              {characteristicsH2}
            </Typography>
            <Typography
              variant='body1'
              className={classes.body}
              component='span'
            >
              {documentToReactComponents(contentCharacteristics)}
            </Typography>
          </div>
          <div className={classes.cardAmazon}>
            <CardAmazon
              thumbnail2={thumbnail2}
              titleProduct={titleProduct}
              price={price.toFixed(2)}
              // bestSeller={bestSeller}
            />
          </div>
          <div className={classes.advantages}>
            <Typography variant='h2' align='center'>
              {advantagesH2}
            </Typography>
            <Typography
              variant='body1'
              className={classes.body}
              component='span'
            >
              {documentToReactComponents(contentAdvantages)}
            </Typography>
          </div>
          <div className={classes.image}>
            <Paper elevation={2}>
              <Link href='/'>
                <a>
                  <Image
                    src={`https:${thumbnail2.fields.file.url}`}
                    width={380}
                    height={340}
                  />
                </a>
              </Link>
            </Paper>
          </div>
          <div className={classes.disadvantages}>
            <Typography variant='h2' align='center'>
              {disadvantagesH2}
            </Typography>
            <Typography
              variant='body1'
              className={classes.body}
              component='span'
            >
              {documentToReactComponents(contentDisadvantages)}
            </Typography>
          </div>

          {/* <div className={classes.offers}>
            <Typography variant='h2' align='center'>
              {otherOffersH2}
            </Typography>
            <p>
              <strong style={{ backgroundColor: 'yellow', padding: 8 }}>
                Ahora no importa. Solo Cuando tengamos link de afiliacion
              </strong> 
            </p>
          </div> */}
          <div className={classes.disadvantages}>
            <Typography variant='h2' align='center'>
              {forWhoH2}
            </Typography>
            <Typography
              variant='body1'
              className={classes.body}
              component='span'
            >
              {documentToReactComponents(forWhoContent)}
            </Typography>
          </div>
          {/* <div className={classes.colors}>
            <Typography variant='h2' align='center'>
              {pickByColorH2} (pickColorH2 👈)
            </Typography>
            <p>
              <strong style={{ backgroundColor: 'yellow', padding: 8 }}>
                Ahora no importa. Solo Cuando tengamos link de afiliacion
              </strong>
            </p>
          </div> */}
          <div className={classes.brands}>
            <CssBaseline />
            <Container maxWidth='sm'>
              <Typography variant='h2' align='center'>
                {brandsH2}
              </Typography>
              <Box boxShadow={1}>
                <ListImages imagesData={imagesData} />
              </Box>
            </Container>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
