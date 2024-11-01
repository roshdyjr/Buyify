import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home/Home"
import Products from "./components/Products/Products"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/NotFound/NotFound"

const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    {
      index: true, element: <Home />
    },
    { path: '/products', element: <Products />, },
    {
      path: "*", element: <NotFound />
    },
  ]
}])

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
