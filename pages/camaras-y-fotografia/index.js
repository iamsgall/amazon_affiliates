import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import dynamic from 'next/dynamic'
import { Grid } from '@material-ui/core'
import { createClient } from 'contentful'
import ProductAmazonCardContainer from '../../containers/ProductAmazonCardContainer'
import Skeleton from '../../components/Skeleton'

const Layout = dynamic(() => import('../../components/Layout'))

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: 'productsAmazon',
  })

  return {
    props: {
      products: res.items,
    },
    revalidate: 1,
  }
}

const useStyles = makeStyles(theme => ({}))

export default function CamaraYFotografia({ products }) {
  if (!products) return <Skeleton />

  const classes = useStyles()

  return (
    <Layout title='test' description='test'>
      <div className={classes.root}>
        <Grid container align='center'>
          <ProductAmazonCardContainer products={products} />
        </Grid>
      </div>
    </Layout>
  )
}
