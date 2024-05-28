import { Link } from "react-router-dom"
// import "./App.css"
import { useSelector, useDispatch } from "react-redux"

function About() {
  // const dispatch = useDispatch()
  const info = useSelector((state) => state.info.value)

  return (
    <>
      <p>info value: {info}</p>
      <Link to="/">home</Link>
    </>
  )
}

export default About
