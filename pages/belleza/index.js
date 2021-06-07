import { Button } from '@material-ui/core'
import { createClient } from 'contentful'
import ProductAmazonCard from '../../components/ProductAmazonCard'

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

export default function Belleza({ products }) {
  console.log(products)
  return (
    <div className='products-list'>
      {/* {products.map(product => (
        <ProductAmazonCard key={product.sys.id} product={product} />
      ))} */}
    </div>
  )
}
