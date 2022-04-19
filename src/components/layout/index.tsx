import { Outlet, useNavigate } from "react-router-dom"
import Card from "../card"

const AppLayout = () => {
  const navigate = useNavigate()
  return (
    <div className="py-3">
      <Card>
        <div className="flex justify-between text-lg font-semibold italic">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            UPayment Store
          </div>
          <div>Register</div>
        </div>
      </Card>
      <Outlet />
    </div>
  )
}

export default AppLayout
