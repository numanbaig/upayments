import React, { Suspense } from "react"
import Card from "../../components/card"
import { useGetProduct } from "../../hooks/useGetProduct"
import { useParams } from "react-router-dom"
import Loader from "../../components/loader"

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetProduct(id ? id : "")
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-[60%] mx-auto mt-20 ">
          <div className="flex flex-wrap">
            <Card className="p-3 max-w-[120px] rounded-lg">
              <img src={data?.avatar} className="max-w-full" />
            </Card>
            <div className="flex flex-col justify-between pl-6">
              <h2 className="text-xl font-semibold">{data?.name}</h2>
              <div>{`$ ${data?.price}`}</div>
            </div>
          </div>
          <hr className="mt-5 border-1 border-[#243c5a]" />
          <h3 className="mt-3">Description</h3>
          <p className="text-slate-500 text-sm">{data?.description}</p>
        </div>
      )}
    </>
  )
}
export default ProductDetail
