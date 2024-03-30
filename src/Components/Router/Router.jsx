import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import DashBoard from "../DashBoard/DashBoard";
import Product from "../Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: ()=> fetch('https://dummyjson.com/products')
      },
      {
        path: '/products/:id',
        element: <Product></Product>,
        loader: (params) => fetch(`https://dummyjson.com/products/${params.params.id}`)

      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default router;
