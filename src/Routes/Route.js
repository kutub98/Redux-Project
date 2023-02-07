import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormInput from "../Components/child/Form/FormInput";
import Layout from "../Components/LayOut/Layout";
import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import OrderList from "../Components/Pages/OrderList/OrderList";
import Shop from "../Components/Pages/Shop/Shop";
import TopRate from "../Components/Pages/TopRate/TopRate";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "home", element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "topRated", element: <TopRate></TopRate> },
        { path: "selected", element: <OrderList></OrderList> },
        { path: "shop", element: <Shop></Shop> },
        {path: 'register', element: <FormInput></FormInput>}
      ],
    },
  ]);
  return <div>
    <RouterProvider router={router}></RouterProvider>
  </div>;
};

export default Route;
