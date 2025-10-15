import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
    ],
  },
]);
