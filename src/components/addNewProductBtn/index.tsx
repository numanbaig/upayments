import React from "react"
import add from "../../assets/add.png"

type IProps = {
  onClick: () => void
}

const AddNewProduct = ({ onClick }: IProps) => {
  return (
    <div
      className="flex space-x-2 justify-center fixed bottom-0 right-10"
      onClick={onClick}
    >
      <div>
        <button
          type="button"
          className="inline-block bg-white rounded-full text-white leading-normal uppercase shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
        >
          <img src={add} />
        </button>
      </div>
    </div>
  )
}

export default AddNewProduct
