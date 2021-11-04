import { useParams } from 'react-router'
import { Header } from '../components/Header'

export function Product() {
  const { id } = useParams()

  console.log(id)

  return (
    <>
      <Header />
      <h1>Product</h1>
    </>
  )
}
