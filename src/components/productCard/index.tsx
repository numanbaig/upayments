import Card from "../card"

type IProductCard = {
  id: string
  productName: string
  price: number
  productImage: string
  onClick: (id: string) => void
}

const ProductCard = ({
  productName,
  price,
  productImage,
  id,
  onClick,
}: IProductCard) => {
  console.log("productImage", productImage)
  return (
    <div className="flex flex-col " onClick={() => onClick(id)}>
      <Card className={`p-3 rounded-2xl w-[150px] h-[150px]`}>
        {productImage ? (
          <img src={productImage} className="w-full h-full" />
        ) : (
          <div className="w-full h-full bg-slate-600" />
        )}
      </Card>
      <div className="text-sm mt-2.5">{productName}</div>
      <div className="text-center text-sm">{`$ ${price}`}</div>
    </div>
  )
}

export default ProductCard
