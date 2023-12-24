import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from './../pages/Login/Login';
import Home from './../pages/Home/Home';
import Error from './../pages/Error/Error';
import MainLayout from "../layout/MainLayout";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../pages/MyCart/MyCart";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <PrivateRoutes><ProductDetails /></PrivateRoutes>,
      },
      {
        path: "cart",
        element: <PrivateRoutes><MyCart /></PrivateRoutes>,
      },
    ],
  },
]);

export default Routes;
