import "../css/Main.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setInfo } from "../store/info.jsx"

function Main() {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.info.value)

  const setValue = () => {
    dispatch(setInfo(Date.now()))
  }

  return (
    <>
      <p>Info Value: {info}</p>
      <Link to="/about">about</Link>
      <br />
      <button onClick={setValue}>setValue</button>
    </>
  )
}

export default Main
