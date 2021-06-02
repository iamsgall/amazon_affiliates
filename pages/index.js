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
  categoryItems: {
    marginTop: 20,
  },
}))
export default function Home() {
  const classes = useStyles()
  return (
    <Layout title='test' description='test'>
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Typography
            variant='h2'
            component='h1'
            align='center'
            className={classes.title}
          >
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant='body1' className={classes.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            magni. Aut ullam amet, reiciendis, animi deserunt suscipit iste quos
            unde ducimus sit tenetur quia similique, dolorem repellat a fugiat
            tempora necessitatibus dignissimos earum quasi ab eveniet! Officiis,
            culpa laboriosam hic harum, nulla esse ex eveniet quibusdam eos
            vitae dignissimos veritatis quasi praesentium non est odio ipsam
            dolorem recusandae, fugit repudiandae? Repellendus fugit nihil
            praesentium fugiat impedit itaque, similique id at mollitia quam
            iure beatae eveniet! Repellendus esse voluptatem deleniti officiis.
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
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Belleza' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardCategories category='Cámaras y fotografía' />
              </Grid>
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
                <CardCategories category='Instrumentos musica' />
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
