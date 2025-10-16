import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppsDetail from "../Components/AppsDetail";
import Error from "../Pages/Error";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/appsDetail/:id",
        Component: AppsDetail,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
