import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "../pages/home-page"
import ProductDetail from "../pages/product-detail-page"
import CreateProduct from "../pages/create-product"
import AppLayout from "../components/layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="add-new-product" element={<CreateProduct />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
