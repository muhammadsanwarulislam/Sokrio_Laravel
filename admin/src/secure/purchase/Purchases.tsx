import { useState, useEffect } from "react"
import Wrapper from "../Wrapper"
import axios from "axios"
import { Purchase } from "../../classes/Purchase"
import { Link } from "react-router-dom"

const purchases = () => {
  const [purchase, setPurchase] = useState([])

  const getPurchase = async () => {
    const response = await axios.get("/purchases")
    console.log(response)
    
    setPurchase(response.data.data)
  }

  useEffect(() => {
    getPurchase()
  }, [])

  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-3 divide-x">
          <Link
            to={"/purchases/create"}
            className="p-2 rounded-full text-green-800 hover:text-green-900"
          >
            Add
          </Link>
        </div>

      </Wrapper>
    </>
  );
};

export default purchases;
