import { createContext, ReactNode, useEffect, useState } from 'react'

type ProductProps = {
  id: string
  title: string
  url: string
  text: string
  price: number
}

type ProductsProviderProps = {
  children: ReactNode
}

export const ProductsContext = createContext<ProductProps[]>([])

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
