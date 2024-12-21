import { useLoaderData} from "react-router-dom"

const User = () => {
    const userDetails=useLoaderData();
  return (
    <div>
      {userDetails.name}
    </div>
  )
}
export default User
