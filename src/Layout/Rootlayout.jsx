import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Rootlayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Rootlayout
