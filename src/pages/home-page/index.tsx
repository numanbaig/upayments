import React from "react"
import Card from "../../components/card"
import Select from "../../components/select"
import ProductCard from "../../components/productCard"
import Iphone from "../../assets/12promax.jpg"
import AddNewProduct from "../../components/addNewProductBtn"
import { useNavigate } from "react-router-dom"
import { useGetProducts } from "../../hooks/useGetProducts"
import { useGetCategories } from "../../hooks/useGetCategories"
import { useGetCategory } from "../../hooks/useGetCategory"
import Loader from "../../components/loader"

type IProductCard = {
  id: string
  name: string
  price: number
  avatar: string
  onClick: (id: string) => void
}

const Home = () => {
  const navigate = useNavigate()
  const { data, isLoading }: any = useGetProducts()
  const { data: Categories, isLoading: categoryLoading } = useGetCategories()
  const { getCategory, data: category } = useGetCategory()

  console.log(category, "category")

  const listProductNames = () => {
    data?.map((product: any) => {
      return <span>{product.name}</span>
    })
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between mt-8 items-center">
            <Card className="py-2">
              <div className="flex text-sm justify-between">
                {data?.map((product: any) => {
                  return `${product.name}  `
                })}
              </div>
            </Card>
            <Select
              options={Categories}
              placeholder={"Categories"}
              onChange={(e) => getCategory(e.target.value)}
            />
          </div>
          <div className="max-w-[60%] mx-auto mt-20 grid flex-wrap grid-cols-4">
            {data?.map((product: IProductCard, index: string) => (
              <ProductCard
                key={index}
                productImage={product.avatar}
                price={product.price}
                productName={product.name}
                id={product.id}
                onClick={(id) => navigate(`product/${id}`)}
              />
            ))}
          </div>
          <AddNewProduct onClick={() => navigate("/add-new-product")} />
        </>
      )}
    </>
  )
}
export default Home
