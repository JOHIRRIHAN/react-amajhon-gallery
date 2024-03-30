import { useLoaderData } from "react-router-dom"
import ProductsCards from "../ProductCards/ProductsCards";

const Products = () => {
  const {products} = useLoaderData();

  
  return (
    <div className="grid grid-cols-3 gap-5 px-10 py-20">
      {
        products ?.map(product => <ProductsCards key={product.id} product={product}></ProductsCards>)
      }
    </div>
  )
}

export default Products;