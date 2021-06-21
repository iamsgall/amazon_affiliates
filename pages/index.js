import {
  Grid,
  Paper,
  Typography,
  CssBaseline,
  Container,
} from '@material-ui/core'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout.js'))
import { makeStyles } from '@material-ui/core/styles'
import CardCategories from '../components/CardCategories.js'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: 40,
    fontFamily: 'Cabin Condensed',
    fontWeight: 600,
    color: '#012D34',
  },
  body: {
    marginTop: 20,
    fontFamily: 'DM Sans',
    fontWeight: 400,
    lineHeight: '160%',
    fontSize: 18,
  },
  categoryItems: {
    marginTop: 20,
  },
  category: {
    cursor: 'pointer',
  },
}))
export default function Home() {
  const classes = useStyles()
  const router = useRouter()
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
            La mejor web de afiliacion con Amazon.
          </Typography>
          <Typography variant='body1' className={classes.body}>
            Un texto es una composición de signos codificados en un sistema de
            escritura que forma una unidad de sentido. También es una
            composición de caracteres imprimibles (con grafema) generados por un
            algoritmo de cifrado que, aunque no tienen sentido para cualquier
            persona, sí puede ser descifrado por su destinatario original. En
            otras palabras, un texto es un entramado de signos con una intención
            comunicativa que adquiere sentido en determinado contexto. Las ideas
            que comunica un texto están contenidas en lo que se suele denominar
            «macroproposiciones», unidades estructurales de nivel superior o
            global, que otorgan coherencia al texto constituyendo su hilo
            central, el esqueleto estructural que cohesiona elementos
            lingüísticos formales de alto nivel, como los títulos y subtítulos,
          </Typography>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            className={classes.title}
          >
            Categorías
          </Typography>
          <Container maxWidth='md'>
            <Grid
              container
              spacing={2}
              direction='row'
              justify='center'
              alignItems='center'
              alignContent='center'
              // wrap='nowrap'
              className={classes.categoryItems}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.category}
                onClick={() => router.push('/belleza')}
              >
                <CardCategories category='Belleza' />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.category}
                onClick={() => router.push('/camaras-y-fotografia')}
              >
                <CardCategories category='Cámaras y fotografía' />
              </Grid>

              {/* TODO: */}
              {/* Falta agregar la classe y el evento onCLick al resto de elementos */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Teléfonos y accesorios' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Electrónica' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Alimentación y bebidas' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Cuidado personal' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Hogar y Cocina' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Electrodomésticos' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Instrumentos música' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Oficina y papelería' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Informática' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Productos mascotas' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Deportes y aire libre' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Software' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Bricolaje herramientas' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Juguetes y juegos' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Videojuegos' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Relojes' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Ropa para mujeres' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Ropa para hombres' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Productos para bebé' />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </Layout>
  )
}
