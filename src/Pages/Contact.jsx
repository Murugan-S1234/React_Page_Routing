import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div class="container">
      <button onClick={()=>navigate("info")}>Details</button>
      <button onClick={()=>navigate("form")}>Message</button>
    </div>
  )
}

export default Contact
