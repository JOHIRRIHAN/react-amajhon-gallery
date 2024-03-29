import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import DashBoard from "../DashBoard/DashBoard";

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
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default router;
