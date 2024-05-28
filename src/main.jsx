import React from "react"
import ReactDOM from "react-dom/client"
import MainPage from "./pages/Main.jsx"
import AboutPage from "./pages/About.jsx"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import E404Page from "./pages/404.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "*",
    element: <E404Page />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
