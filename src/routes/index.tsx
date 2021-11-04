import { Route, Routes as ReactRouter } from 'react-router'
import { Home } from '../pages/Home'
import { Product } from '../pages/Product'

export function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
    </ReactRouter>
  )
}
