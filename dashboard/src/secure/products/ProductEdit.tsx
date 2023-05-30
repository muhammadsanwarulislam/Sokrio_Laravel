import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Wrapper from "../Wrapper"
import axios from "axios"

const productEdit = () => {
  const [id, setId]       = useState(useParams().id)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    unit: '',
    product_code: ''
  })

  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${id}`)
      const item = response.data.data
      setFormData({
        name: item.name,
        price: item.price,
        stock: item.stock,
        unit: item.unit,
        product_code: item.product_code
      })
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onsubmit = async (event: any) => {
    event.preventDefault();
    try {
      await axios.put(`/products/${id}`, formData)
      navigate("/products")
    } catch (error) {
      console.error('Error updating item:', error)
    }
  };
  return (
    <>
      <Wrapper>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onsubmit}>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="unit"
                placeholder="Unit"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.unit}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="product_code"
                placeholder="Product Code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.product_code}
                onChange={handleInputChange}
              />
            </div>

            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default productEdit;
