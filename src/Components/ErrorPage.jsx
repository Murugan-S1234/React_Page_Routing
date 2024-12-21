import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div class="container">
      <h3>oops error occured !!</h3>
      <p>{error.message}</p>
    </div>
  )
}

export default ErrorPage
