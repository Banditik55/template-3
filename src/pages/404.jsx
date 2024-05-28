import { Link } from "react-router-dom"
// import "./App.css"

function E404() {
  return (
    <>
      <p>404 error</p>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </>
  )
}

export default E404
