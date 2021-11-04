import { useParams } from 'react-router'

export function Product() {
  const { id } = useParams()

  console.log(id)

  return <h1>Product</h1>
}
