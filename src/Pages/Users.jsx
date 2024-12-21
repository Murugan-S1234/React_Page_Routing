import { Link, useLoaderData } from "react-router-dom"

const Users = () => {
    const userdata=useLoaderData();
  return (
    <div class="container">
        <div class="userdata">
        {userdata.map((user)=>{ 
        return (
        <Link to={user.id.toString()} key={user.id}> 
        <div >
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
        </div>
        </Link>
        );
      })}
    </div>
    </div>
  )
}

export default Users
