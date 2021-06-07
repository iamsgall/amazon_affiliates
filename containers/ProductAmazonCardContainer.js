import { Grid } from '@material-ui/core'
import React from 'react'

import ProductAmazonCard from '../components/ProductAmazonCard'

export default function ProductAmazonCardContainer({ products }) {
  console.log(products)
  return (
    <>
      {products.map(product => (
        <Grid key={product.sys.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductAmazonCard product={product} />
        </Grid>
      ))}
    </>
  )
}
