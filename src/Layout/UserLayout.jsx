import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div class="container">
      <p>User datas !</p>
      <Outlet/>
    </div>
  )
}

export default UserLayout
