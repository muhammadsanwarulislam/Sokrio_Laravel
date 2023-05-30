import { useState, useEffect } from "react"
import Wrapper from "../Wrapper"
import axios from "axios"
import { Product } from "../../classes/Product"
import { Link } from "react-router-dom"

const products = () => {
  const [products, setProducts] = useState([])

  const getUsers = async () => {
    const response = await axios.get("/products")
    setProducts(response.data.data)
  }

  const removeProduct = async (id: any) => {
    await axios.delete(`products/${id}`)
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
}

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-3 divide-x">
          <Link
            to={"/products/create"}
            className="p-2 rounded-full text-green-800 hover:text-green-900"
          >
            Add
          </Link>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unite
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.product_code}</td>
                  <td>
                  <button className="p-2 rounded-full text-green-600 hover:text-indigo-900">
                      <Link to={`/products/${product.id}/edit`}>Edit</Link>
                    </button>
                  <button
                      className="p-2 rounded-full text-red-600 hover:text-indigo-900"
                      onClick={() => removeProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default products;
