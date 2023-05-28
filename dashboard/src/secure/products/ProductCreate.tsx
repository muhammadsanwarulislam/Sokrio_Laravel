import { useState, useEffect } from "react"
import Wrapper from "../Wrapper"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const productCreate = () => {
  const [name, setName]     = useState("")
  const [price, setPrice]   = useState("")
  const [stock, setStock]  = useState("")
  const [unit, setUnit]  = useState("")
  const [product_code, setProductCode]  = useState("")

  const navigate = useNavigate()

  const onsubmit = async (event: any) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("stock", stock)
    formData.append("unit", unit)
    formData.append("product_code", product_code)
    await axios.post("products", formData)
    navigate("/products")
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
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={stock}
                onChange={(event) => {
                  setStock(event.target.value);
                }}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="unit"
                placeholder="Unit"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={unit}
                onChange={(event) => {
                  setUnit(event.target.value);
                }}
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="product_code"
                placeholder="Product Code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={product_code}
                onChange={(event) => {
                  setProductCode(event.target.value);
                }}
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

export default productCreate;